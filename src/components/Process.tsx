import React from 'react';
import { Upload, Search, FileText, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Submit Your Artwork',
    description: 'Upload photos from multiple angles and any available documentation.',
    icon: Upload,
    timeline: 'Immediate'
  },
  {
    title: 'Expert Analysis',
    description: 'Get instant AI insights while our experts evaluate your piece.',
    icon: Search,
    timeline: 'Minutes'
  },
  {
    title: 'Detailed Report',
    description: 'Receive a comprehensive USPAP-compliant valuation report.',
    icon: FileText,
    timeline: '24 Hours'
  },
  {
    title: 'Market Value',
    description: 'Get current market value based on recent sales and trends.',
    icon: DollarSign,
    timeline: 'Included'
  }
];

export default function Process() {
  return (
    <div className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Fast Professional Service</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get your professional art appraisal in four simple steps
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-xl bg-primary/10 p-4 mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    {step.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="https://appraisily.com/start"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
            >
              Start Your Appraisal
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}