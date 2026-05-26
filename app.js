// ==========================================
// 1. ÜNİVERSİTE VERİ HAVUZU
// ==========================================
const uniData = {
    tum: {
        title: "Münih Teknik Üniversitesi (TUM)",
        location: "Münih, Bavyera",
        desc: "Almanya'nın en prestijli teknik üniversitesidir. Nobel ödüllü birçok bilim insanı yetiştirmiştir. Mühendislik fakülteleri dünya çapında lider konumdadır ve sanayi devleri ile doğrudan ortak projeler yürütmektedir.",
        year: "1868",
        students: "50,000+",
        link: "https://www.tum.de",
        images: [
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.tum.de%2Ffileadmin%2F_processed_%2F7%2F4%2Fcsm_20180411_TUM_150_Jahre_TUM_Eingang_UB_-2047_klein_5cc1cf0509.jpg&sp=1779817874Td1f382f56853a295a6b25ad10521ccbd3e8c8f245493920f6cf243daa4ac8ea0",
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
        ]
    },
    rwth: {
        title: "RWTH Aachen Üniversitesi",
        location: "Aachen, Kuzey Ren-Vestfalya",
        desc: "Avrupa'nın en büyük teknik üniversitelerinden biridir. Özellikle Makine Mühendisliği ve Bilgisayar Bilimleri alanlarında Almanya'nın bir numarası olarak kabul edilir. Aachen şehri tamamen bir öğrenci kentine dönüşmüştür.",
        year: "1870",
        students: "47,000+",
        link: "https://www.rwth-aachen.de",
        images: [
            "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
        ]
    },
    heidelberg: {
        title: "Heidelberg Üniversitesi",
        location: "Heidelberg, Baden-Württemberg",
        desc: "Almanya'nın en eski ve köklü üniversitesidir. Tıp, Astronomi, Psikoloji ve Felsefe alanlarında küresel bir üne sahiptir. Tarihi dokusu korunan kampüsüyle klasik Alman akademik kültürü sunar.",
        year: "1386",
        students: "29,000+",
        link: "https://www.uni-heidelberg.de",
        images: [
            "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80"
        ]
    }
};

// ==========================================
// 2. MODAL VE SLIDER (GALERİ) MANTIĞI
// ==========================================
const cards = document.querySelectorAll('.uni-card');
const modal = document.getElementById('uniModal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const modalLoc = document.getElementById('modalLoc');
const modalDesc = document.getElementById('modalDesc');
const modalYear = document.getElementById('modalYear');
const modalStudents = document.getElementById('modalStudents');
const modalLink = document.getElementById('modalLink');
const modalImg = document.getElementById('modalImg');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let activeImages = [];
let currentImgIndex = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const data = uniData[id];
        
        modalTitle.innerText = data.title;
        modalLoc.innerText = "📍 " + data.location;
        modalDesc.innerText = data.desc;
        modalYear.innerText = data.year;
        modalStudents.innerText = data.students;
        modalLink.href = data.link;
        
        activeImages = data.images;
        currentImgIndex = 0;
        modalImg.src = activeImages[currentImgIndex];
        
        modal.classList.add('open');
    });
});

nextBtn.addEventListener('click', () => {
    currentImgIndex++;
    if (currentImgIndex >= activeImages.length) currentImgIndex = 0;
    modalImg.src = activeImages[currentImgIndex];
});

prevBtn.addEventListener('click', () => {
    currentImgIndex--;
    if (currentImgIndex < 0) currentImgIndex = activeImages.length - 1;
    modalImg.src = activeImages[currentImgIndex];
});

closeBtn.addEventListener('click', () => modal.classList.remove('open'));
window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

// ==========================================
// 3. NOT HESAPLAMA MANTIĞI (BAVYERA FORMÜLÜ)
// ==========================================
const gradeSystem = document.getElementById('gradeSystem');
const studentGradeInput = document.getElementById('studentGrade');
const calcBtn = document.getElementById('calcBtn');
const germanGradeDisplay = document.getElementById('germanGrade');
const resultTextDisplay = document.getElementById('resultText');

if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const system = gradeSystem.value;
        const grade = parseFloat(studentGradeInput.value);

        if (isNaN(grade) || grade < 0) {
            alert("Lütfen geçerli bir not ortalaması giriniz.");
            return;
        }

        let pMax, pMin;

        if (system === "4") {
            pMax = 4.0; pMin = 2.0;
            if (grade > 4.0) { alert("Notunuz 4.00'ten büyük olamaz."); return; }
            if (grade < 2.0) {
                germanGradeDisplay.innerText = "4.0+";
                resultTextDisplay.innerText = "Girdiğiniz not minimum geçme sınırının altında kaldığı için Alman sisteminde başarısız kabul edilir.";
                return;
            }
        } else if (system === "100") {
            pMax = 100; pMin = 50;
            if (grade > 100) { alert("Notunuz 100'den büyük olamaz."); return; }
            if (grade < 50) {
                germanGradeDisplay.innerText = "4.0+";
                resultTextDisplay.innerText = "Girdiğiniz not lise mezuniyet barajının altında kaldığı için Alman sisteminde başarısız kabul edilir.";
                return;
            }
        }

        let germanGrade = 1 + 3 * ((pMax - grade) / (pMax - pMin));
        germanGrade = germanGrade.toFixed(1);
        germanGradeDisplay.innerText = germanGrade;

        if (germanGrade >= 1.0 && germanGrade <= 1.5) {
            resultTextDisplay.innerText = "Harika bir not! Almanya'daki prestijli teknik üniversitelerden kabul alma şansınız yüksek.";
        } else if (germanGrade > 1.5 && germanGrade <= 2.5) {
            resultTextDisplay.innerText = "İyi bir derece. Birçok Alman devlet üniversitesinin kabul şartlarını karşılıyorsunuz.";
        } else if (germanGrade > 2.5 && germanGrade <= 3.5) {
            resultTextDisplay.innerText = "Orta düzey bir not. Şartlı kabul sunan üniversiteler üzerinden şansınızı deneyebiliriz.";
        } else {
            resultTextDisplay.innerText = "Sınırda bir not. Almanya'da hazırlık eğitimi (Studienkolleg) seçeneğini değerlendirmeniz gerekebilir.";
        }
    });
}

// ==========================================
// 4. GELİŞMİŞ FORM KONTROLÜ VE NETLIFY GÖNDERİMİ
// ==========================================
const evaluationForm = document.getElementById('evaluationForm');
const formSuccess = document.getElementById('formSuccess');

if (evaluationForm) {
    evaluationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfa yenilenmesini kesin olarak engeller

        const requiredInputs = evaluationForm.querySelectorAll('[required]');
        let isFormValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(05|5)[0-9]{9}$/;

        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const fileInput = document.getElementById('document');

        // Boşluk kontrolü
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isFormValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        // Email format kontrolü
        if (emailInput && emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
            alert("Lütfen geçerli bir e-posta adresi giriniz.");
            emailInput.classList.add('error');
            isFormValid = false;
        }

        // Telefon format kontrolü
        if (phoneInput && phoneInput.value.trim()) {
            const cleanedPhone = phoneInput.value.replace(/[\s()-]/g, "");
            if (!phoneRegex.test(cleanedPhone)) {
                alert("Lütfen geçerli bir telefon numarası giriniz.");
                phoneInput.classList.add('error');
                isFormValid = false;
            }
        }


        if (!isFormValid) return; // Hata varsa burada kes

        // Netlify altyapısı için verileri paketleme
        const formData = new FormData(evaluationForm);

        // Doğrudan Netlify kök dizinine POST isteği atma
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                evaluationForm.style.display = 'none';
                formSuccess.style.display = 'block';
            } else {
                alert("Form sunucuya iletilemedi. Lütfen tekrar deneyin.");
            }
        })
        .catch(error => {
            console.error("Hata:", error);
            alert("Bağlantı hatası oluştu: " + error.message);
        });
    });

// ==========================================
// DİNAMİK ALAN GÖSTERİMİ (KOŞULLU GÖRÜNÜRLÜK)
// ==========================================
const eduStatusSelect = document.getElementById('eduStatus');
const uniGradeGroup = document.getElementById('uniGradeGroup');
const uniGradeInput = document.getElementById('uniGrade');

if (eduStatusSelect && uniGradeGroup && uniGradeInput) {
    // Eğitim durumu açılır menüsünde her değişim olduğunda çalışır
    eduStatusSelect.addEventListener('change', function() {
        const secilenDeger = eduStatusSelect.value;

        // Eğer kullanıcı üniversite öğrencisi veya mezunu seçtiyse
        if (secilenDeger === "Üniversite Öğrencisi" || secilenDeger === "Üniversite Mezunu") {
            uniGradeGroup.style.display = 'block'; // Kutuyu görünür yap
            uniGradeInput.setAttribute('required', 'true'); // Zorunlu alan haline getir
        } else {
            // Lise seçildiyse veya boş bırakıldıysa
            uniGradeGroup.style.display = 'none'; // Kutuyu gizle
            uniGradeInput.removeAttribute('required'); // Zorunluluk kuralını kaldır
            uniGradeInput.value = ''; // Gizlenirken içindeki eski yazıyı temizle
            uniGradeInput.classList.remove('error'); // Varsa kırmızı hata çerçevesini sil
        }
    });
}
    // Hata sınıflarını anlık temizleme dinamikleri
    evaluationForm.querySelectorAll('[required]').forEach(input => {
        input.addEventListener('input', () => { if (input.value.trim()) input.classList.remove('error'); });
        input.addEventListener('change', () => { if (input.value) input.classList.remove('error'); });
    });
}
// ==========================================
// MOBİL MENÜ (HAMBURGER) ETKİLEŞİM MANTIĞI
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    // Hamburger butonuna tıklandığında çalışır
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Menüyü açar/kapatır
        menuToggle.classList.toggle('open');  // Üç çizgiyi X yapar
    });

    // Menü açıkken herhangi bir linke tıklandığında menüyü otomatik kapatır
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('remove');
            menuToggle.classList.remove('open');
        });
    });
}
