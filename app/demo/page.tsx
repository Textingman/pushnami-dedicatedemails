'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle, Calendar, Clock, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    emailVolume: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              <Calendar className="w-4 h-4" />
              Schedule a Demo
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: '#1F2937' }}>
              See Dedicated Emails in Action
            </h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Book a personalized 30-minute demo with our team. We&apos;ll walk you through the platform and answer all your questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: What to expect */}
            <div>
              <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>What to Expect</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Clock className="w-5 h-5" style={{ color: '#0891B2' }} />,
                      title: '30-Minute Session',
                      desc: 'A focused walkthrough tailored to your use case and email volume.',
                    },
                    {
                      icon: <Users className="w-5 h-5" style={{ color: '#0891B2' }} />,
                      title: 'Meet Your Account Team',
                      desc: 'Connect with a deliverability expert who understands your industry.',
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5" style={{ color: '#0891B2' }} />,
                      title: 'Live Platform Demo',
                      desc: 'See the dashboard, analytics, API, and deliverability tools in real time.',
                    },
                    {
                      icon: <Calendar className="w-5 h-5" style={{ color: '#0891B2' }} />,
                      title: 'Custom Pricing',
                      desc: 'Get a quote based on your actual sending volume and requirements.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CFFAFE' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold" style={{ color: '#1F2937' }}>{item.title}</div>
                        <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#164E63' }}>
                <p className="italic mb-4" style={{ color: '#A5F3FC' }}>
                  &ldquo;The demo was incredibly helpful. Within 20 minutes I knew exactly how Dedicated Emails would fit into our stack. We were live within a week.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#0891B2' }}>
                    JR
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">James R.</div>
                    <div className="text-xs" style={{ color: '#A5F3FC' }}>CTO, HealthPlus</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CFFAFE' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: '#0891B2' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1F2937' }}>You&apos;re Booked!</h3>
                  <p className="mb-6" style={{ color: '#6B7280' }}>
                    We&apos;ll send a calendar invite to <strong>{form.email}</strong> within 1 business hour.
                  </p>
                  <Link href="/" className="px-6 py-3 text-white font-semibold rounded-lg" style={{ backgroundColor: '#0891B2' }}>
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Book Your Demo</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>First Name *</label>
                        <input
                          required
                          type="text"
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                          style={{ borderColor: '#D1D5DB', focusRingColor: '#0891B2' }}
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Last Name *</label>
                        <input
                          required
                          type="text"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                          style={{ borderColor: '#D1D5DB' }}
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Work Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: '#D1D5DB' }}
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Company *</label>
                      <input
                        required
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: '#D1D5DB' }}
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Your Role</label>
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: '#D1D5DB', color: form.role ? '#1F2937' : '#9CA3AF' }}
                      >
                        <option value="">Select your role</option>
                        <option>CTO / VP Engineering</option>
                        <option>VP / Director Marketing</option>
                        <option>Product Manager</option>
                        <option>Developer / Engineer</option>
                        <option>Founder / CEO</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Monthly Email Volume</label>
                      <select
                        value={form.emailVolume}
                        onChange={(e) => setForm({ ...form, emailVolume: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: '#D1D5DB', color: form.emailVolume ? '#1F2937' : '#9CA3AF' }}
                      >
                        <option value="">Select volume</option>
                        <option>Under 10,000</option>
                        <option>10,000 – 100,000</option>
                        <option>100,000 – 1M</option>
                        <option>1M – 10M</option>
                        <option>10M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Anything specific you&apos;d like to cover?</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 resize-none"
                        style={{ borderColor: '#D1D5DB' }}
                        placeholder="e.g. deliverability issues, API integration, pricing..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 text-white font-semibold rounded-lg text-lg transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#0891B2' }}
                    >
                      Book My Demo →
                    </button>
                    <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                      No spam. We&apos;ll only use your info to schedule your demo.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
