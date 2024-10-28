# Affine Cipher Program

## Deskripsi
Proyek ini adalah implementasi dari program Affine Cipher sebagai tugas kelompok dalam mata kuliah Kriptografi. Program ini dapat melakukan enkripsi dan dekripsi teks menggunakan algoritma Affine Cipher yang ditulis dalam JavaScript menggunakan React. Program ini menyediakan antarmuka pengguna untuk memasukkan teks, nilai `a`, dan `b`, serta memilih mode enkripsi atau dekripsi.

## Kelompok
- **Dzakwan Irfan Ramdhani** (Informatika 2022)
- **Amar** (Informatika 2022)
- **Fahmi** (Informatika 2022)

## Teknologi
- **React**: Digunakan untuk membangun antarmuka pengguna.
- **JavaScript**: Bahasa pemrograman utama untuk logika enkripsi dan dekripsi.
- **CSS**: Digunakan untuk styling antarmuka.
- **ESLint**: Digunakan untuk konsistensi kode dengan aturan yang ditentukan.

## Cara Menggunakan
1. **Clone Repository**: 
   ```bash
   git clone <repository_url>
   cd affine_cipher_program
   ```

2. **Instalasi Dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**:
   ```bash
   npm start
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

4. **Menggunakan Program**:
   - Pilih mode "Enkripsi" atau "Dekripsi".
   - Masukkan teks yang ingin diolah.
   - Masukkan nilai `a` dan `b`.
   - Tekan tombol "Enkripsi" atau "Dekripsi" untuk mendapatkan hasil.

## Algoritma Affine Cipher
Program ini menggunakan rumus sebagai berikut:
- **Rumus Enkripsi**: `E(x) = (a * x + b) mod 26`
- **Rumus Dekripsi**: `D(x) = a⁻¹(x - b) mod 26`

Dimana:
- `x` adalah nilai numerik dari karakter (0-25).
- `a` harus koprime dengan 26 (GCD(a, 26) = 1).
- `a⁻¹` adalah invers modulo dari `a`.
- `b` adalah nilai pergeseran.

## Validasi Input
Program akan memverifikasi input sebagai berikut:
- Memastikan bahwa teks telah diisi.
- Memastikan bahwa nilai `a` koprime dengan 26.
- Menampilkan pesan kesalahan jika input tidak valid.

## Contoh Penggunaan
- **Enkripsi**:
   - Input: `text = "HELLO"`, `a = 5`, `b = 8`
   - Output: `ZEBBW`
- **Dekripsi**:
   - Input: `text = "ZEBBW"`, `a = 5`, `b = 8`
   - Output: `HELLO`

## Lisensi
Proyek ini dibuat untuk tujuan akademik sebagai tugas mata kuliah Kriptografi di Program Studi Informatika, Universitas Jenderal Soedirman, Angkatan 2022.
