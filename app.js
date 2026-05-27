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
            "images/TUM1.jpg",
            "images/TUM2.jpg",
            "images/TUM3.jpg"
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
            "images/RWTH1.jpg",
            "images/RWTH2.jpg",
            "images/RWTH3.jpg"
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
            "images/HEU1.jpg",
            "images/HEU2.jpg",
            "images/HEU3.jpg"
        ]
    }
};

// ==========================================
// 2. MODAL VE YUMUŞAK SLIDER GEÇİŞLERİ
// ==========================================
const modal = document.getElementById('uniModal');
const closeBtn = document.querySelector('.close-btn');

// Slider DOM Elemanları
const sliderWrapper = document.getElementById('modalSliderWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImages = []; 
let currentSlideIndex = 0; 

// Modalı Açma ve İçeriği Doldurma Fonksiyonu
function openModal(uniId) {
    const uni = uniData[uniId];
    if (!uni) return;

    // Metin içeriklerini bağlama
    modal.querySelector('h2').textContent = uni.title;
    modal.querySelector('.loc-text').textContent = uni.location;
    modal.querySelector('.modal-desc').textContent = uni.desc;
    modal.querySelector('.year-box h3').textContent = uni.year;
    modal.querySelector('.student-box h3').textContent = uni.students;
    modal.querySelector('#modalLink').setAttribute('href', uni.link);

    const modalMap = document.getElementById('modalMap');
    if (modalMap) {
        // Üniversite adına göre Google Maps canlı harita linkini üretir
        modalMap.src = `https://maps.google.com/maps?q=${encodeURIComponent(uni.title)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    }

    // Slider resim havuzunu oluşturma
    currentImages = uni.images; 
    currentSlideIndex = 0; 
    renderSlides(); 

    modal.classList.add('open');
}

// Resim Odalarını (Div'leri) Dinamik Oluşturma Fonksiyonu
function renderSlides() {
    sliderWrapper.innerHTML = ''; // Eski resimleri temizle

    currentImages.forEach((imgUrl, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slider-slide');
        slideDiv.style.backgroundImage = `url('${imgUrl}')`;
        
        // Sadece ilk resmi başlangıçta görünür yap
        if (index === 0) {
            slideDiv.classList.add('active');
        }
        
        sliderWrapper.appendChild(slideDiv);
    });
}

// Slayt Değiştirme Fonksiyonu
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider-slide');
    if (slides.length <= 1) return; 

    // Mevcut görünür resmin etiketini kaldır
    slides[currentSlideIndex].classList.remove('active');

    // Yeni indeksi hesapla
    currentSlideIndex = (currentSlideIndex + direction + currentImages.length) % currentImages.length;

    // Yeni resme görünürlük etiketini ekle
    slides[currentSlideIndex].classList.add('active');
}

// Olay Dinleyicileri (Kartlar ve Slider Okları)
document.querySelectorAll('.uni-card').forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.getAttribute('data-id'));
    });
});

if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

// Modal Kapatma Olayları
if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
});

// ==========================================
// 3. FORM GÖNDERİMİ VE ZAMAN KONTROLÜ
// ==========================================
const evaluationForm = document.getElementById('evaluationForm');

if (evaluationForm) {
    evaluationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Sayfanın yenilenmesini engeller

        const emailInput = document.getElementById('email') || evaluationForm.querySelector('input[type="email"]');
        if (!emailInput) return;
        
        const emailValue = emailInput.value.trim().toLowerCase();
        const lastSubmitTime = localStorage.getItem(`submit_time_${emailValue}`);
        const currentTime = Date.now();
        const cooldownPeriod = 10 * 60 * 1000; // 10 dakika

        // Zaman kısıtlaması kontrolü
        if (lastSubmitTime) {
            const timePassed = currentTime - parseInt(lastSubmitTime);
            if (timePassed < cooldownPeriod) {
                const remainingMinutes = Math.ceil((cooldownPeriod - timePassed) / 60000);
                alert(`Bu e-posta adresi ile zaten bir başvuru yaptınız. Lütfen yeni bir gönderim için ${remainingMinutes} dakika bekleyin.`);
                return;
            }
        }

        const formData = new FormData(evaluationForm);

        // Web3Forms API'sine Gönderim
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async response => {
            const result = await response.json();
            if (response.ok && result.success) {
                localStorage.setItem(`submit_time_${emailValue}`, Date.now());
                
                evaluationForm.style.display = 'none';
                const formSuccess = document.getElementById('formSuccess');
                if (formSuccess) formSuccess.style.display = 'block';
            } else {
                alert("Form iletilemedi: " + (result.message || "Lütfen tekrar deneyin."));
            }
        })
        .catch(error => {
            console.error("Hata:", error);
            alert("Bağlantı hatası oluştu.");
        });
    });
}
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
// ==========================================
// 4. YUKARI ÇIK (SCROLL TO TOP) MANTIĞI
// ==========================================
const backToTopBtn = document.getElementById('backtotop');

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
