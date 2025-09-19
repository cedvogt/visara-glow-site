import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Technology from '@/components/sections/Technology';
import Product from '@/components/sections/Product';
import Compliance from '@/components/sections/Compliance';
import Resources from '@/components/sections/Resources';
import Careers from '@/components/sections/Careers';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Technology />
        <Product />
        <Compliance />
        <Resources />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
