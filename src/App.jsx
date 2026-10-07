import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Banner from './components/layout/Banner';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyVeritas from './components/sections/WhyVeritas';
import QuickStart from './components/sections/QuickStart';
import Process from './components/sections/Process';
import HOA from './components/sections/HOA';
import ServiceAreas from './components/sections/ServiceAreas';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import QuoteForm from './components/features/quote/QuoteForm';
import AIAssistant from './components/features/ai-assistant/AIAssistant';

function Home() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyVeritas />
        <QuickStart />
        <Process />
        <HOA />
        <ServiceAreas />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <AIAssistant />
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
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