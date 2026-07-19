import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: July 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Acceptance of Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            By accessing or using Dedicated Emails's service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Dedicated Emails provides an AI-powered information and education service accessible through www.dedicatedemails.com. The Service is intended for informational purposes only and does not constitute professional advice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. SMS Communications</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            By opting in to SMS communications, you agree to receive text messages from Dedicated Emails. Standard message and data rates may apply. You may opt out at any time by replying STOP. For help, reply HELP or contact support@dedicatedemails.com.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Limitation of Liability</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Dedicated Emails shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. Contact</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            For questions about these Terms, contact us at support@dedicatedemails.com or 8 The Green, Ste A, Dover, DE 19901.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
