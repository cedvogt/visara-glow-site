import Navigation from '@/components/Navigation';
import Careers from '@/components/sections/Careers';
import Footer from '@/components/Footer';

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;