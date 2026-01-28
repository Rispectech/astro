import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickTools from '@/components/QuickTools';
import AIPrediction from '@/components/AIPrediction';
import LiveAstrologers from '@/components/LiveAstrologers';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuickTools />
        <AIPrediction />
        <LiveAstrologers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
