
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors duration-300" style={{ _hover: { color: '#FFA10B' } }}>
        {children}
    </a>
);

const FacebookIcon: React.FC = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const InstagramIcon: React.FC = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.823a3 3 0 110-6 3 3 0 010 6zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
    </svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden -mt-1" style={{ background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>
            {/* Decorative top wave */}


            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: '#FFA10B', color: 'white' }}>
                            TENTANG KAMI
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#FFA10B' }}>Utama Jaya</h3>
                        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                            Jasa pengaspalan jalan profesional berkualitas, cepat, dan terpercaya untuk wilayah Barlingmascakeb.
                        </p>
                    </div>
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: '#F6E244', color: '#1a1a1a' }}>
                            KONTAK
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Hubungi Kami</h3>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-400 flex items-start justify-center md:justify-start gap-2">
                                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FFA10B' }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>JL Mohammad Yamin Gg. XIII, Kecamatan Purwokerto Selatan, Kabupaten Banyumas</span>
                            </p>
                            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-2">
                                <svg className="w-5 h-5" style={{ color: '#FFA10B' }} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a href="tel:+6287828171161" style={{ color: '#FFA10B' }} className="font-bold hover:underline">0878-2817-1161</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: '#FFA10B', color: 'white' }}>
                            SOSIAL MEDIA
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Ikuti Kami</h3>
                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 text-white" style={{ backgroundColor: '#FFA10B' }}>
                                <FacebookIcon />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-rotate-6" style={{ backgroundColor: '#F6E244', color: '#1a1a1a' }}>
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 text-center" style={{ borderTop: '2px solid #FFA10B' }}>
                    <p className="text-sm text-gray-500">
                        &copy; 2025 <span style={{ color: '#FFA10B' }} className="font-bold">Utama Jaya</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
