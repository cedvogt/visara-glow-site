import Navigation from '@/components/Navigation';
import Compliance from '@/components/sections/Compliance';
import Footer from '@/components/Footer';

const CompliancePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Compliance />
      </main>
      <Footer />
    </div>
  );
};

export default CompliancePage;