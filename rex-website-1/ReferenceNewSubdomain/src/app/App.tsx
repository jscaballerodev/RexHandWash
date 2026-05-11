import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeforeAfter } from './components/BeforeAfter';
import { Services } from './components/Services';
import { SocialProof } from './components/SocialProof';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BeforeAfter />
      <Services />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}