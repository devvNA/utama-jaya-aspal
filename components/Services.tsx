import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const RoadIcon: React.FC = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const HomeIcon: React.FC = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const WarehouseIcon: React.FC = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 21V7L12 3 2 7v14h5v-9h10v9h5zm-11-2H9v-3h2v3zm2-3h2v3h-2v-3zm2-6h-2v-3h2v3zm-4 0H9v-3h2v3z"/>
  </svg>
);

const YardIcon: React.FC = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/>
  </svg>
);

const ParkingIcon: React.FC = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
  </svg>
);

const OfficeIcon: React.FC = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

const ServiceCard: React.FC<Service & { index: number }> = ({ title, description, icon, index }) => {
  const colors = ['#FFA10B', '#F6E244', '#ff8c00'];
  const bgColor = colors[index % 3];
  
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-3 border-b-4 overflow-hidden"
      style={{borderBottomColor: bgColor}}
    >
      {/* Decorative background circle */}
      <div 
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{backgroundColor: bgColor}}
      ></div>
      
      {/* Icon Badge */}
      <div 
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg text-white relative z-10"
        style={{background: `linear-gradient(135deg, ${bgColor} 0%, ${colors[(index + 1) % 3]} 100%)`}}
      >
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">{title}</h3>
      <p className="text-gray-600 leading-relaxed relative z-10">{description}</p>
      
      {/* Hover Arrow */}
      <div className="mt-6 flex items-center gap-2 font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 relative z-10" style={{color: bgColor}}>
        <span>Lihat Detail</span>
        <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesList: Service[] = [
    {
      id: 1,
      title: 'Pengaspalan Jalan Raya',
      description: 'Layanan pengaspalan untuk jalan raya dengan material berkualitas tinggi dan teknik pengerjaan profesional yang tahan lama.',
      icon: <RoadIcon />
    },
    {
      id: 2,
      title: 'Pengaspalan Perumahan',
      description: 'Solusi pengaspalan khusus untuk area perumahan dengan finishing halus dan rapi untuk kenyamanan warga.',
      icon: <HomeIcon />
    },
    {
      id: 3,
      title: 'Pengaspalan Gudang',
      description: 'Pengaspalan area gudang dengan daya tahan tinggi untuk menahan beban kendaraan berat dan aktivitas logistik.',
      icon: <WarehouseIcon />
    },
    {
      id: 4,
      title: 'Pengaspalan Halaman Rumah',
      description: 'Pengaspalan halaman rumah untuk carport, teras, atau area pribadi dengan desain sesuai kebutuhan Anda.',
      icon: <YardIcon />
    },
    {
      id: 5,
      title: 'Pengaspalan Lahan Parkir',
      description: 'Pengaspalan area parkir untuk komersial atau pribadi dengan marking garis parkir yang jelas dan presisi.',
      icon: <ParkingIcon />
    },
    {
      id: 6,
      title: 'Pengaspalan Kantor',
      description: 'Layanan pengaspalan untuk area kantor, akses kendaraan, dan parkir dengan tampilan profesional dan elegan.',
      icon: <OfficeIcon />
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #fef9f0 0%, #ffffff 50%, #fef9f0 100%)'}}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5" style={{backgroundColor: '#FFA10B'}}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-5" style={{backgroundColor: '#F6E244'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5" style={{backgroundColor: '#ff8c00'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{backgroundColor: '#FFF5E6', color: '#FFA10B'}}>
            Apa Yang Kami Tawarkan
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Layanan Pengaspalan Kami</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai jenis layanan pengaspalan profesional untuk memenuhi kebutuhan Anda
          </p>
          <div className="w-32 h-1.5 mx-auto mt-6 rounded-full" style={{background: 'linear-gradient(90deg, #FFA10B 0%, #F6E244 100%)'}}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-3xl shadow-2xl p-8 border-t-4" style={{borderTopColor: '#FFA10B'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Butuh Konsultasi?</h3>
            <p className="text-gray-600 mb-6 max-w-xl">
              Tim kami siap membantu Anda memilih layanan yang tepat sesuai kebutuhan proyek Anda
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20layanan%20pengaspalan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              style={{background: 'linear-gradient(135deg, #FFA10B 0%, #ff8c00 100%)'}}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hubungi Via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
