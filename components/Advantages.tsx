
import React from 'react';

const CheckIcon: React.FC = () => (
  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #FFA10B 0%, #F6E244 100%)' }}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const AdvantageCard: React.FC<{ title: string; index: number }> = ({ title, index }) => (
  <div
    className="relative flex flex-col items-center p-8 bg-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-opacity-100 group"
    style={{ borderColor: index % 2 === 0 ? '#FFA10B' : '#F6E244' }}
  >
    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: '#FFA10B' }}></div>
    <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full opacity-10 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: '#F6E244' }}></div>
    <CheckIcon />
    <h3 className="text-lg font-bold text-center text-gray-900">{title}</h3>
  </div>
);

const Advantages: React.FC = () => {
  const advantagesList = [
    "Kualitas Pengaspalan Terbaik",
    "Proses Pengerjaan Cepat",
    "Gratis Survey Lokasi",
    "Tim Profesional & Berpengalaman"
  ];

  return (
    <section id="advantages" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fef9f0 100%)' }}>
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#FFA10B' }}></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#F6E244' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#FFF5E6', color: '#FFA10B' }}>
            Mengapa Memilih Kami?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Keunggulan Layanan Kami</h2>
          <div className="w-32 h-1.5 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #FFA10B 0%, #F6E244 100%)' }}></div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            {advantagesList.map((advantage, index) => (
              <AdvantageCard key={index} title={advantage} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
