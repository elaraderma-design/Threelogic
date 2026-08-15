# THREELOGIC — Misteri Geladak Robin

Versi Vercel-ready dari game React **“APAKAH KURSI INI TERISI?”**, berdasarkan file TSX sumber yang diberikan.

## 1. Local

Requirements:
- Node.js 18+ (Node.js 20+ direkomendasikan)

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## 2. Deploy ke Vercel — cara termudah

### Via GitHub
1. Buat repository GitHub baru.
2. Upload seluruh isi folder project ini.
3. Buka Vercel.
4. Import repository tersebut.
5. Vercel akan menggunakan konfigurasi Vite yang sudah tersedia.
6. Klik Deploy.

### Via Vercel CLI

```bash
npm install
npm run build
npx vercel
```

Untuk production:

```bash
npx vercel --prod
```

## 3. Character image

Masukkan file gambar ke:

`public/assets/characters/`

Nama file harus mengikuti path yang ada di `src/App.tsx`.

Contoh:

`public/assets/characters/captain.png`

`public/assets/characters/captain_chibi.png`

## Catatan

Project ini menggunakan Tailwind Play CDN pada `index.html`, sehingga utility class dari file sumber tetap dapat dirender tanpa konfigurasi Tailwind tambahan. Untuk production skala besar, Tailwind dapat dipindahkan ke build pipeline resmi.
