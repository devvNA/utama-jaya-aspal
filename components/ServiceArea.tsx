
import React from 'react';

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ServiceArea: React.FC = () => {
  const areas = ["Banjarnegara", "Purbalingga", "Banyumas", "Cilacap", "Kebumen"];

  return (
    <section id="service-area" className="py-20 relative" style={{background: 'linear-gradient(135deg, #FFA10B 0%, #ff8c00 50%, #FFA10B 100%)'}}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white bg-opacity-20 text-white backdrop-blur-sm">
          Jangkauan Wilayah
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Area Layanan Kami</h2>
        <div className="w-32 h-1.5 mx-auto rounded-full bg-white mb-8"></div>
        <p className="mt-6 text-xl text-white max-w-2xl mx-auto leading-relaxed">
          Utama Jaya berkomitmen memberikan layanan pengaspalan terbaik di seluruh wilayah Barlingmascakeb.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="group flex items-center bg-white font-bold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl border-4 border-white"
              style={{color: '#FFA10B'}}
            >
              <MapPinIcon className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="text-lg">{area}</span>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative wave */}
        <div className="mt-16">
          <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 600,80 900,0 L1200,0 L1200,120 L0,120 Z" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
