import Link from 'next/link';
import { Star, Shield, Zap, BarChart3, Mail, Users, ShoppingCart, Building2, Headphones, CheckCircle, ArrowRight } from 'lucide-react';
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
              <Star className="w-4 h-4" />
              Trusted by 500+ businesses
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Enterprise Email Delivery
              <span className="block" style={{ color: '#0891B2' }}>That Actually Works</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Dedicated Emails gives your business a dedicated sending infrastructure — higher deliverability, real-time analytics, and compliance built in from day one.
            </p>
            {/* Stats row */}
            <div className="mt-10 flex justify-center gap-12 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#0891B2' }}>99.9%</div>
                <div className="text-sm mt-1" style={{ color: '#6B7280' }}>Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#0891B2' }}>10M+</div>
                <div className="text-sm mt-1" style={{ color: '#6B7280' }}>Emails Delivered Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#0891B2' }}>&lt;2s</div>
                <div className="text-sm mt-1" style={{ color: '#6B7280' }}>Avg Delivery Time</div>
              </div>
            </div>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/demo" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
                Book a Demo
              </Link>
              <Link href="/compare" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#0891B2', borderColor: '#0891B2', backgroundColor: '#FFFFFF' }}>
                Compare Plans
              </Link>
            </div>
          </div>

          {/* Mock dashboard visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-2xl shadow-2xl overflow-hidden border" style={{ borderColor: '#0891B233' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#164E63' }}>
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 rounded px-3 py-1 text-xs" style={{ backgroundColor: '#0E3A4A', color: '#A5F3FC' }}>
                  app.dedicatedemails.com/dashboard
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6" style={{ backgroundColor: '#F8FFFE' }}>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Delivered', value: '98.7%', color: '#10B981' },
                    { label: 'Open Rate', value: '34.2%', color: '#0891B2' },
                    { label: 'Bounced', value: '0.3%', color: '#F59E0B' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                      <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs mt-1" style={{ color: '#6B7280' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Fake chart bars */}
                <div className="rounded-xl p-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                  <div className="text-sm font-semibold mb-3" style={{ color: '#1F2937' }}>Email Volume — Last 7 Days</div>
                  <div className="flex items-end gap-2 h-20">
                    {[60, 80, 55, 90, 75, 95, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 5 ? '#0891B2' : '#CFFAFE' }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                      <div key={d} className="text-xs" style={{ color: '#9CA3AF' }}>{d}</div>
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
          <p className="text-center text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: '#9CA3AF' }}>Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['E-Commerce Co.', 'FinTech Corp', 'HealthPlus', 'RetailMax', 'SaaS Labs'].map((name) => (
              <div key={name} className="text-lg font-bold" style={{ color: '#D1D5DB' }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Built for Scale. Designed for Reliability.</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Everything your team needs to send email with confidence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Dedicated IP Pools',
                desc: 'Your sending reputation stays yours. Dedicated IPs mean your deliverability isn\'t affected by other senders.',
              },
              {
                icon: <Shield className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Compliance Built In',
                desc: 'DKIM, SPF, DMARC, and CAN-SPAM compliance configured automatically. Stay out of spam folders.',
              },
              {
                icon: <BarChart3 className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Real-Time Analytics',
                desc: 'Track opens, clicks, bounces, and unsubscribes in real time. Know exactly how your emails perform.',
              },
              {
                icon: <Zap className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'REST API & Webhooks',
                desc: 'Integrate in minutes with our developer-friendly API. Receive real-time event webhooks for every email action.',
              },
              {
                icon: <Star className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Smart Deliverability',
                desc: 'AI-powered send-time optimization and automatic bounce handling keep your sender score high.',
              },
              {
                icon: <Users className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Team Management',
                desc: 'Role-based access, audit logs, and multi-workspace support for teams of any size.',
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

      {/* Use Cases Section */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Built for Every Team</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Whether you send 1,000 or 10 million emails a month, we scale with you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'E-Commerce',
                desc: 'Order confirmations, shipping updates, abandoned cart recovery, and promotional campaigns — all from one platform with dedicated sending.',
                bullets: ['Transactional + marketing in one', 'Shopify & WooCommerce integrations', 'Dynamic product recommendations'],
              },
              {
                icon: <Building2 className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'SaaS & Tech',
                desc: 'Onboarding sequences, product updates, billing notifications, and password resets delivered reliably to your users\' inboxes.',
                bullets: ['API-first architecture', 'Webhook event streams', 'User lifecycle automation'],
              },
              {
                icon: <Headphones className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Customer Support',
                desc: 'Ticket confirmations, resolution updates, and CSAT surveys sent automatically with your brand\'s look and feel.',
                bullets: ['Zendesk & Intercom integrations', 'Custom templates', 'Automated follow-ups'],
              },
              {
                icon: <BarChart3 className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Marketing Teams',
                desc: 'Newsletter campaigns, drip sequences, and event invitations with A/B testing and detailed engagement analytics.',
                bullets: ['Drag-and-drop template builder', 'A/B testing built in', 'Segmentation & personalization'],
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
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Switching to Dedicated Emails cut our bounce rate by 60% in the first month. Our transactional emails actually land in the inbox now.',
                name: 'Sarah K.',
                role: 'Head of Engineering, RetailMax',
                initials: 'SK',
              },
              {
                quote: 'The analytics dashboard is incredible. We finally have visibility into exactly what\'s happening with every email we send.',
                name: 'Marcus T.',
                role: 'VP Marketing, FinTech Corp',
                initials: 'MT',
              },
              {
                quote: 'Setup took less than an hour. The API docs are clear, the support team is responsive, and deliverability has been flawless.',
                name: 'Priya L.',
                role: 'CTO, SaaS Labs',
                initials: 'PL',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl p-8 border" style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}>
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
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Ready to See It in Action?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Book a 30-minute demo and see how Dedicated Emails can transform your email program.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/demo" className="inline-flex items-center gap-2 px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/compare" className="inline-flex items-center gap-2 px-10 py-5 text-xl font-semibold rounded-lg border-2 transition-opacity hover:opacity-90" style={{ color: '#0891B2', borderColor: '#0891B2', backgroundColor: '#FFFFFF' }}>
              Compare vs. Competitors
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
