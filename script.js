// Menunggu semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    const joinButton = document.getElementById('btnJoin');

    // Contoh interaksi klik pada tombol Join
    joinButton.addEventListener('click', () => {
        alert('Terima kasih! Kamu akan diarahkan ke halaman pendaftaran JelanTech.');
        // window.location.href = 'halaman-daftar.html'; // Aktifkan jika sudah ada file tujuan
    });

    // Opsional: Efek sticky navbar sederhana saat scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

});


document.addEventListener('DOMContentLoaded', () => {
    // Logika Form Login
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Redirect ke halaman leaderboard
            window.location.href = 'leaderboard.html';
        });
    }
});

// Tambahkan kode ini di dalam document.addEventListener('DOMContentLoaded', ... )

const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulasi pendaftaran berhasil
        alert("Akun berhasil dibuat! Silakan masuk ke halaman Sign In.");
        window.location.href = 'login.html';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // 1. Logika Pemilihan Waktu (Time Buttons)
    const timeButtons = document.querySelectorAll('.time-btn');
    const scheduleText = document.getElementById('schedule-text');
    const selectedDate = "Wednesday, 14 April 2026"; // Contoh statis dari input date

    timeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Hapus class active dari semua tombol
            timeButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan class active ke tombol yang diklik
            this.classList.add('active');

            // Update teks ringkasan di bawah
            const selectedTime = this.innerText;
            scheduleText.innerText = `Scheduled Pickup on ${selectedDate} at ${selectedTime}`;
        });
    });

    // 2. Logika Penghitungan Poin & Update Jumlah Minyak
    const oilInputs = document.querySelectorAll('input[name="oil-qty"]');
    const displayAmount = document.getElementById('display-amount');
    const displayPoints = document.getElementById('display-points');

    oilInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (this.checked) {
                const amount = this.value;
                const points = this.getAttribute('data-points');

                // Update tampilan di layar
                displayAmount.innerText = `${amount} ml`;
                displayPoints.innerText = points;

                // Efek visual sederhana saat berganti pilihan
                displayPoints.style.transform = "scale(1.2)";
                setTimeout(() => {
                    displayPoints.style.transform = "scale(1)";
                }, 200);
            }
        });
    });

    // 3. Logika Tombol "Schedule Now"
    const scheduleBtn = document.querySelector('.btn-schedule');
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function () {
            alert('Your pickup has been scheduled! Check your points on the Leaderboard.');
            // Arahkan ke halaman leaderboard setelah klik OK
            window.location.href = 'leaderboard.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scheduleText = document.getElementById('schedule-text');
    const timeButtons = document.querySelectorAll('.time-btn');

    // 1. Inisialisasi Kalender Flatpickr
    const fp = flatpickr("#date-picker", {
        dateFormat: "l, d F Y", // Format: Wednesday, 14 April 2026
        minDate: "today",       // Tidak bisa pilih tanggal lampau
        defaultDate: "today",   // Langsung memilih hari ini saat dibuka

        // Menambahkan tombol "Today" di bagian bawah kalender
        onReady: function (selectedDates, dateStr, instance) {
            const todayBtn = document.createElement("div");
            todayBtn.innerHTML = "Today";
            todayBtn.classList.add("flatpickr-today-button");
            todayBtn.style.cssText = "text-align: center; padding: 10px; cursor: pointer; color: #c05c67; font-weight: bold; border-top: 1px solid #eee;";

            todayBtn.addEventListener("click", () => {
                instance.setDate(new Date());
                instance.close();
            });
            instance.calendarContainer.appendChild(todayBtn);
        },

        // Update teks summary saat tanggal diubah
        onChange: function (selectedDates, dateStr) {
            updateSummary();
        }
    });

    // 2. Fungsi untuk memperbarui teks ringkasan (Summary)
    function updateSummary() {
        const dateVal = document.getElementById('date-picker').value;
        const activeTimeBtn = document.querySelector('.time-btn.active');
        const timeVal = activeTimeBtn ? activeTimeBtn.innerText : "10 AM";

        if (dateVal) {
            scheduleText.innerText = `Scheduled Pickup on ${dateVal} at ${timeVal}`;
        }
    }

    // 3. Update Logika Tombol Waktu (agar sinkron dengan Summary)
    timeButtons.forEach(button => {
        button.addEventListener('click', function () {
            timeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateSummary();
        });
    });

    // Panggil sekali saat load pertama
    updateSummary();
});



document.addEventListener('DOMContentLoaded', function () {
    const profileTrigger = document.getElementById('profile-trigger');
    const profileMenu = document.getElementById('profile-menu');

    // Toggle dropdown saat ikon profil diklik
    profileTrigger.addEventListener('click', function (e) {
        e.stopPropagation(); // Mencegah event bubbling
        profileMenu.classList.toggle('show-dropdown');
    });

    // Menutup dropdown jika klik di luar area profil
    document.addEventListener('click', function (e) {
        if (!profileTrigger.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('show-dropdown');
        }
    });

    // Logika Logout (Opsional)
    const logoutBtn = document.querySelector('.logout-item');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            const confirmLogout = confirm("Are you sure you want to sign out?");
            if (!confirmLogout) {
                e.preventDefault();
            }
        });
    }
});