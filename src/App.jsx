import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Banner from './components/layout/Banner';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import BackToTop from './components/ui/BackToTop';
import Hero from './components/sections/Hero';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Seo from './components/shared/Seo';
import NotFoundPage from './components/pages/NotFoundPage';

const Services = lazy(() => import('./components/sections/Services'));
const WhyVeritas = lazy(() => import('./components/sections/WhyVeritas'));
const QuickStart = lazy(() => import('./components/sections/QuickStart'));
const Process = lazy(() => import('./components/sections/Process'));
const HOA = lazy(() => import('./components/sections/HOA'));
const ServiceAreas = lazy(() => import('./components/sections/ServiceAreas'));
const FAQ = lazy(() => import('./components/sections/FAQ'));
const CTA = lazy(() => import('./components/sections/CTA'));
const QuoteForm = lazy(() => import('./components/features/quote/QuoteForm'));
const AIAssistant = lazy(() => import('./components/features/ai-assistant/AIAssistant'));

// Service & location pages — route paths match the live site's URL structure
// (see TODO.md / MEMORY.md for the old-path -> new-path map).
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const SpiderControlPage = lazy(() => import('./components/pages/SpiderControlPage'));
const RoachCleanupPage = lazy(() => import('./components/pages/RoachCleanupPage'));
const CommunitiesPage = lazy(() => import('./components/pages/CommunitiesPage'));
const RodentControlPage = lazy(() => import('./components/pages/RodentControlPage'));
const BedBugTreatmentPage = lazy(() => import('./components/pages/BedBugTreatmentPage'));
const FleaTickTreatmentPage = lazy(() => import('./components/pages/FleaTickTreatmentPage'));
const MosquitoControlPage = lazy(() => import('./components/pages/MosquitoControlPage'));
const SanCarlosParkPage = lazy(() => import('./components/pages/SanCarlosParkPage'));
const EsteroPage = lazy(() => import('./components/pages/EsteroPage'));
const BonitaSpringsPage = lazy(() => import('./components/pages/BonitaSpringsPage'));
const SpiderControlBonitaSpringsPage = lazy(() => import('./components/pages/SpiderControlBonitaSpringsPage'));
const SpiderControlNaplesPage = lazy(() => import('./components/pages/SpiderControlNaplesPage'));

function SectionFallback() {
  return (
    <div className="page-container">
      <div className="section-skeleton h-64 md:h-96 lg:h-[500px] w-full" aria-hidden="true" />
    </div>
  );
}

function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Professional Pest Control in Fort Myers & Southwest Florida"
        description="Veritas HomeServices LLC - Professional pest control in Fort Myers & Southwest Florida. Spider control from $35/mo, German roach clean-up, rodent control, and more. Licensed & insured."
      />
      <Banner />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <Services />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <WhyVeritas />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <QuickStart />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <Process />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <HOA />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <ServiceAreas />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <FAQ />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
            <CTA />
          </div>
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={<SectionFallback />}>
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 300px' }}>
          <AIAssistant />
        </div>
      </Suspense>
      <BackToTop />
      <ScrollProgress />
    </>
  );
}

function QuotePage() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <QuoteForm />
      </main>
      <Footer />
      <AIAssistant />
      <BackToTop />
      <ScrollProgress />
    </>
  );
}

function ServicePageWrapper({ children }) {
  return (
    <>
      <Banner />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <AIAssistant />
      <BackToTop />
      <ScrollProgress />
    </>
  );
}

function NotFoundRoute() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <NotFoundPage />
      </main>
      <Footer />
      <BackToTop />
      <ScrollProgress />
    </>
  );
}

// Old short route paths, kept as redirects to the canonical (live-site-matching) URLs
// so any existing bookmarks/links/backlinks still resolve.
const LEGACY_REDIRECTS = [
  ['/services', '/pest-control-fort-myers'],
  ['/spider-control', '/spider-control-fort-myers'],
  ['/roach-cleanup', '/german-roach-cleanup-fort-myers'],
  ['/rodent-control', '/rodent-control-fort-myers'],
  ['/bed-bug-treatment', '/bed-bug-treatment-fort-myers'],
  ['/flea-tick-treatment', '/flea-tick-treatment-fort-myers'],
  ['/mosquito-control', '/mosquito-control-fort-myers'],
  ['/san-carlos-park', '/pest-control-san-carlos-park'],
  ['/estero', '/pest-control-estero'],
  ['/bonita-springs', '/pest-control-bonita-springs'],
  ['/communities', '/hoa-property-management-pest-control'],
  ['/quote', '/request-service'],
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-service" element={<QuotePage />} />
          <Route path="/pest-control-fort-myers" element={<ServicePageWrapper><ServicesPage /></ServicePageWrapper>} />
          <Route path="/spider-control-fort-myers" element={<ServicePageWrapper><SpiderControlPage /></ServicePageWrapper>} />
          <Route path="/german-roach-cleanup-fort-myers" element={<ServicePageWrapper><RoachCleanupPage /></ServicePageWrapper>} />
          <Route path="/hoa-property-management-pest-control" element={<ServicePageWrapper><CommunitiesPage /></ServicePageWrapper>} />
          <Route path="/rodent-control-fort-myers" element={<ServicePageWrapper><RodentControlPage /></ServicePageWrapper>} />
          <Route path="/bed-bug-treatment-fort-myers" element={<ServicePageWrapper><BedBugTreatmentPage /></ServicePageWrapper>} />
          <Route path="/flea-tick-treatment-fort-myers" element={<ServicePageWrapper><FleaTickTreatmentPage /></ServicePageWrapper>} />
          <Route path="/mosquito-control-fort-myers" element={<ServicePageWrapper><MosquitoControlPage /></ServicePageWrapper>} />
          <Route path="/pest-control-san-carlos-park" element={<ServicePageWrapper><SanCarlosParkPage /></ServicePageWrapper>} />
          <Route path="/pest-control-estero" element={<ServicePageWrapper><EsteroPage /></ServicePageWrapper>} />
          <Route path="/pest-control-bonita-springs" element={<ServicePageWrapper><BonitaSpringsPage /></ServicePageWrapper>} />
          <Route path="/spider-control-bonita-springs" element={<ServicePageWrapper><SpiderControlBonitaSpringsPage /></ServicePageWrapper>} />
          <Route path="/spider-control-naples" element={<ServicePageWrapper><SpiderControlNaplesPage /></ServicePageWrapper>} />

          {LEGACY_REDIRECTS.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
