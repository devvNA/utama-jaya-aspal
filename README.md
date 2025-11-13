# Utama Jaya - Website Jasa Pengaspalan

Website landing page modern untuk **Utama Jaya**, perusahaan jasa pengaspalan jalan profesional yang melayani wilayah Barlingmascakeb (Banjarnegara, Purbalingga, Banyumas, Cilacap, dan Kebumen).

## 🚀 Tech Stack

- **React 19.2.0** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** (via CDN) - Styling
- **Node.js** - Runtime Environment

## ✨ Fitur Utama

### 📱 Komponen Website
- **Hero Section** - Header dengan gradient background dan CTA WhatsApp
- **Keunggulan** - 5 keunggulan layanan dengan icon gradient
- **Layanan** - 6 jenis layanan pengaspalan (jalan raya, perumahan, gudang, dll)
- **Paket Harga** - 4 paket harga dengan detail dari JSON data
- **Area Layanan** - Coverage area dengan gradient background
- **Galeri** - Portfolio pekerjaan dengan lightbox modal
- **Testimoni** - Review dari klien dengan design modern
- **Form Kontak** - Form untuk konsultasi gratis
- **Footer** - Informasi kontak dan social media
- **WhatsApp Button** - Floating button untuk quick contact

### 🎨 Design Features
- Light mode dengan color scheme **#FFA10B** (orange) & **#F6E244** (yellow)
- Gradient backgrounds & decorative elements
- Hover animations (scale, rotate, translate)
- Shadow effects & border styling
- Responsive design (mobile-first)
- Smooth scrolling

### 📊 Data-Driven
- Harga paket dari `package_price.json`
- Format Rupiah otomatis
- Link referensi teknis (LPA/LPB)

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 atau lebih tinggi)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>

# Masuk ke direktori project
cd fahmi-aspal

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 📁 Struktur Project

```
fahmi-aspal/
├── components/           # React components
│   ├── Header.tsx       # Hero section
│   ├── Advantages.tsx   # Keunggulan layanan
│   ├── Services.tsx     # Jenis layanan
│   ├── Pricing.tsx      # Paket harga
│   ├── ServiceArea.tsx  # Area coverage
│   ├── Gallery.tsx      # Portfolio galeri
│   ├── Testimonials.tsx # Review klien
│   ├── ContactForm.tsx  # Form kontak
│   ├── Footer.tsx       # Footer section
│   └── WhatsAppButton.tsx # Floating WA button
├── public/
│   ├── images/          # Image assets
│   │   ├── hero-background.svg
│   │   └── gallery-*.svg
│   └── manifest.json
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── index.html           # HTML template
├── package_price.json   # Data harga paket
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── package.json         # Dependencies
```

## 📞 Informasi Kontak

**Utama Jaya**
- 📍 Alamat: JL Mohammad Yamin Gg. XIII, Kecamatan Purwokerto Selatan, Kabupaten Banyumas
- 📱 WhatsApp: 0878-2817-1161
- 🌐 Area: Banjarnegara, Purbalingga, Banyumas, Cilacap, Kebumen

## 🎯 Paket Layanan

1. **Tanpa Dasaran** - Rp 75.000/m²
2. **Dasaran Split 1/2** - Rp 100.000/m²
3. **Dasaran Split 3/5** - Rp 125.000/m²
4. **LPA dan LPB** - Rp 150.000/m²

*Sudah termasuk: Free konsultasi, survey lokasi, dan transport dalam kota

## 🖼️ Assets

### Mengganti Image
Untuk mengganti placeholder images dengan foto asli:

1. Letakkan file JPG/PNG ke folder `/public/images/`
2. Sesuaikan nama file atau update path di component
3. Untuk hero: ganti `/public/images/hero-background.svg`
4. Untuk gallery: ganti `/public/images/gallery-*.svg`

Ukuran rekomendasi:
- Hero: 1920x1080px
- Gallery: 600x400px

## 🚀 Deployment

Build production files akan ada di folder `/dist`:

```bash
npm run build
```

Upload folder `dist/` ke hosting:
- Vercel
- Netlify
- GitHub Pages
- cPanel / Shared Hosting

## 📝 License

© 2025 Utama Jaya. All rights reserved.

---

**Built with ❤️ using React + TypeScript + Vite**
