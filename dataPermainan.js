const dataTutorialLatihan = [
        {
            id: "kekuatan",
            komponen: "Kekuatan",
            icon: "💪",
            deskripsi: "Latihan kekuatan melatih otot untuk kontraksi maksimal dan membantu siswa menangani beban sehari-hari tanpa alat tambahan.",
            latihan: [
                {
                    level: "Pemula",
                    nama: "Wall Push-Up",
                    nama_lokal: "Variasi push-up dinding",
                    deskripsi: "Berdiri menghadap dinding, tangan sejajar bahu, tekuk siku lalu dorong tubuh kembali.",
                    volume: "3 set × 8–10 repetisi",
                    peran_teman: "Mengawasi postur.",
                    video: "wall_push_up.mp4"
                },
                {
                    level: "Menengah",
                    nama: "Knee Push-Up",
                    nama_lokal: "Push-up lutut",
                    deskripsi: "Tengkurap, lutut di lantai, dorong dada naik-turun.",
                    volume: "3 set × 12–15 repetisi",
                    peran_teman: "Memegang kaki.",
                    video: "knee_push_up.mp4"
                },
                {
                    level: "Lanjutan",
                    nama: "Standard Push-Up",
                    nama_lokal: "",
                    deskripsi: "Posisi plank penuh, dorong tubuh naik-turun.",
                    volume: "3 set × 15–20 repetisi",
                    peran_teman: "Spot pinggang.",
                    video: "push_up.mp4"
                }
            ]
        },
        {
            id: "daya-tahan",
            komponen: "Daya Tahan Jantung-Paru",
            icon: "🫀",
            deskripsi: "Latihan ini meningkatkan kemampuan jantung dan paru-paru dalam menyuplai oksigen dalam waktu lama tanpa kelelahan berarti.",
            latihan: [
                {
                    level: "Pemula",
                    nama: "Marching in Place",
                    nama_lokal: "Berbaris di tempat",
                    deskripsi: "Angkat lutut bergantian cepat sambil mengayun tangan.",
                    volume: "3 set × 1 menit",
                    peran_teman: "Menghitung detak jantung.",
                    video: "jalan_ditempat.mp4"
                },
                {
                    level: "Menengah",
                    nama: "High Knees",
                    nama_lokal: "Lutut tinggi",
                    deskripsi: "Lari di tempat dengan lutut diangkat sampai pinggang.",
                    volume: "3 set × 2 menit",
                    peran_teman: "Mengawasi form.",
                    video: "lari_ditempat.mp4"
                },
                {
                    level: "Lanjutan",
                    nama: "Burpees",
                    nama_lokal: "Tanpa push-up penuh",
                    deskripsi: "Squat, lompat ke posisi plank, lalu lompat kembali berdiri.",
                    volume: "3 set × 3 menit",
                    peran_teman: "Spot lompatan.",
                    video: "burpees.mp4"
                }
            ]
        },
        {
            id: "daya-ledak",
            komponen: "Daya Ledak",
            icon: "💥",
            deskripsi: "Latihan daya ledak bertujuan meningkatkan power otot tungkai melalui perpaduan kekuatan dan kecepatan.",
            latihan: [
                {
                    level: "Pemula",
                    nama: "Squat Jump Dasar",
                    nama_lokal: "",
                    deskripsi: "Melakukan gerakan squat, lalu lompat ringan dan kembali berdiri.",
                    volume: "3 set × 8 repetisi",
                    peran_teman: "Mengukur tinggi lompatan.",
                    video: "squat_jump.mp4"
                },
                {
                    level: "Menengah",
                    nama: "Tuck Jump",
                    nama_lokal: "Lutut ke dada",
                    deskripsi: "Lompat sambil mengangkat lutut ke arah dada.",
                    volume: "3 set × 10 repetisi",
                    peran_teman: "Menghitung repetisi.",
                    video: "tuck_jump.mp4"
                },
                {
                    level: "Lanjutan",
                    nama: "Bounding",
                    nama_lokal: "Lompat jauh berurutan",
                    deskripsi: "Lompat maju dengan hentakan kuat, ulangi sejauh 5–10 meter.",
                    volume: "3 set × 12 repetisi",
                    peran_teman: "Menandai garis.",
                    video: "lompat_beruntun.mp4"
                }
            ]
        },
        {
            id: "kecepatan",
            komponen: "Kecepatan",
            icon: "⚡",
            deskripsi: "Latihan kecepatan bertujuan meningkatkan akselerasi dan kemampuan berpindah tempat dalam waktu sesingkat mungkin.",
            latihan: [
                {
                    level: "Pemula",
                    nama: "Sprint 10m",
                    nama_lokal: "Lari pendek",
                    deskripsi: "Lari secepat mungkin sejauh 10 meter.",
                    volume: "3 set, istirahat 30 detik",
                    peran_teman: "Start dan stop.",
                    video: "sprint_10_m.mp4"
                },
                {
                    level: "Menengah",
                    nama: "Shuttle Run 20m",
                    nama_lokal: "Bolak-balik",
                    deskripsi: "Lari bolak-balik 10 meter sebanyak 2 kali.",
                    volume: "4 set",
                    peran_teman: "Menandai titik.",
                    video: "shuttle_run.mp4"
                },
                {
                    level: "Lanjutan",
                    nama: "Sprint 30m + Agility Turn",
                    nama_lokal: "",
                    deskripsi: "Sprint 30 meter, lalu putar cepat kembali.",
                    volume: "4 set",
                    peran_teman: "Mengukur waktu total.",
                    video: "sprint_30_m.mp4"
                }
            ]
        }
    ];

    let selectedTutorialId = null;
