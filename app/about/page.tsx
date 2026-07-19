import Link from 'next/link';
import { Gamepad2, Trophy, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              <Gamepad2 className="w-4 h-4" />
              Play Games — Earn Aura — Level Up
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Built for Gamers,<br />Powered by Quests
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Dedicated Emails is an online gaming platform where every game, quest, and challenge you complete earns you real aura points and rewards. We built this for players who want more than just fun — they want to level up.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Gaming should reward you. We built Dedicated Emails because players deserve a platform where their time, skill, and dedication actually earn them something — aura points, prestige, and exclusive rewards.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Every quest you complete, every challenge you conquer, and every game you play adds to your aura. The more you play, the more you glow.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Join thousands of players already earning aura on Dedicated Emails. Your next quest is waiting.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  <Gamepad2 className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Games & Quests</h3>
                  <p style={{ color: '#6B7280' }}>Play a wide variety of online games and complete quests to earn aura points with every victory.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  <Trophy className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Earn Real Rewards</h3>
                  <p style={{ color: '#6B7280' }}>Your aura points unlock real rewards and prestige. The more challenges you complete, the more you earn.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  <Zap className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Level Up Fast</h3>
                  <p style={{ color: '#6B7280' }}>Complete daily challenges and special quests to level up your aura faster than ever before.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
