'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Lock, User, Building2, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.workEmail.trim()) newErrors.workEmail = 'Work email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) newErrors.workEmail = 'Enter a valid email';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate account creation
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/product-demo');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Value props */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              14-Day Free Trial — No Credit Card Required
            </div>
            <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
              Start Your Free Trial
            </h1>
            <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
              Get full access to Dedicated Emails — email delivery, compliance monitoring, and analytics — free for 14 days.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Dedicated IP Delivery', desc: 'Your own sending IPs from day one' },
                { title: 'Compliance Monitoring', desc: 'CAN-SPAM, GDPR, and carrier checks built in' },
                { title: 'Real-Time Analytics', desc: 'Track opens, clicks, bounces, and violations' },
                { title: 'Audit-Ready Reports', desc: 'Generate compliance reports on demand' },
                { title: 'No credit card needed', desc: 'Start free, upgrade when you\'re ready' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0891B2' }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1F2937' }}>{item.title}</div>
                    <div className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: '#ECFEFF', border: '1px solid #CFFAFE' }}>
              <p className="text-sm" style={{ color: '#0891B2' }}>
                Already have an account?{' '}
                <Link href="/login" className="font-semibold underline">Sign in here</Link>
              </p>
            </div>
          </div>

          {/* Right: Sign up form */}
          <div className="rounded-2xl shadow-xl p-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Create your account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>First Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm focus:outline-none"
                      style={{ borderColor: errors.firstName ? '#EF4444' : '#D1D5DB' }}
                    />
                  </div>
                  {errors.firstName && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    className="w-full px-3 py-3 rounded-lg border text-sm focus:outline-none"
                    style={{ borderColor: errors.lastName ? '#EF4444' : '#D1D5DB' }}
                  />
                  {errors.lastName && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.lastName}</p>}
                </div>
              </div>

              {/* Work email */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Work Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm focus:outline-none"
                    style={{ borderColor: errors.workEmail ? '#EF4444' : '#D1D5DB' }}
                  />
                </div>
                {errors.workEmail && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.workEmail}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Company *</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm focus:outline-none"
                    style={{ borderColor: errors.company ? '#EF4444' : '#D1D5DB' }}
                  />
                </div>
                {errors.company && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.company}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm focus:outline-none"
                    style={{ borderColor: errors.password ? '#EF4444' : '#D1D5DB' }}
                  />
                </div>
                {errors.password && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.password}</p>}
              </div>

              {/* Confirm password */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter password"
                    className="w-full pl-9 pr-3 py-3 rounded-lg border text-sm focus:outline-none"
                    style={{ borderColor: errors.confirmPassword ? '#EF4444' : '#D1D5DB' }}
                  />
                </div>
                {errors.confirmPassword && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{errors.confirmPassword}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">
                <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#0891B2' }} />
                <label htmlFor="terms" className="text-xs" style={{ color: '#6B7280' }}>
                  I agree to the{' '}
                  <Link href="/terms" className="underline" style={{ color: '#0891B2' }}>Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="underline" style={{ color: '#0891B2' }}>Privacy Policy</Link>. *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white font-semibold rounded-lg text-base transition-opacity hover:opacity-90 mt-2"
                style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#0891B2' }}
              >
                {isSubmitting ? 'Creating your account...' : 'Start Free Trial →'}
              </button>

              <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                No credit card required. 14-day free trial.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
