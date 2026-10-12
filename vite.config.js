import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inline-critical-css',
      apply: 'build',
      enforce: 'post',
      generateBundle(options, bundle) {
        // Find the critical CSS file (from critical.css import)
        const criticalCssFile = Object.keys(bundle).find(f => f.endsWith('.css') && f.includes('critical'))
        
        if (criticalCssFile) {
          const criticalCss = bundle[criticalCssFile].source
          
          // Find index.html
          const htmlFile = Object.keys(bundle).find(f => f === 'index.html')
          if (htmlFile) {
            const html = bundle[htmlFile]
            let htmlSource = html.source
            
            // Remove the link tag for critical CSS
            htmlSource = htmlSource.replace(
              `<link rel="stylesheet" crossorigin href="/${criticalCssFile}">`,
              ''
            )
            
            // Inject critical CSS inlined in head before closing </head>
            const inlinedCss = `<style>${criticalCss}</style>`
            htmlSource = htmlSource.replace('</head>', `  ${inlinedCss}\n</head>`)
            
            html.source = htmlSource
          }
          
          // Remove critical CSS from bundle (it's inlined)
          delete bundle[criticalCssFile]
        }
      }
    },
    {
      name: 'inject-modulepreload',
      apply: 'build',
      enforce: 'post',
      generateBundle(options, bundle) {
        // Find index.html
        const htmlFile = Object.keys(bundle).find(f => f === 'index.html')
        if (!htmlFile) return
        
        const html = bundle[htmlFile]
        let htmlSource = html.source
        
        // Find critical chunks for modulepreload
        const criticalChunks = [
          'vendor-react-core',
          'section-hero',
          'vendor-router',
        ]
        
        // Build modulepreload links for critical chunks
        let preloadLinks = criticalChunks
          .map(chunkName => {
            const chunkFile = Object.keys(bundle).find(
              f => f.endsWith('.js') && f.includes(chunkName)
            )
            return chunkFile ? `    <link rel="modulepreload" href="/${chunkFile}">` : null
          })
          .filter(Boolean)
          .join('\n')
        
        // Also preload the main entry
        const mainEntry = Object.keys(bundle).find(f => f === 'main.js' || (f.endsWith('.js') && f.includes('main') && !f.includes('-')))
        if (mainEntry && !criticalChunks.some(c => mainEntry.includes(c))) {
          preloadLinks = `    <link rel="modulepreload" href="/${mainEntry}">\n` + preloadLinks
        }
        
        // Inject after font preloads
        if (preloadLinks) {
          htmlSource = htmlSource.replace(
            '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap"></noscript>',
            `<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap"></noscript>\n\n    <!-- Module preload for critical JS chunks -->\n${preloadLinks}`
          )
        }
        
        // Defer non-critical chunks using requestIdleCallback
        const nonCriticalChunks = [
          'vendor-other',
          'vendor-icons',
          'vendor-motion',
          'sections-primary',
          'sections-secondary',
          'sections-tertiary',
          'features-quote',
          'features-ai-assistant',
          'features-other',
          'ui-components',
          'utils',
        ]
        
        const deferredScripts = nonCriticalChunks
          .map(chunkName => {
            const chunkFile = Object.keys(bundle).find(
              f => f.endsWith('.js') && f.includes(chunkName)
            )
            return chunkFile ? `    <script type="module">if ('requestIdleCallback' in window) { requestIdleCallback(() => import('/${chunkFile}')); } else { setTimeout(() => import('/${chunkFile}'), 2000); }</script>` : null
          })
          .filter(Boolean)
          .join('\n')
        
        if (deferredScripts) {
          htmlSource = htmlSource.replace(
            '</body>',
            `    <!-- Deferred non-critical JS chunks -->\n${deferredScripts}\n  </body>`
          )
        }
        
        html.source = htmlSource
      }
    }
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        ecma: 2020,
        module: true,
        toplevel: true,
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      format: {
        comments: false,
        ecma: 2020,
      },
      mangle: {
        module: true,
        toplevel: true,
        reserved: ['React', 'ReactDOM'],
      },
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        critical: path.resolve(__dirname, 'src/critical.css'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react-core';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('motion') || id.includes('@gsap') || id.includes('gsap')) {
              return 'vendor-motion';
            }
            // Split other vendor code into smaller chunks
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-other';
          }
          // Split page sections into individual chunks for better code splitting and tree-shaking
          if (id.includes('/sections/Hero')) {
            return 'section-hero';
          }
          // Combine below-fold sections into fewer chunks
          if (id.includes('/sections/Services') || id.includes('/sections/WhyVeritas') || id.includes('/sections/QuickStart')) {
            return 'sections-primary';
          }
          if (id.includes('/sections/Process') || id.includes('/sections/HOA') || id.includes('/sections/ServiceAreas')) {
            return 'sections-secondary';
          }
          if (id.includes('/sections/FAQ') || id.includes('/sections/CTA')) {
            return 'sections-tertiary';
          }
          if (id.includes('/features/quote/')) {
            return 'features-quote';
          }
          if (id.includes('/features/ai-assistant/')) {
            return 'features-ai-assistant';
          }
          if (id.includes('/features/')) {
            return 'features-other';
          }
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          if (id.includes('/context/') || id.includes('/hooks/') || id.includes('/utils/') || id.includes('/services/') || id.includes('/constants/')) {
            return 'utils';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|ttf|eot)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          if (/\.css$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['motion', 'gsap', '@gsap/react'],
  },
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}`, css: `/${filename}` }
      }
      return { relative: true }
    },
  },
})