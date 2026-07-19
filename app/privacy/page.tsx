import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: July 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Introduction</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Dedicated Emails ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service and website at www.dedicatedemails.com. By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Information We Collect</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>When you sign up for or use our service, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Full name and contact information (email address, phone number)</li>
            <li>Location information (city/state)</li>
            <li>Questions and information you share with our AI agent</li>
            <li>SMS opt-in consent preferences (account notifications and/or customer care)</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. SMS Messaging</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            If you opt in to receive SMS messages from Dedicated Emails, the following terms apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>You may receive Account Notification messages and/or Customer Care messages depending on your opt-in selections.</li>
            <li>Message and data rates may apply. Message frequency varies.</li>
            <li>To opt out, reply STOP to any message. To get help, reply HELP or contact us at support@dedicatedemails.com.</li>
            <li><strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong></li>
            <li>Opting in to SMS is optional and not required to use our service.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>To provide and improve our AI-powered service</li>
            <li>To communicate with you about your account or inquiries</li>
            <li>To send SMS messages you have opted into</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. Contact Us</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Dedicated Emails<br />
            8 The Green, Ste A, Dover, DE 19901<br />
            Email: <a href="mailto:support@dedicatedemails.com" style={{ color: '#0891B2' }}>support@dedicatedemails.com</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
