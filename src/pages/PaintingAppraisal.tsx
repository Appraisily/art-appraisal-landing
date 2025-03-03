import React, { useEffect } from 'react';
import { Camera, Sparkles, FileText, ArrowRight, Star, Shield, Clock, Award, CheckCircle, DollarSign, AlertTriangle, Lightbulb, Zap, Fingerprint, MapPin, Scan, Search, History, Database, Upload, UserCheck, FileCheck, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import HeroSplitScreen from '../components/HeroSplitScreen';
import TrustFooter from '../components/TrustFooter';
import ExpertProfile from '../components/ExpertProfile';

const faqs = [
  {
    question: "How accurate are online art appraisals?",
    answer: "Our online appraisals are highly accurate, combining AI analysis with expert evaluation from certified appraisers. We follow USPAP standards and provide comprehensive market analysis."
  },
  {
    question: "What information do I need to provide?",
    answer: "You'll need clear photos of your artwork from multiple angles, including close-ups of signatures, marks, and any condition issues. Additional documentation like provenance or purchase history is helpful but not required."
  },
  {
    question: "How long does the appraisal process take?",
    answer: "You'll get instant AI analysis within minutes. For professional appraisals, we deliver detailed reports within 24-48 hours. Rush service is available for urgent needs."
  },
  {
    question: "Are your appraisals accepted by insurance companies?",
    answer: "Yes, our appraisals are USPAP-compliant and accepted by all major insurance companies, galleries, and financial institutions."
  }
];

const reviews = [
  {
    id: 1,
    image: 'https://ik.imagekit.io/appraisily/WebPage/review1.jpg?tr=w-800,h-600,q-100',
    author: 'Sarah M.',
    rating: 5,
    text: 'The AI analysis was spot on! The professional appraisal confirmed the initial value range. Incredibly helpful service.',
    initialValue: '$800-1,200',
    finalValue: '$1,500',
    itemType: 'Modern Abstract Painting'
  },
  {
    id: 2,
    image: 'https://ik.imagekit.io/appraisily/WebPage/review2.jpg?tr=w-800,h-600,q-100',
    author: 'James R.',
    rating: 5,
    text: 'Found out my family heirloom was worth significantly more than expected. The detailed analysis helped me get proper insurance coverage.',
    initialValue: '$2,000-3,000',
    finalValue: '$5,500',
    itemType: 'Antique Oil Painting'
  },
  {
    id: 3,
    image: 'https://ik.imagekit.io/appraisily/WebPage/review3.jpg?tr=w-800,h-600,q-100',
    author: 'Emily K.',
    rating: 5,
    text: 'Quick and professional service. The AI prescreener gave me confidence to proceed with a full appraisal. Excellent experience!',
    initialValue: '$1,500-2,500',
    finalValue: '$3,200',
    itemType: 'Contemporary Artwork'
  }
];

const analysisTools = [
  {
    icon: Fingerprint,
    image: 'https://ik.imagekit.io/appraisily/WebPage/maker.png',
    title: 'Maker Analysis',
    description: 'Advanced AI-powered tool that helps identify potential creators, artists, or manufacturers of your piece by analyzing signatures, styles, and distinctive characteristics.'
  },
  {
    icon: Scan,
    image: 'https://ik.imagekit.io/appraisily/WebPage/signature.png',
    title: 'Signature Check',
    description: 'Specialized analysis of signatures, marks, and monograms to verify authenticity and attribute works to specific artists or makers.'
  },
  {
    icon: MapPin,
    image: 'https://ik.imagekit.io/appraisily/WebPage/origin.png',
    title: 'Origin Analysis',
    description: 'Determines the likely geographical origin and period of your item by examining stylistic elements, materials, and construction techniques.'
  },
  {
    icon: Search,
    image: 'https://ik.imagekit.io/appraisily/WebPage/marks.png',
    title: 'Marks Recognition',
    description: 'Identifies and interprets maker\'s marks, hallmarks, stamps, and other identifying symbols commonly found on antiques and artworks.'
  },
  {
    icon: History,
    image: 'https://ik.imagekit.io/appraisily/WebPage/age.png',
    title: 'Age Analysis',
    description: 'Estimates the creation period of your item by analyzing materials, techniques, style, and other period-specific characteristics.'
  },
  {
    icon: Database,
    image: 'https://ik.imagekit.io/appraisily/WebPage/visual.png',
    title: 'Visual Search',
    description: 'Compares your item with our extensive database of auction results and museum collections to find similar pieces and establish market value ranges.'
  }
];

const features = [
  {
    icon: Camera,
    title: 'Photo Documentation',
    description: 'Upload high-quality photos of your painting, including close-ups of signatures, frame, and any condition issues'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Analysis',
    description: 'Our AI instantly analyzes your painting\'s style, artist signatures, and matches with similar artworks'
  },
  {
    icon: FileText,
    title: 'Expert Painting Analysis',
    description: 'Professional art appraisers evaluate technique, authenticity, provenance, and current market value'
  },
  {
    icon: Clock,
    title: 'Quick Results',
    description: 'Get AI painting analysis in minutes, professional valuation in 24-48h'
  }
];

const processSteps = [
  {
    icon: Upload,
    title: 'Submit Your Artwork Details',
    description: 'Upload high-quality photos of your artwork from multiple angles. Include any documentation about provenance, history, or previous appraisals.',
    timeline: 'Takes 5 minutes'
  },
  {
    icon: UserCheck,
    title: 'Connect with an Expert',
    description: 'Our system matches your artwork with the most qualified appraiser based on style, period, and medium. Get instant AI analysis while you wait.',
    timeline: 'Immediate match'
  },
  {
    icon: FileCheck,
    title: 'Receive Your Certified Valuation',
    description: 'Within 24-48 hours, receive a comprehensive USPAP-compliant appraisal report with detailed analysis and current market value.',
    timeline: '24-48 hours'
  },
  {
    icon: MessageCircle,
    title: 'Follow-Up Support',
    description: 'Our experts are available to answer any questions about your appraisal and provide guidance on insurance, sales, or authentication.',
    timeline: 'Unlimited support'
  }
];

const trustIndicators = [
  {
    icon: Star,
    text: 'Expert Analysis',
    subtext: 'Certified Appraisers'
  },
  {
    icon: Shield,
    text: 'USPAP Compliant',
    subtext: 'Industry Standard'
  },
  {
    icon: Award,
    text: 'Market Data',
    subtext: 'Current Values'
  },
  {
    icon: Clock,
    text: '24-48h Turnaround',
    subtext: 'Fast Service'
  }
];

export default function PaintingAppraisal() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  useEffect(() => {
    // Push page view to GTM
    window.dataLayer?.push({
      event: 'pageview',
      page: {
        title: 'Instant Painting Value Check',
        path: '/painting-value'
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSplitScreen />

      {/* The Problem Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unsure of Your Artwork's True Value?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Without professional appraisal, you could be undervaluing your treasured pieces or missing crucial insurance coverage
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Insurance Risk</h3>
                <p className="mt-2 text-gray-600">
                  Is your artwork properly insured? Without accurate valuation, you risk being underinsured and unprotected
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span>Insurance claims require professional appraisals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span>Market values change over time</span>
                  </li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200">
                <Clock className="h-8 w-8 text-yellow-500" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Market Uncertainty</h3>
                <p className="mt-2 text-gray-600">
                  Art markets fluctuate constantly. Without current valuation, you might miss opportunities or make costly decisions
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span>Market trends affect value significantly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span>Outdated valuations can be misleading</span>
                  </li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200">
                <DollarSign className="h-8 w-8 text-yellow-500" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Financial Impact</h3>
                <p className="mt-2 text-gray-600">
                  Incorrect valuations can lead to financial losses through undervalued sales or excessive insurance premiums
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span>Avoid undervalued sales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-500" />
                    <span>Optimize insurance coverage</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href="https://screener.appraisily.com/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
              >
                Get Your Free Value Check
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Tools Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Analysis Tools
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experts use advanced technology and specialized techniques to evaluate your artwork
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {analysisTools.map((tool) => (
              <div
                key={tool.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how our professional appraisals have helped clients discover their artwork's true value
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative">
                  <img
                    src={review.image}
                    alt={`Appraised ${review.itemType}`}
                    className="aspect-4/3 w-full object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-white/80">Initial: {review.initialValue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Final: {review.finalValue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 line-clamp-3">{review.text}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.itemType}</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <CheckCircle className="h-4 w-4" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get answers to common questions about our appraisal service
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ExpertProfile />
      <TrustFooter />

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gray-900 px-8 py-16 text-center shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Discover Your Artwork's Value?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start with our free AI analysis, then get a professional appraisal from our certified experts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://screener.appraisily.com/"
                className="rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 flex items-center gap-2"
              >
                Try Free AI Analysis
                <Sparkles className="h-5 w-5" />
              </a>
              <a
                href="https://appraisily.com/start"
                className="text-lg font-semibold leading-6 text-white flex items-center gap-2 hover:text-primary transition-colors"
              >
                Get Professional Appraisal
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}