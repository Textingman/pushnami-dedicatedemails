'use client';

import Link from 'next/link';
import { Lock, Shield, BarChart3, Mail, AlertTriangle, FileCheck, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LockedOverlay() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
      style={{ backgroundColor: 'rgba(22, 78, 99, 0.85)', backdropFilter: 'blur(4px)' }}>
      <Lock className="w-8 h-8 text-white mb-3" />
      <p className="text-white font-semibold text-sm mb-3">Feature Locked</p>
      <Link href="/demo"
        className="px-4 py-2 text-sm font-semibold rounded-lg text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#0891B2' }}>
        Book a Demo to Unlock
      </Link>
    </div>
  );
}

export default function ProductDemoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Navbar />

      {/* Header */}
      <section className="py-12" style={{ backgroundColor: '#164E63' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: '#0891B2', color: '#FFFFFF' }}>
                <Lock className="w-3 h-3" /> Preview Mode
              </div>
              <h1 className="text-3xl font-extrabold text-white">Dedicated Emails Platform</h1>
              <p className="mt-2" style={{ color: '#A5F3FC' }}>You&apos;re viewing a preview. Book a demo to unlock full access.</p>
            </div>
            <Link href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0891B2' }}>
              Book a Demo to Unlock All Features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top stats — visible */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Emails Delivered', value: '2,847,391', color: '#10B981', locked: false },
            { label: 'Delivery Rate', value: '99.1%', color: '#0891B2', locked: false },
            { label: 'Compliance Score', value: '97.5', color: '#0891B2', locked: false },
            { label: 'Active Violations', value: '0', color: '#10B981', locked: false },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl p-5 text-center shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs mt-1" style={{ color: '#6B7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Compliance Dashboard — partially visible */}
            <div className="rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" style={{ color: '#0891B2' }} />
                  <span className="font-semibold" style={{ color: '#1F2937' }}>Compliance Monitor</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>Live</span>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  {[
                    { name: 'CAN-SPAM Headers', status: 'Pass', color: '#10B981' },
                    { name: 'Unsubscribe Link Present', status: 'Pass', color: '#10B981' },
                    { name: 'DKIM Signature Valid', status: 'Pass', color: '#10B981' },
                    { name: 'Sender ID Verified', status: 'Warning', color: '#F59E0B' },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: '#F3F4F6' }}>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: row.color }} />
                        <span className="text-sm" style={{ color: '#374151' }}>{row.name}</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ color: row.color, backgroundColor: row.color + '20' }}>{row.status}</span>
                    </div>
                  ))}
                </div>
                {/* Locked rows */}
                <div className="relative">
                  <div className="space-y-3 blur-sm select-none pointer-events-none">
                    {['GDPR Consent Verified', 'Suppression List Synced', 'Carrier Content Approved', 'Domain Reputation: A+'].map((name) => (
                      <div key={name} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: '#F3F4F6' }}>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} />
                          <span className="text-sm" style={{ color: '#374151' }}>{name}</span>
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ color: '#10B981', backgroundColor: '#10B98120' }}>Pass</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(249,250,251,0.9)' }}>
                    <Lock className="w-5 h-5 mb-2" style={{ color: '#0891B2' }} />
                    <p className="text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>4 more checks locked</p>
                    <Link href="/demo" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: '#0891B2' }}>
                      Unlock with Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverability Chart — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
                <BarChart3 className="w-5 h-5" style={{ color: '#0891B2' }} />
                <span className="font-semibold" style={{ color: '#1F2937' }}>Deliverability Analytics</span>
              </div>
              <div className="p-6 blur-sm select-none pointer-events-none">
                <div className="flex items-end gap-2 h-32 mb-4">
                  {[72, 85, 68, 91, 78, 95, 88, 82, 96, 90, 94, 87].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 5 || i === 10 ? '#0891B2' : '#CFFAFE' }} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Open Rate', value: '34.2%' },
                    { label: 'Click Rate', value: '8.7%' },
                    { label: 'Bounce Rate', value: '0.3%' },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                      <div className="font-bold" style={{ color: '#0891B2' }}>{m.value}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay />
            </div>

            {/* Campaign Manager — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
                <Mail className="w-5 h-5" style={{ color: '#0891B2' }} />
                <span className="font-semibold" style={{ color: '#1F2937' }}>Campaign Manager</span>
              </div>
              <div className="p-6 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {[
                    { name: 'Welcome Series', status: 'Active', sent: '12,450', rate: '41%' },
                    { name: 'Monthly Newsletter', status: 'Active', sent: '8,200', rate: '28%' },
                    { name: 'Abandoned Cart', status: 'Paused', sent: '3,100', rate: '19%' },
                    { name: 'Re-engagement', status: 'Draft', sent: '—', rate: '—' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                      <div>
                        <div className="font-medium text-sm" style={{ color: '#1F2937' }}>{c.name}</div>
                        <div className="text-xs" style={{ color: '#6B7280' }}>{c.sent} sent</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold" style={{ color: '#0891B2' }}>{c.rate}</div>
                        <div className="text-xs" style={{ color: c.status === 'Active' ? '#10B981' : '#9CA3AF' }}>{c.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">

            {/* Violation Alerts — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
                <AlertTriangle className="w-5 h-5" style={{ color: '#0891B2' }} />
                <span className="font-semibold" style={{ color: '#1F2937' }}>Violation Alerts</span>
              </div>
              <div className="p-6 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {['Missing physical address in footer', 'Unsubscribe link not prominent', 'Subject line too long (>78 chars)'].map((alert) => (
                    <div key={alert} className="flex gap-3 p-3 rounded-lg" style={{ backgroundColor: '#FEF3C7' }}>
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                      <span className="text-xs" style={{ color: '#92400E' }}>{alert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay />
            </div>

            {/* Audit Reports — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
                <FileCheck className="w-5 h-5" style={{ color: '#0891B2' }} />
                <span className="font-semibold" style={{ color: '#1F2937' }}>Audit Reports</span>
              </div>
              <div className="p-6 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {['Q3 2026 Compliance Report', 'CAN-SPAM Audit — August', 'GDPR Data Processing Log', 'Carrier Compliance Summary'].map((r) => (
                    <div key={r} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                      <span className="text-sm" style={{ color: '#374151' }}>{r}</span>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>PDF</span>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay />
            </div>

            {/* Sender Reputation — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
              <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
                <Activity className="w-5 h-5" style={{ color: '#0891B2' }} />
                <span className="font-semibold" style={{ color: '#1F2937' }}>Sender Reputation</span>
              </div>
              <div className="p-6 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {[
                    { label: 'IP Reputation', score: 96 },
                    { label: 'Domain Score', score: 94 },
                    { label: 'Spam Rate', score: 99 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm" style={{ color: '#374151' }}>{item.label}</span>
                        <span className="text-sm font-bold" style={{ color: '#0891B2' }}>{item.score}/100</span>
                      </div>
                      <div className="h-2 rounded-full" style={{ backgroundColor: '#E5E7EB' }}>
                        <div className="h-2 rounded-full" style={{ width: `${item.score}%`, backgroundColor: '#0891B2' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay />
            </div>

            {/* CTA card */}
            <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#164E63' }}>
              <Lock className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Unlock Full Access</h3>
              <p className="text-sm mb-4" style={{ color: '#A5F3FC' }}>
                Book a 30-minute demo to see every feature live with your own data.
              </p>
              <Link href="/demo"
                className="block w-full py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0891B2' }}>
                Book a Demo →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
