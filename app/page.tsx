import Link from 'next/link';
import { Star, Shield, Zap, BarChart3, Mail, Users, ShoppingCart, Building2, Headphones, CheckCircle, ArrowRight, AlertTriangle, FileCheck, Activity } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ECFEFF' }}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20" style={{ backgroundColor: '#0891B2' }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#0891B2' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              <Shield className="w-4 h-4" />
              Email Delivery & Compliance Monitoring
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Deliver More. Comply Better.
              <span className="block" style={{ color: '#0891B2' }}>Monitor Everything.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Dedicated Emails is the platform for businesses that need reliable email delivery with built-in compliance monitoring — CAN-SPAM, GDPR, and carrier regulations, all in one place.
            </p>
            {/* Stats row */}
            <div className="mt-10 flex justify-center gap-12 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#0891B2' }}>99.9%</div>
                <div className="text-sm mt-1" style={{ color: '#6B7280' }}>Delivery Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#0891B2' }}>100%</div>
                <div className="text-sm mt-1" style={{ color: '#6B7280' }}>Compliance Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#0891B2' }}>Real-Time</div>
                <div className="text-sm mt-1" style={{ color: '#6B7280' }}>Violation Alerts</div>
              </div>
            </div>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
                Start Free Trial
              </Link>
              <Link href="/demo" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#0891B2', borderColor: '#0891B2', backgroundColor: '#FFFFFF' }}>
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Mock compliance dashboard visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-2xl shadow-2xl overflow-hidden border" style={{ borderColor: '#0891B233' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#164E63' }}>
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 rounded px-3 py-1 text-xs" style={{ backgroundColor: '#0E3A4A', color: '#A5F3FC' }}>
                  app.dedicatedemails.com/compliance
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6" style={{ backgroundColor: '#F8FFFE' }}>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Delivered', value: '99.1%', color: '#10B981' },
                    { label: 'Compliant', value: '100%', color: '#0891B2' },
                    { label: 'Violations', value: '0', color: '#10B981' },
                    { label: 'Alerts', value: '2', color: '#F59E0B' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                      <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs mt-1" style={{ color: '#6B7280' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Compliance status rows */}
                <div className="rounded-xl p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                  <div className="text-sm font-semibold mb-3" style={{ color: '#1F2937' }}>Compliance Status — Active Campaigns</div>
                  <div className="space-y-2">
                    {[
                      { name: 'CAN-SPAM Headers', status: 'Pass', color: '#10B981' },
                      { name: 'Unsubscribe Link Present', status: 'Pass', color: '#10B981' },
                      { name: 'DKIM Signature', status: 'Pass', color: '#10B981' },
                      { name: 'Sender ID Verified', status: 'Warning', color: '#F59E0B' },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between py-1 border-b last:border-0" style={{ borderColor: '#F3F4F6' }}>
                        <span className="text-sm" style={{ color: '#374151' }}>{row.name}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ color: row.color, backgroundColor: row.color + '20' }}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Logos */}
      <section className="py-12 border-y" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: '#9CA3AF' }}>Trusted by compliance-conscious teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['E-Commerce Co.', 'FinTech Corp', 'HealthPlus', 'RetailMax', 'SaaS Labs'].map((name) => (
              <div key={name} className="text-lg font-bold" style={{ color: '#D1D5DB' }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Delivery + Compliance in One Platform</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Stop juggling separate tools. Dedicated Emails handles both.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Dedicated IP Delivery',
                desc: 'Your own dedicated sending IPs mean your reputation is never affected by other senders. Higher inbox placement, guaranteed.',
              },
              {
                icon: <Shield className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Compliance Monitoring',
                desc: 'Real-time checks against CAN-SPAM, GDPR, CASL, and carrier regulations. Get alerted before a violation becomes a fine.',
              },
              {
                icon: <AlertTriangle className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Violation Alerts',
                desc: 'Instant notifications when a campaign or message fails a compliance check — with remediation steps built right in.',
              },
              {
                icon: <BarChart3 className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Deliverability Analytics',
                desc: 'Track opens, clicks, bounces, and spam complaints in real time. Know exactly where your emails land and why.',
              },
              {
                icon: <FileCheck className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Audit-Ready Reports',
                desc: 'Generate compliance audit reports on demand. Prove your program is clean to regulators, carriers, or your legal team.',
              },
              {
                icon: <Activity className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Sender Reputation Tracking',
                desc: 'Monitor your IP and domain reputation scores daily. Catch deliverability issues before they impact your campaigns.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0891B233' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>{f.title}</h3>
                <p className="text-center" style={{ color: '#6B7280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Coverage Section */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Full Regulatory Coverage</h2>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                Email compliance isn&apos;t optional. Dedicated Emails monitors your sending program against every major regulation — automatically.
              </p>
              <div className="space-y-4">
                {[
                  { reg: 'CAN-SPAM Act', desc: 'Header validation, unsubscribe links, physical address checks' },
                  { reg: 'GDPR / CASL', desc: 'Consent tracking, data subject rights, opt-in verification' },
                  { reg: 'DKIM / SPF / DMARC', desc: 'Authentication records validated on every send' },
                  { reg: 'Carrier Compliance', desc: 'Content screening against carrier filtering rules' },
                  { reg: 'Suppression Lists', desc: 'Automatic sync with global suppression and opt-out lists' },
                ].map((item) => (
                  <div key={item.reg} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0891B2' }} />
                    <div>
                      <div className="font-semibold" style={{ color: '#1F2937' }}>{item.reg}</div>
                      <div className="text-sm mt-0.5" style={{ color: '#6B7280' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#164E63' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Compliance Score</h3>
              <div className="space-y-4">
                {[
                  { label: 'Authentication', score: 100 },
                  { label: 'Content Compliance', score: 98 },
                  { label: 'List Hygiene', score: 95 },
                  { label: 'Sender Reputation', score: 97 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm" style={{ color: '#A5F3FC' }}>{item.label}</span>
                      <span className="text-sm font-bold text-white">{item.score}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#0E3A4A' }}>
                      <div className="h-2 rounded-full" style={{ width: `${item.score}%`, backgroundColor: '#0891B2' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: '#0E3A4A' }}>
                <div className="text-4xl font-extrabold text-white text-center">97.5</div>
                <div className="text-center text-sm mt-1" style={{ color: '#A5F3FC' }}>Overall Compliance Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Built for Every Team</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Whether you send 1,000 or 10 million emails a month, compliance matters at every scale.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'E-Commerce',
                desc: 'Order confirmations, shipping updates, and promotional campaigns — all delivered compliantly with automatic unsubscribe management.',
                bullets: ['CAN-SPAM compliant transactional email', 'Suppression list auto-sync', 'Carrier-approved content screening'],
              },
              {
                icon: <Building2 className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'SaaS & Tech',
                desc: 'Onboarding sequences, billing notifications, and product updates delivered reliably with GDPR consent tracking built in.',
                bullets: ['GDPR consent management', 'API-first with webhook events', 'Audit logs for every send'],
              },
              {
                icon: <Headphones className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Financial Services',
                desc: 'Regulatory-grade email delivery for account alerts, statements, and compliance notices with full audit trail.',
                bullets: ['SOC 2 Type II certified', 'Immutable audit trail', 'Data residency controls'],
              },
              {
                icon: <BarChart3 className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Marketing Teams',
                desc: 'Run campaigns confidently knowing every send is screened for compliance before it goes out — not after.',
                bullets: ['Pre-send compliance checks', 'A/B testing with compliance guardrails', 'Real-time violation alerts'],
              },
            ].map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0891B233' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CFFAFE' }}>
                    {uc.icon}
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1F2937' }}>{uc.title}</h3>
                </div>
                <p className="mb-4" style={{ color: '#6B7280' }}>{uc.desc}</p>
                <ul className="space-y-2">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0891B2' }} />
                      <span className="text-sm" style={{ color: '#374151' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Dedicated Emails caught a CAN-SPAM violation in our campaign before it went out. That one alert saved us from a potential $50K fine.',
                name: 'Sarah K.',
                role: 'Head of Engineering, RetailMax',
                initials: 'SK',
              },
              {
                quote: 'The compliance dashboard gives our legal team exactly what they need for quarterly audits. We went from 2 days of prep to 20 minutes.',
                name: 'Marcus T.',
                role: 'VP Marketing, FinTech Corp',
                initials: 'MT',
              },
              {
                quote: 'We needed GDPR-compliant email delivery with a full audit trail. Dedicated Emails was the only platform that had everything out of the box.',
                name: 'Priya L.',
                role: 'CTO, SaaS Labs',
                initials: 'PL',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl p-8 border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4" style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                  ))}
                </div>
                <p className="mb-6 italic" style={{ color: '#374151' }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#0891B2' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1F2937' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Start Delivering Compliantly Today</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Join 500+ businesses that trust Dedicated Emails for delivery and compliance monitoring.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/signup" className="inline-flex items-center gap-2 px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/demo" className="inline-flex items-center gap-2 px-10 py-5 text-xl font-semibold rounded-lg border-2 transition-opacity hover:opacity-90" style={{ color: '#0891B2', borderColor: '#0891B2', backgroundColor: '#FFFFFF' }}>
              Book a Demo
            </Link>
          </div>
          <p className="mt-4 text-sm" style={{ color: '#9CA3AF' }}>No credit card required. 14-day free trial.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
