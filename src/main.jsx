import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import App from './App.jsx'
import './critical.css'
import { initScrollRestoration, initTrustedTypes, initNetlifyHudRemoval } from './utils/csp-init'

initScrollRestoration()
initTrustedTypes()
initNetlifyHudRemoval()

function AppFallback() {
  return <div id="root" style={{ minHeight: '100vh' }} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <Suspense fallback={<AppFallback />}>
          <App />
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
