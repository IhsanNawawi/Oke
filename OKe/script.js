// Mendapatkan referensi ke formulir pendaftaran
const registrationForm = document.getElementById('registrationForm');

// Menambahkan event listener untuk submit form
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil nilai dari input form
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validasi sederhana
    if (fullname && email && phone) {
        // Jika semua field diisi, lanjutkan pengiriman data
        alert('Terima kasih! Pendaftaran Anda berhasil.');
        // Di sini biasanya akan ada kode untuk mengirim data ke backend atau melakukan operasi lainnya.
    } else {
        // Jika ada field yang kosong, beri peringatan
        alert('Harap isi semua field.');
    }
});
