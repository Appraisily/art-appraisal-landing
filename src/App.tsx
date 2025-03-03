import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import TrustCounter from './components/TrustCounter';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import ComparisonTable from './components/ComparisonTable';
import InstantAnalysis from './components/InstantAnalysis';
import SampleReport from './components/SampleReport';
import TrustFooter from './components/TrustFooter';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Process />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <TrustCounter />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <WhyChooseUs />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <InstantAnalysis />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <CaseStudies />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <ComparisonTable />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <SampleReport />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <FAQ />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Pricing />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <TrustFooter />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}