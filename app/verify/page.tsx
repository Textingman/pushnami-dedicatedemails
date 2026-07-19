'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { CheckCircle } from 'lucide-react';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const phoneParam = searchParams.get('phone');
    if (phoneParam) setPhone(phoneParam);
  }, [searchParams]);

  const handleConfirm = () => {
    setIsRedirecting(true);

    const rawQuery = window.location.search.slice(1);
    const destPrefix = 'destination=';
    const destIndex = rawQuery.indexOf(destPrefix);

    if (destIndex === -1) {
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
      return;
    }

    const afterDest = rawQuery.slice(destIndex + destPrefix.length);

    let destEnd = afterDest.length;
    let searchStart = 0;
    while (searchStart < afterDest.length) {
      const ampIdx = afterDest.indexOf('&', searchStart);
      if (ampIdx === -1) break;
      const rest = afterDest.slice(ampIdx + 1);
      if (!/^https?:\/\//.test(rest) && !/^\//.test(rest)) {
        destEnd = ampIdx;
        break;
      }
      searchStart = ampIdx + 1;
    }

    const destination = afterDest.slice(0, destEnd);
    const forwardedRaw = afterDest.slice(destEnd).replace(/^&/, '');

    const forwarded = new URLSearchParams();
    if (forwardedRaw) {
      new URLSearchParams(forwardedRaw).forEach((value, key) => {
        forwarded.append(key, value);
      });
    }

    const qIdx = destination.indexOf('?');
    const destBase = qIdx === -1 ? destination : destination.slice(0, qIdx);
    const destExisting = qIdx === -1 ? '' : destination.slice(qIdx + 1);

    const existingParts = destExisting ? destExisting.split('&') : [];
    const forwardedParts: string[] = [];
    forwarded.forEach((value, key) => {
      forwardedParts.push(`${key}=${value}`);
    });
    const allParts = [...existingParts, ...forwardedParts].filter(Boolean);
    const finalUrl = allParts.length ? `${destBase}?${allParts.join('&')}` : destBase;

    window.location.href = finalUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-center mb-6">
          <span className="text-2xl font-bold" style={{ color: '#0891B2' }}>Dedicated Emails</span>
        </div>
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8" style={{ color: '#0891B2' }} strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Verify Your Number</h2>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="w-full rounded-xl p-4 text-lg text-gray-400 border border-gray-200 focus:outline-none transition-colors mb-4 bg-white"
          style={{ borderColor: '#E5E7EB' }}
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          onClick={handleConfirm}
          disabled={isRedirecting}
          className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${isRedirecting ? 'bg-gray-400 cursor-not-allowed text-white' : 'text-white'}`}
          style={{ backgroundColor: isRedirecting ? undefined : '#0891B2' }}
        >
          {isRedirecting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading...
            </span>
          ) : 'Submit'}
        </button>
        <p className="text-xs text-gray-400 text-center mt-6">Secured by Dedicated Emails</p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2" style={{ borderColor: '#0891B2' }} />
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
