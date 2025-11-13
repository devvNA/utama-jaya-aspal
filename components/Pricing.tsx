import React from 'react';
import pricingData from '../package_price.json';

interface PricingPackage {
  jenis: string;
  harga_per_m2: number;
  keterangan: string;
  free_services: string[];
  link_referensi?: {
    LPA?: string;
    LPB?: string;
  };
}

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const TagIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const formatRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
};

const PricingCard: React.FC<PricingPackage & { index: number }> = ({
  jenis,
  harga_per_m2,
  keterangan,
  free_services,
  link_referensi,
  index,
  isPopular
}) => {
  const colors = ['#FFA10B', '#ff8c00', '#ff8c00', '#FFA10B'];
  const bgColor = colors[index % 4];

  return (
    <div
      className={`relative bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-3 border-4 overflow-hidden ${isPopular ? 'ring-4 ring-offset-4' : ''
        }`}
      style={{
        borderColor: bgColor,
        ringColor: isPopular ? bgColor : undefined
      }}
    >
      {/* Popular Badge */}
      {/* {isPopular && (
        <div
          className="absolute -top-3 -right-3 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg transform rotate-12"
          style={{background: `linear-gradient(135deg, ${bgColor} 0%, ${colors[(index + 1) % 4]} 100%)`}}
        >
          TERPOPULER
        </div>
      )} */}

      {/* Decorative circles */}
      <div
        className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-10"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10"
        style={{ backgroundColor: colors[(index + 1) % 4] }}
      ></div>

      {/* Icon Badge */}
      <div className="flex justify-center mb-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl text-white transform transition-transform duration-300 hover:scale-110 hover:rotate-12"
          style={{ background: `linear-gradient(135deg, ${bgColor} 0%, ${colors[(index + 1) % 4]} 100%)` }}
        >
          <TagIcon />
        </div>
      </div>

      {/* Package Name */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-4 min-h-[3rem] flex items-center justify-center">
        {jenis}
      </h3>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold" style={{ color: bgColor }}>
            {formatRupiah(harga_per_m2).split(',')[0]}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2">per meter persegi</p>
      </div>

      {/* Divider */}
      <div className="w-full h-1 rounded-full mb-6" style={{ background: `linear-gradient(90deg, ${bgColor} 0%, ${colors[(index + 1) % 4]} 100%)` }}></div>

      {/* Free Services */}
      <div className="space-y-3 mb-6">
        {free_services.map((service, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white mt-0.5"
              style={{ backgroundColor: bgColor }}
            >
              <CheckIcon />
            </div>
            <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
          </div>
        ))}
      </div>

      {/* Reference Links (if exists) */}
      {link_referensi && (
        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-xs font-semibold text-gray-600 mb-2">Referensi Teknis:</p>
          <div className="flex flex-wrap gap-2">
            {link_referensi.LPA && (
              <a
                href={link_referensi.LPA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: bgColor }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                LPA Info
              </a>
            )}
            {link_referensi.LPB && (
              <a
                href={link_referensi.LPB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: colors[(index + 1) % 4] }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                LPB Info
              </a>
            )}
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-xs text-gray-500 text-center mb-6 leading-relaxed">{keterangan}</p>

      {/* CTA Button */}
      <a
        href={`https://wa.me/6287828171161?text=Halo,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(jenis)}%20-%20${formatRupiah(harga_per_m2)}/m²`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${bgColor} 0%, ${colors[(index + 1) % 4]} 100%)` }}
      >
        Pilih Paket Ini
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  const packages: PricingPackage[] = pricingData.paket_harga_pengaspalan;

  return (
    <section id="pricing" className="py-20 relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #FFA10B 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #F6E244 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#FFF5E6', color: '#FFA10B' }}>
            Harga Terjangkau & Transparan
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Paket Harga Pengaspalan</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih paket yang sesuai dengan kebutuhan proyek Anda. Semua harga sudah termasuk konsultasi, survey, dan transport gratis!
          </p>
          <div className="w-32 h-1.5 mx-auto mt-6 rounded-full" style={{ background: 'linear-gradient(90deg, #FFA10B 0%, #F6E244 100%)' }}></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              {...pkg}
              index={index}
            // Marking second package as popular
            />
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-xl p-8 max-w-2xl border-2" style={{ borderColor: '#FFA10B' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Butuh Harga Custom?</h3>
            <p className="text-gray-600 mb-6">
              Untuk proyek dengan volume besar atau kebutuhan khusus, kami siap memberikan harga terbaik untuk Anda.
            </p>
            <a
              href="https://wa.me/6287828171161?text=Halo,%20saya%20ingin%20diskusi%20untuk%20harga%20custom%20pengaspalan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #FFA10B 0%, #ff8c00 100%)' }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Konsultasi Harga Custom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
