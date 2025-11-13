import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/gallery-1.jpg',
      alt: 'Pengaspalan jalan di Banjarnegara',
      title: 'Pengaspalan Jalan Banjarnegara'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpg',
      alt: 'Proses pengaspalan di Purbalingga',
      title: 'Proses Pengerjaan Purbalingga'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpg',
      alt: 'Hasil pengaspalan berkualitas Banyumas',
      title: 'Hasil Akhir Banyumas'
    },
    {
      id: 4,
      src: '/images/gallery-4.jpg',
      alt: 'Tim profesional sedang mengerjakan aspal',
      title: 'Tim Profesional Kami'
    },
    {
      id: 5,
      src: '/images/gallery-5.jpg',
      alt: 'Jalan aspal selesai di Cilacap',
      title: 'Pengaspalan Cilacap'
    },
    {
      id: 6,
      src: '/images/gallery-6.jpg',
      alt: 'Pengaspalan jalan di Kebumen',
      title: 'Pengaspalan Kebumen'
    }
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fef9f0 0%, #ffffff 50%, #fef9f0 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#FFA10B' }}></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: '#F6E244' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#FFF5E6', color: '#FFA10B' }}>
            Portofolio Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Galeri Pengaspalan Kami</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Lihat hasil pekerjaan berkualitas kami di berbagai lokasi</p>
          <div className="w-32 h-1.5 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #FFA10B 0%, #F6E244 100%)' }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              onClick={() => setSelectedId(image.id)}
              style={{
                border: '4px solid',
                borderColor: idx % 3 === 0 ? '#FFA10B' : idx % 3 === 1 ? '#F6E244' : '#ff8c00'
              }}
            >
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6" style={{ color: '#FFA10B' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-125"
              />
              <div
                className="absolute inset-0 transition-all duration-300 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,161,11,0) 0%, rgba(255,161,11,0.95) 100%)',
                  opacity: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    Klik untuk melihat lebih besar
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedId && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedId(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ×
              </button>
              <img
                src={galleryImages.find(img => img.id === selectedId)?.src}
                alt={galleryImages.find(img => img.id === selectedId)?.alt}
                className="w-full rounded-lg"
              />

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
