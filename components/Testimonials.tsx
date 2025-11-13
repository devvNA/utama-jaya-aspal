
import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Waktunya sangat flexible, pelayanannya ramah. Sangat puas dengan layanan mereka!",
    name: "Bambang",
  },
  {
    quote: "Jujur dan profesional. Hasil pengaspalan jalan di rumah saya sangat memuaskan.",
    name: "Septiana",
  },
];

const TestimonialCard: React.FC<Testimonial & { index: number }> = ({ quote, name, index }) => (
  <div
    className="relative bg-white p-10 rounded-2xl shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl border-t-4 group"
    style={{ borderTopColor: index % 2 === 0 ? '#FFA10B' : '#F6E244' }}
  >
    <div className="absolute -top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'linear-gradient(135deg, #FFA10B 0%, #F6E244 100%)' }}>
      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.33 6.98C6.9 9.1 5.8 11.63 5.8 14.5c0 1.45.33 2.76.98 3.93.65 1.17 1.48 2.1 2.5 2.78V24H.98V14.5C.98 9.8.98 6.57.98 4.83H9.33v2.15zM26.33 6.98c-2.43 2.12-3.53 4.65-3.53 7.52 0 1.45.33 2.76.98 3.93.65 1.17 1.48 2.1 2.5 2.78V24H18V14.5C18 9.8 18 6.57 18 4.83h8.35v2.15z" />
      </svg>
    </div>
    <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: '#FFA10B' }}></div>
    <blockquote className="relative pt-6">
      <p className="text-xl text-gray-700 italic leading-relaxed">"{quote}"</p>
    </blockquote>
    <footer className="mt-6 flex items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#FFF5E6', color: '#FFA10B' }}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-lg font-bold" style={{ color: '#FFA10B' }}>{name}</p>
        <p className="text-sm text-gray-500">Klien Puas</p>
      </div>
    </footer>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #FFA10B 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #F6E244 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#FFF5E6', color: '#FFA10B' }}>
            Testimoni
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Apa Kata Klien Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kepuasan pelanggan adalah prioritas utama kami</p>
          <div className="w-32 h-1.5 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #FFA10B 0%, #F6E244 100%)' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
