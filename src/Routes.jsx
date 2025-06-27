import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
const NotFound = lazy(() => import("pages/NotFound"));
const HomepagePremiumFreelancePlatform = lazy(() => import("pages/homepage-premium-freelance-platform"));
const AboutMethodologyTrustBuilding = lazy(() => import("pages/about-methodology-trust-building"));
const PortfolioLaboratoryResultsShowcase = lazy(() => import("pages/portfolio-laboratory-results-showcase"));
const ServicesUniverseInteractiveExploration = lazy(() => import("pages/services-universe-interactive-exploration"));
const KnowledgeCenterThoughtLeadership = lazy(() => import("pages/knowledge-center-thought-leadership"));

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>}>
          <RouterRoutes>
            <Route path="/" element={<HomepagePremiumFreelancePlatform />} />
            <Route path="/homepage-premium-freelance-platform" element={<HomepagePremiumFreelancePlatform />} />
            <Route path="/portfolio-laboratory-results-showcase" element={<PortfolioLaboratoryResultsShowcase />} />
            <Route path="/services-universe-interactive-exploration" element={<ServicesUniverseInteractiveExploration />} />
            <Route path="/knowledge-center-thought-leadership" element={<KnowledgeCenterThoughtLeadership />} />
            <Route path="/about-methodology-trust-building" element={<AboutMethodologyTrustBuilding />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;