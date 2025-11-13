
import React from 'react';
import Header from './components/Header';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ServiceArea from './components/ServiceArea';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      <Header />
      <main>
        <Advantages />
        <Services />
        <Pricing />
        <ServiceArea />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
