import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Banner from './components/layout/Banner';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import BackToTop from './components/ui/BackToTop';

const Hero = lazy(() => import('./components/sections/Hero'));
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

function SectionFallback() {
  return <div className="section-skeleton h-64 md:h-96 lg:h-[500px]" aria-hidden="true" />;
}

function Home() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyVeritas />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <QuickStart />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HOA />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServiceAreas />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={<SectionFallback />}>
        <AIAssistant />
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/services" element={<div className="page-placeholder">Services Page</div>} />
        <Route path="/spider-control" element={<div className="page-placeholder">Spider Control Page</div>} />
        <Route path="/roach-cleanup" element={<div className="page-placeholder">Roach Cleanup Page</div>} />
        <Route path="/communities" element={<div className="page-placeholder">Communities Page</div>} />
        <Route path="/rodent-control" element={<div className="page-placeholder">Rodent Control Page</div>} />
        <Route path="/bed-bug-treatment" element={<div className="page-placeholder">Bed Bug Treatment Page</div>} />
        <Route path="/flea-tick-treatment" element={<div className="page-placeholder">Flea & Tick Treatment Page</div>} />
        <Route path="/mosquito-control" element={<div className="page-placeholder">Mosquito Control Page</div>} />
        <Route path="/san-carlos-park" element={<div className="page-placeholder">San Carlos Park Page</div>} />
        <Route path="/estero" element={<div className="page-placeholder">Estero Page</div>} />
        <Route path="/bonita-springs" element={<div className="page-placeholder">Bonita Springs Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;