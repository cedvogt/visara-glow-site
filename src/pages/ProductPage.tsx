import Navigation from '@/components/Navigation';
import Product from '@/components/sections/Product';
import Footer from '@/components/Footer';

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Product />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;