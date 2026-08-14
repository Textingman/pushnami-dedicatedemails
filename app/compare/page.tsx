import Link from 'next/link';
import { CheckCircle, XCircle, MinusCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Check = () => <CheckCircle className="w-5 h-5 mx-auto" style={{ color: '#10B981' }} />;
const X = () => <XCircle className="w-5 h-5 mx-auto" style={{ color: '#EF4444' }} />;
const Partial = () => <MinusCircle className="w-5 h-5 mx-auto" style={{ color: '#F59E0B' }} />;

const features = [
  { category: 'Deliverability', items: [
    { name: 'Dedicated IP Pools', de: true, sg: 'partial', mg: true },
    { name: 'Automatic IP Warm-Up', de: true, sg: false, mg: false },
    { name: 'DKIM / SPF / DMARC Auto-Config', de: true, sg: true, mg: 'partial' },
    { name: 'Bounce & Complaint Handling', de: true, sg: true, mg: true },
    { name: 'Spam Trap Monitoring', de: true, sg: false, mg: false },
  ]},
  { category: 'Analytics & Reporting', items: [
    { name: 'Real-Time Delivery Dashboard', de: true, sg: true, mg: true },
    { name: 'Per-Message Event Tracking', de: true, sg: true, mg: 'partial' },
    { name: 'Engagement Heatmaps', de: true, sg: false, mg: false },
    { name: 'Custom Report Builder', de: true, sg: 'partial', mg: false },
    { name: 'Data Retention (90 days+)', de: true, sg: false, mg: false },
  ]},
  { category: 'Developer Experience', items: [
    { name: 'REST API', de: true, sg: true, mg: true },
    { name: 'Real-Time Webhooks', de: true, sg: true, mg: true },
    { name: 'SMTP Relay', de: true, sg: true, mg: true },
    { name: 'SDK Libraries (5+ languages)', de: true, sg: true, mg: 'partial' },
    { name: 'Sandbox / Test Environment', de: true, sg: true, mg: false },
  ]},
  { category: 'Compliance & Security', items: [
    { name: 'CAN-SPAM Compliance Tools', de: true, sg: true, mg: true },
    { name: 'GDPR Data Controls', de: true, sg: 'partial', mg: false },
    { name: 'SOC 2 Type II', de: true, sg: true, mg: false },
    { name: 'Unsubscribe Management', de: true, sg: true, mg: true },
    { name: 'Suppression List Sync', de: true, sg: true, mg: 'partial' },
  ]},
  { category: 'Support & Onboarding', items: [
    { name: 'Dedicated Account Manager', de: true, sg: false, mg: false },
    { name: 'Deliverability Consulting', de: true, sg: false, mg: false },
    { name: '24/7 Priority Support', de: true, sg: 'partial', mg: false },
    { name: 'Guided Onboarding', de: true, sg: false, mg: false },
    { name: 'SLA Guarantee', de: true, sg: 'partial', mg: false },
  ]},
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check />;
  if (value === false) return <X />;
  return <Partial />;
}

export default function ComparePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4" style={{ color: '#1F2937' }}>
            Dedicated Emails vs. The Competition
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            See how we stack up against SendGrid and Mailgun across deliverability, analytics, developer tools, and support.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Legend */}
          <div className="flex items-center gap-6 mb-8 justify-center flex-wrap">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
              <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} /> Included
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
              <MinusCircle className="w-4 h-4" style={{ color: '#F59E0B' }} /> Partial / Add-on
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
              <XCircle className="w-4 h-4" style={{ color: '#EF4444' }} /> Not Available
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E5E7EB' }}>
            {/* Header */}
            <div className="grid grid-cols-4 text-center" style={{ backgroundColor: '#164E63' }}>
              <div className="p-5 text-left">
                <span className="text-sm font-semibold" style={{ color: '#A5F3FC' }}>Feature</span>
              </div>
              <div className="p-5 border-l-2" style={{ borderColor: '#0891B2' }}>
                <div className="text-white font-bold text-lg">Dedicated Emails</div>
                <div className="text-xs mt-1" style={{ color: '#A5F3FC' }}>Our Platform</div>
              </div>
              <div className="p-5 border-l" style={{ borderColor: '#0E3A4A' }}>
                <div className="text-white font-bold text-lg">SendGrid</div>
                <div className="text-xs mt-1" style={{ color: '#A5F3FC' }}>Twilio</div>
              </div>
              <div className="p-5 border-l" style={{ borderColor: '#0E3A4A' }}>
                <div className="text-white font-bold text-lg">Mailgun</div>
                <div className="text-xs mt-1" style={{ color: '#A5F3FC' }}>Sinch</div>
              </div>
            </div>

            {/* Feature rows */}
            {features.map((section, si) => (
              <div key={section.category}>
                {/* Category header */}
                <div className="grid grid-cols-4 py-3 px-5" style={{ backgroundColor: '#F0FDFF' }}>
                  <div className="col-span-4 font-bold text-sm uppercase tracking-wider" style={{ color: '#0891B2' }}>
                    {section.category}
                  </div>
                </div>
                {/* Feature rows */}
                {section.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-4 text-center border-t"
                    style={{
                      borderColor: '#F3F4F6',
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                    }}
                  >
                    <div className="p-4 text-left text-sm" style={{ color: '#374151' }}>{item.name}</div>
                    <div className="p-4 border-l-2 flex items-center justify-center" style={{ borderColor: '#0891B2', backgroundColor: '#F0FDFF' }}>
                      <Cell value={item.de} />
                    </div>
                    <div className="p-4 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                      <Cell value={item.sg} />
                    </div>
                    <div className="p-4 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                      <Cell value={item.mg} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-4 text-center border-t" style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}>
              <div className="p-6" />
              <div className="p-6 border-l-2" style={{ borderColor: '#0891B2' }}>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#0891B2' }}
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-6 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                <span className="text-sm" style={{ color: '#9CA3AF' }}>sendgrid.com</span>
              </div>
              <div className="p-6 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                <span className="text-sm" style={{ color: '#9CA3AF' }}>mailgun.com</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-center mt-4" style={{ color: '#9CA3AF' }}>
            Comparison based on publicly available information as of 2026. Features may vary by plan. Contact us for a detailed evaluation.
          </p>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1F2937' }}>Why Teams Switch to Dedicated Emails</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'From SendGrid',
                pain: 'Shared IP pools hurting deliverability. No dedicated account manager. Analytics locked behind expensive tiers.',
                gain: 'Dedicated IPs from day one, a real human account manager, and full analytics included in every plan.',
              },
              {
                title: 'From Mailgun',
                pain: 'Limited compliance tooling, no GDPR controls, and support that takes days to respond.',
                gain: 'Built-in GDPR data controls, SOC 2 compliance, and 24/7 priority support with guaranteed SLAs.',
              },
              {
                title: 'From In-House SMTP',
                pain: 'Constant IP reputation management, no visibility into deliverability, and engineering time wasted on infrastructure.',
                gain: 'Fully managed infrastructure, real-time deliverability monitoring, and zero ops overhead for your team.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: '#1F2937' }}>{item.title}</h3>
                <div className="mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#EF4444' }}>The Pain</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{item.pain}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#10B981' }}>The Gain</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{item.gain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1F2937' }}>Ready to Make the Switch?</h2>
          <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
            We offer free migration support and a 30-day pilot program. No long-term contracts required.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#0891B2' }}
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
