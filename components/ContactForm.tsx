
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [needs, setNeeds] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API)
    alert('Terima kasih! Pesan Anda telah kami terima.');
    setName('');
    setPhone('');
    setNeeds('');
  };

  return (
    <section id="contact" className="pt-20 pb-0 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #ffffff 0%, #fef9f0 100%)'}}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-10" style={{backgroundColor: '#FFA10B'}}></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full opacity-10" style={{backgroundColor: '#F6E244'}}></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{backgroundColor: '#FFF5E6', color: '#FFA10B'}}>
            Konsultasi Gratis
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-xl mx-auto">Dapatkan penawaran dan konsultasi gratis untuk proyek Anda.</p>
          <div className="w-32 h-1.5 mx-auto mt-6 rounded-full" style={{background: 'linear-gradient(90deg, #FFA10B 0%, #F6E244 100%)'}}></div>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-4" style={{borderTopColor: '#FFA10B'}}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2"
                style={{focusRingColor: '#FFA10B'}}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Nomor Telepon/WhatsApp</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2"
                style={{focusRingColor: '#FFA10B'}}
              />
            </div>
            <div>
              <label htmlFor="needs" className="block text-sm font-medium text-gray-900">Deskripsi Kebutuhan</label>
              <textarea
                id="needs"
                name="needs"
                rows={4}
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
                required
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-gray-900 focus:outline-none focus:ring-2"
                style={{focusRingColor: '#FFA10B'}}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-xl text-lg font-bold text-white transition-all duration-300 transform hover:scale-105"
                style={{background: 'linear-gradient(135deg, #FFA10B 0%, #ff8c00 100%)'}}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Bottom spacer to ensure smooth transition */}
      <div className="h-20" style={{backgroundColor: '#fef9f0'}}></div>
    </section>
  );
};

export default ContactForm;
