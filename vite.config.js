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
            return 'vendor-other';
          }
          // Split page sections into individual chunks for better code splitting and tree-shaking
          if (id.includes('/sections/Hero')) {
            return 'section-hero';
          }
          if (id.includes('/sections/Services')) {
            return 'section-services';
          }
          if (id.includes('/sections/WhyVeritas')) {
            return 'section-why-veritas';
          }
          if (id.includes('/sections/QuickStart')) {
            return 'section-quick-start';
          }
          if (id.includes('/sections/Process')) {
            return 'section-process';
          }
          if (id.includes('/sections/HOA')) {
            return 'section-hoa';
          }
          if (id.includes('/sections/ServiceAreas')) {
            return 'section-service-areas';
          }
          if (id.includes('/sections/FAQ')) {
            return 'section-faq';
          }
          if (id.includes('/sections/CTA')) {
            return 'section-cta';
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