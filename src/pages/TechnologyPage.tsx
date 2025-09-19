import Navigation from '@/components/Navigation';
import Technology from '@/components/sections/Technology';
import Footer from '@/components/Footer';

const TechnologyPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Technology />
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;