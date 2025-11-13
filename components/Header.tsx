
import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.jpg"
          alt="Utama Jaya - Proses pengaspalan jalan profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          <span style={{ color: '#FFA10B' }}>Utama Jaya</span> Jasa Pengaspalan Jalan Profesional
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-100">
          Melayani area Barlingmascakeb: Banjarnegara, Purbalingga, Banyumas, Cilacap, dan Kebumen
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
          Pengaspalan jalan berkualitas, cepat, dan bergaransi dengan harga transparan.
        </p>
        <a
          href="https://wa.me/6287828171161?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pengaspalan%20jalan.%20Bisa%20minta%20informasi%20lebih%20lanjut?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 text-white"
          style={{ backgroundColor: '#FFA10B' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff8c00'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFA10B'}
        >
          Hubungi Kami Sekarang
        </a>
      </div>
    </header>
  );
};

export default Header;
