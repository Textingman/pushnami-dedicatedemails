'use client';

import Link from 'next/link';
import { Lock, Send, BarChart3, Mail, AlertTriangle, FileCheck, Activity, CheckCircle, ArrowRight, Inbox, Settings, Users, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LockedOverlay({ featureName }: { featureName: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
      style={{ backgroundColor: 'rgba(22, 78, 99, 0.88)', backdropFilter: 'blur(3px)' }}>
      <Lock className="w-6 h-6 text-white mb-2" />
      <p className="text-white font-bold text-sm mb-1">{featureName}</p>
      <p className="text-xs mb-3" style={{ color: '#A5F3FC' }}>Unlock with a demo</p>
      <Link href="/demo"
        className="px-4 py-2 text-sm font-semibold rounded-lg text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#0891B2' }}>
        Book a Demo →
      </Link>
    </div>
  );
}

export default function ProductDemoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0F4F8' }}>
      <Navbar />

      {/* App Header Bar */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" style={{ color: '#38BDF8' }} />
              <span className="text-white font-bold text-sm">Dedicated Emails</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['Dashboard', 'Campaigns', 'Templates', 'Contacts', 'Analytics', 'Settings'].map((tab, i) => (
                <span key={tab} className="px-3 py-1.5 rounded text-xs font-medium cursor-default"
                  style={{ backgroundColor: i === 0 ? '#0891B2' : 'transparent', color: i === 0 ? '#FFFFFF' : '#94A3B8' }}>
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#1E3A5F', color: '#38BDF8' }}>
              <Lock className="w-3 h-3" /> Preview Mode
            </div>
            <Link href="/demo" className="px-4 py-1.5 text-xs font-semibold rounded-lg text-white" style={{ backgroundColor: '#0891B2' }}>
              Unlock Full Access
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Top KPI stats — visible */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Emails Sent Today', value: '48,291', sub: '+12% vs yesterday', color: '#0891B2' },
            { label: 'Delivery Rate', value: '99.2%', sub: 'Last 30 days', color: '#10B981' },
            { label: 'Avg Open Rate', value: '34.7%', sub: 'Industry avg: 21%', color: '#0891B2' },
            { label: 'Bounce Rate', value: '0.28%', sub: 'Well below threshold', color: '#10B981' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: '#1F2937' }}>{stat.label}</div>
              <div className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">

          {/* Left column — 2/3 width */}
          <div className="lg:col-span-2 space-y-5">

            {/* Send Email Panel — partially visible */}
            <div className="rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" style={{ color: '#0891B2' }} />
                  <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Compose & Send</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>Ready</span>
              </div>
              <div className="p-5">
                <div className="space-y-3 mb-4">
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>From</div>
                    <div className="text-sm font-medium" style={{ color: '#1F2937' }}>noreply@yourdomain.com <span className="text-xs font-normal" style={{ color: '#10B981' }}>✓ Verified</span></div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>To</div>
                    <div className="text-sm" style={{ color: '#1F2937' }}>All Subscribers (12,450 contacts)</div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Subject</div>
                    <div className="text-sm" style={{ color: '#1F2937' }}>Your August account summary is ready</div>
                  </div>
                </div>
                {/* Locked: template editor */}
                <div className="relative">
                  <div className="blur-sm select-none pointer-events-none rounded-lg p-4" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', minHeight: '120px' }}>
                    <div className="h-3 rounded mb-2" style={{ backgroundColor: '#E2E8F0', width: '80%' }} />
                    <div className="h-3 rounded mb-2" style={{ backgroundColor: '#E2E8F0', width: '60%' }} />
                    <div className="h-3 rounded mb-4" style={{ backgroundColor: '#E2E8F0', width: '70%' }} />
                    <div className="flex gap-2">
                      <div className="h-8 w-24 rounded" style={{ backgroundColor: '#0891B2' }} />
                      <div className="h-8 w-20 rounded" style={{ backgroundColor: '#E2E8F0' }} />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(248,250,252,0.92)' }}>
                    <Lock className="w-5 h-5 mb-1.5" style={{ color: '#0891B2' }} />
                    <p className="text-sm font-bold mb-0.5" style={{ color: '#1F2937' }}>Drag-and-Drop Email Builder</p>
                    <p className="text-xs mb-2" style={{ color: '#6B7280' }}>Design beautiful emails with our visual editor</p>
                    <Link href="/demo" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: '#0891B2' }}>
                      Unlock with Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Performance — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <BarChart3 className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Campaign Performance Analytics</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="flex items-end gap-1.5 h-28 mb-3">
                  {[55, 72, 48, 88, 65, 92, 78, 84, 91, 76, 95, 82].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 5 || i === 10 ? '#0891B2' : '#BFDBFE' }} />
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Sent', value: '48,291' },
                    { label: 'Opened', value: '16,757' },
                    { label: 'Clicked', value: '4,206' },
                    { label: 'Unsubscribed', value: '34' },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <div className="font-bold text-sm" style={{ color: '#0891B2' }}>{m.value}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Campaign Performance Analytics" />
            </div>

            {/* Active Campaigns — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" style={{ color: '#0891B2' }} />
                  <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Active Campaigns</span>
                </div>
                <span className="text-xs" style={{ color: '#6B7280' }}>4 running</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {[
                    { name: 'Welcome Onboarding Series', type: 'Transactional', sent: '3,241', open: '67%', status: 'Active' },
                    { name: 'Monthly Newsletter — August', type: 'Marketing', sent: '12,450', open: '31%', status: 'Active' },
                    { name: 'Order Confirmation Flow', type: 'Transactional', sent: '8,102', open: '89%', status: 'Active' },
                    { name: 'Re-engagement Campaign', type: 'Marketing', sent: '2,890', open: '18%', status: 'Paused' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div>
                        <div className="font-medium text-sm" style={{ color: '#1F2937' }}>{c.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{c.type} · {c.sent} sent</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold" style={{ color: '#0891B2' }}>{c.open}</div>
                        <div className="text-xs" style={{ color: c.status === 'Active' ? '#10B981' : '#F59E0B' }}>{c.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Campaign Manager" />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">

            {/* Deliverability Health — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <Activity className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Deliverability Health</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {[
                    { label: 'IP Reputation Score', score: 97 },
                    { label: 'Domain Authority', score: 94 },
                    { label: 'Inbox Placement Rate', score: 99 },
                    { label: 'Spam Complaint Rate', score: 100 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs" style={{ color: '#374151' }}>{item.label}</span>
                        <span className="text-xs font-bold" style={{ color: '#0891B2' }}>{item.score}/100</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ backgroundColor: '#E2E8F0' }}>
                        <div className="h-1.5 rounded-full" style={{ width: `${item.score}%`, backgroundColor: item.score >= 95 ? '#10B981' : '#0891B2' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Deliverability Health Monitor" />
            </div>

            {/* Compliance Alerts — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <AlertTriangle className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Compliance Alerts</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-2">
                  {[
                    { msg: 'CAN-SPAM footer missing in draft', level: 'warning' },
                    { msg: 'Unsubscribe link not prominent', level: 'warning' },
                    { msg: 'DKIM signature verified', level: 'ok' },
                    { msg: 'SPF record valid', level: 'ok' },
                  ].map((a) => (
                    <div key={a.msg} className="flex gap-2 p-2.5 rounded-lg" style={{ backgroundColor: a.level === 'warning' ? '#FEF3C7' : '#F0FDF4' }}>
                      <span className="text-xs" style={{ color: a.level === 'warning' ? '#92400E' : '#166534' }}>{a.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Compliance Alert Center" />
            </div>

            {/* Audit Reports — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <FileCheck className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Audit Reports</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-2">
                  {['Q3 2026 Compliance Report', 'CAN-SPAM Audit — August', 'GDPR Data Processing Log', 'Carrier Compliance Summary'].map((r) => (
                    <div key={r} className="flex items-center justify-between p-2.5 rounded-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <span className="text-xs" style={{ color: '#374151' }}>{r}</span>
                      <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>PDF</span>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Compliance Audit Reports" />
            </div>

            {/* Contact Management — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <Users className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Contact Management</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-2">
                  {[
                    { list: 'All Subscribers', count: '12,450', status: 'Active' },
                    { list: 'Engaged (90d)', count: '8,201', status: 'Active' },
                    { list: 'Unsubscribed', count: '342', status: 'Suppressed' },
                    { list: 'Bounced', count: '89', status: 'Suppressed' },
                  ].map((l) => (
                    <div key={l.list} className="flex items-center justify-between p-2.5 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <span className="text-xs font-medium" style={{ color: '#374151' }}>{l.list}</span>
                      <div className="text-right">
                        <div className="text-xs font-bold" style={{ color: '#0891B2' }}>{l.count}</div>
                        <div className="text-xs" style={{ color: l.status === 'Active' ? '#10B981' : '#9CA3AF' }}>{l.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Contact & List Management" />
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-5 text-center" style={{ backgroundColor: '#0F172A' }}>
              <Lock className="w-7 h-7 text-white mx-auto mb-2" />
              <h3 className="text-base font-bold text-white mb-1">Unlock Full Platform</h3>
              <p className="text-xs mb-3" style={{ color: '#94A3B8' }}>
                Book a 30-min demo to see every feature live with your own sending data.
              </p>
              <Link href="/demo"
                className="block w-full py-2.5 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90"
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
