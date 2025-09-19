import Navigation from '@/components/Navigation';
import Resources from '@/components/sections/Resources';
import Footer from '@/components/Footer';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;