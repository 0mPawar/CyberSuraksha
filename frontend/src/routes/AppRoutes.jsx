import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Home from '../pages/Home';
import ScamLibrary from '../pages/ScamLibrary';
import ScamDetail from '../pages/ScamDetail';
import IfScammed from '../pages/IfScammed';
import StaySafe from '../pages/StaySafe';
import GovernmentHelp from '../pages/GovernmentHelp';
import Learn from '../pages/Learn';
import HowItWorks from '../pages/HowItWorks';
import Resources from '../pages/Resources';
import FAQ from '../pages/FAQ';
import About from '../pages/About';
import Disclaimer from '../pages/Disclaimer';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="scams" element={<ScamLibrary />} />
        <Route path="scams/:slug" element={<ScamDetail />} />
        <Route path="if-you-are-scammed" element={<IfScammed />} />
        <Route path="stay-safe" element={<StaySafe />} />
        <Route path="help" element={<GovernmentHelp />} />
        <Route path="learn" element={<Learn />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="resources" element={<Resources />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="about" element={<About />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

