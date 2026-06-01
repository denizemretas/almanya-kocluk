// ==========================================
// 1. ÜNİVERSİTE VERİ HAVUZU (OBJECT DATA)
// ==========================================
const uniData = {
    tum: {
        title: "Münih Teknik Üniversitesi (TUM)",
        location: "Münih, Bavyera",
        desc: "Almanya'nın en prestijli teknik üniversitesidir. Nobel ödüllü birçok bilim insanı yetiştirmiştir. Mühendislik fakülteleri dünya çapında lider konumdadır ve sanayi devleri ile doğrudan ortak projeler yürütmektedir.",
        year: "1868",
        students: "50,000+",
        link: "https://www.tum.de",
        images: ["images/TUM1.jpg", "images/TUM2.jpg", "images/TUM3.jpg"]
    },
    rwth: {
        title: "RWTH Aachen Üniversitesi",
        location: "Aachen, Kuzey Ren-Vestfalya",
        desc: "Avrupa'nın en büyük teknik üniversitelerinden biridir. Özellikle Makine Mühendisliği ve Bilgisayar Bilimleri alanlarında Almanya'nın bir numarası olarak kabul edilir. Aachen şehri tamamen bir öğrenci kentine dönüşmüştür.",
        year: "1870",
        students: "47,000+",
        link: "https://www.rwth-aachen.de",
        images: ["images/RWTH1.jpg", "images/RWTH2.jpg", "images/RWTH3.jpg"]
    },
    heidelberg: {
        title: "Heidelberg Üniversitesi",
        location: "Heidelberg, Baden-Württemberg",
        desc: "Almanya'nın en eski ve köklü üniversitesidir. Tıp, Astronomi, Psikoloji ve Felsefe alanlarında küresel bir üne sahiptir. Tarihi dokusu korunan kampüsüyle klasik Alman akademik kültürü sunar.",
        year: "1386",
        students: "29,000+",
        link: "https://www.uni-heidelberg.de",
        images: ["images/HEU1.jpg", "images/HEU2.jpg", "images/HEU3.jpg"]
    },
    stuttgart: {
        title: "Stuttgart Üniversitesi",
        location: "Stuttgart, Baden-Württemberg",
        desc: "Almanya'nın önde gelen teknik üniversitelerinden biridir. Makine mühendisliği, otomotiv, havacılık ve uzay teknolojileri ile bilgisayar bilimleri alanlarında güçlü bir akademik odağa sahiptir. Endüstri iş birlikleriyle desteklenen araştırma odaklı bir eğitim sunar.",
        year: "1829",
        students: "22,000+",
        link: "https://www.uni-stuttgart.de",
        images: ["images/STU1.jpg", "images/STU2.jpg", "images/STU3.jpg"]
    },
    berlin: {
        title: "Berlin Teknik Üniversitesi (TU Berlin)",
        location: "Berlin",
        desc: "Almanya'nın en büyük ve prestijli teknik üniversitelerinden biridir. Mühendislik ve bilgisayar bilimleri alanlarında dünya çapında bir üne sahiptir.",
        year: "1879",
        students: "35,000+",
        link: "https://www.tu.berlin",
        images: ["images/TUB1.jpg", "images/TUB2.jpg", "images/TUB3.jpg"]
    },
    braunschweig: {
        title: "TU Braunschweig",
        location: "Braunschweig, Aşağı Saksonya",
        desc: "Almanya'nın en eski teknik üniversitesidir. Özellikle otomotiv mühendisliği, havacılık ve mobilite araştırmalarında lider konumdadır.",
        year: "1745",
        students: "16,800+",
        link: "https://www.tu-braunschweig.de",
        images: ["images/TUBR1.jpg", "images/TUBR2.jpg", "images/TUBR3.jpg"]
    },
    darmstadt: {
        title: "TU Darmstadt",
        location: "Darmstadt, Hessen",
        desc: "Siber güvenlik, yapay zekâ ve elektrik-elektronik mühendisliğinde çok güçlüdür. Almanya'da bağımsız bir teknik üniversite olarak kurulan ilk kurumdur.",
        year: "1877",
        students: "25,000+",
        link: "https://www.tu-darmstadt.de",
        images: ["images/TUD1.jpg", "images/TUD2.jpg", "images/TUD3.jpg"]
    },
    dresden: {
        title: "TU Dresden",
        location: "Dresden, Saksonya",
        desc: "Almanya'nın 'Mükemmeliyet Üniversitesi' unvanına sahip az sayıdaki teknik okulundan biridir. Mikroelektronik ve bilişim teknolojilerinde öncüdür.",
        year: "1828",
        students: "30,000+",
        link: "https://tu-dresden.de",
        images: ["images/TUDR1.jpg", "images/TUDR2.jpg", "images/TUDR3.jpg"]
    },
    leibniz: {
        title: "Leibniz Universität Hannover",
        location: "Hannover, Aşağı Saksonya",
        desc: "Gottfried Wilhelm Leibniz'in adını taşıyan üniversite; kuantum optiği, üretim teknolojileri ve yer bilimleri alanındaki araştırmalarıyla tanınır.",
        year: "1831",
        students: "28,000+",
        link: "https://www.uni-hannover.de",
        images: ["images/LEI1.jpg", "images/LEI2.jpg", "images/LEI3.jpg"]
    },
    kit: {
        title: "Karlsruhe Teknoloji Enstitüsü (KIT)",
        location: "Karlsruhe, Baden-Württemberg",
        desc: "Ulusal bir araştırma merkezi ile üniversitenin birleşimiyle kurulmuştur. Bilgisayar mühendisliği ve enerji teknolojilerinde Avrupa'nın en saygın kurumlarındandır.",
        year: "2009",
        students: "22,000+",
        link: "https://www.kit.edu",
        images: ["images/KIT1.jpg", "images/KIT2.jpg", "images/KIT3.jpg"]
    },
    "tu-clausthal": {
        title: "Clausthal Teknik Üniversitesi",
        location: "Clausthal-Zellerfeld, Aşağı Saksonya",
        desc: "Mühendislik, malzeme bilimi ve enerji araştırmalarında güçlü köklere sahiptir. Uluslararası öğrencilere sunduğu avantajlı şartlı kabul olanakları ve kendi bünyesindeki yoğun Almanca hazırlık kursları ile bilinir.",
        year: "1775",
        students: "4,000+",
        link: "https://www.tu-clausthal.de",
        images: ["images/tu-clausthal1.jpg", "images/tu-clausthal2.jpg", "images/tu-clausthal3.jpg"]
    },
    "uni-koeln": {
        title: "Köln Üniversitesi",
        location: "Köln, Kuzey Ren-Vestfalya",
        desc: "Almanya'nın en eski ve en büyük üniversitelerinden biridir. Özellikle hukuk, yönetim, iktisat, psikoloji og sosyal bilimler alanlarında küresel çapta yüksek bir saygınlığa sahiptir.",
        year: "1388",
        students: "50,000+",
        link: "https://www.uni-koeln.de",
        images: ["images/uni-koeln1.jpg", "images/uni-koeln2.jpg", "images/uni-koeln3.jpg"]
    },
    "uni-frankfurt": {
        title: "Frankfurt Goethe Üniversitesi",
        location: "Frankfurt am Main, Hessen",
        desc: "Avrupa'nın finans başkentinde yer alan üniversite ekonomi, felsefe ve siyaset biliminde öncüdür. Sosyal teorilerde bir döneme damga vuran ünlü 'Frankfurt Okulu' akımına ev sahipliği yapmıştır.",
        year: "1914",
        students: "45,000+",
        link: "https://www.uni-frankfurt.de",
        images: ["images/uni-frankfurt1.jpg", "images/uni-frankfurt2.jpg", "images/uni-frankfurt3.jpg"]
    },
    "uni-freiburg": {
        title: "Freiburg Üniversitesi",
        location: "Freiburg im Breisgau, Baden-Württemberg",
        desc: "Felsefe, beşeri bilimler, teoloji ve tıp alanlarında köklü bir akademik mirasa sahiptir. Beş asrı aşan tarihi ve Kara Ormanlar'ın kıyısındaki büyüleyici konumu ile tam bir klasik Alman öğrenci şehridir.",
        year: "1457",
        students: "24,000+",
        link: "https://www.uni-freiburg.de",
        images: ["images/uni-freiburg1.jpg", "images/uni-freiburg2.jpg", "images/uni-freiburg3.jpg"]
    },
    "uni-paderborn": {
        title: "Paderborn Üniversitesi",
        location: "Paderborn, Kuzey Ren-Vestfalya",
        desc: "Bilgisayar bilimleri, bilişim ve mühendislikte son derece aktiftir. Bünyesinde barındırdığı köklü dil hazırlık merkezi sayesinde, şartlı kabul ile Almanya'da dil eğitimi alıp lisansa başlamak isteyen öğrenciler için öncelikli tercihtir.",
        year: "1972",
        students: "20,000+",
        link: "https://www.uni-paderborn.de",
        images: ["images/uni-paderborn1.jpg", "images/uni-paderborn2.jpg", "images/uni-paderborn3.jpg"]
    },
    "uni-mannheim": {
        title: "Mannheim Üniversitesi",
        location: "Mannheim, Baden-Württemberg",
        desc: "Büyük bir kısmı tarihi Mannheim Sarayı'nın içerisinde yer alan üniversite; işletme (BWL), ekonomi, siyaset bilimi ve sosyolojide Almanya'nın 1 numaralı ekolüdür. Akademik çevrelerde 'Almanya'nın Harvard'ı' olarak nitelendirilir.",
        year: "1967",
        students: "12,000+",
        link: "https://www.uni-mannheim.de",
        images: ["images/uni-mannheim1.jpg", "images/uni-mannheim2.jpg", "images/uni-mannheim3.jpg"]
    }
};

// Global Slayt Değişkenleri
const modal = document.getElementById('uniModal');
const closeBtn = document.querySelector('.close-btn');
const sliderWrapper = document.getElementById('modalSliderWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImages = []; 
let currentSlideIndex = 0; 

// ==========================================
// 2. DETAY PENCERESİ (MODAL) VE SLIDER ETKİLEŞİMİ
// ==========================================
function openModal(uniId) {
    const uni = uniData[uniId];
    if (!uni) return;

    // Verileri arayüze basma
    if (modal.querySelector('h2')) modal.querySelector('h2').textContent = uni.title;
    if (modal.querySelector('.modal-desc')) modal.querySelector('.modal-desc').textContent = uni.desc;
    
    const yearBox = modal.querySelector('.year-box h3');
    const studentBox = modal.querySelector('.student-box h3');
    if (yearBox) yearBox.textContent = uni.year;
    if (studentBox) studentBox.textContent = uni.students;
    
    const modalLink = document.getElementById('modalLink');
    if (modalLink) modalLink.setAttribute('href', uni.link);

    // Dinamik Harita Yükleme (Düzeltildi)
    const modalMap = document.getElementById('modalMap');
    if (modalMap) {
        modalMap.src = `https://maps.google.com/maps?q=${encodeURIComponent(uni.title + " " + uni.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }

    // Resim havuzunu güncelleme ve çalıştırma
    currentImages = uni.images || []; 
    currentSlideIndex = 0; 
    renderSlides(); 

    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Sayfa kaymasını dondurur
}

function renderSlides() {
    if (!sliderWrapper) return;
    sliderWrapper.innerHTML = ''; 

    currentImages.forEach((imgUrl, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slider-slide');
        slideDiv.style.backgroundImage = `url('${imgUrl}')`;
        
        if (index === 0) {
            slideDiv.classList.add('active');
        }
        sliderWrapper.appendChild(slideDiv);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider-slide');
    if (slides.length <= 1) return; 

    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + direction + currentImages.length) % currentImages.length;
    slides[currentSlideIndex].classList.add('active');
}

// Olay Dinleyicileri Kurulumu
document.querySelectorAll('.uni-card').forEach(card => {
    card.addEventListener('click', () => {
        const uniId = card.getAttribute('data-id');
        if (uniId) openModal(uniId);
    });
});

if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

function closeModal() {
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = ''; // Kaymayı normale döndürür
    const modalMap = document.getElementById('modalMap');
    if (modalMap) modalMap.src = ''; // Harita sesini/işlemini durdurur
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// ==========================================
// 3. FORM GÖNDERİMİ VE SOĞUMA SÜRESİ (COOLDOWN)
// ==========================================
const evaluationForm = document.getElementById('evaluationForm');

if (evaluationForm) {
    evaluationForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const emailInput = document.getElementById('email') || evaluationForm.querySelector('input[type="email"]');
        if (!emailInput) return;
        
        const emailValue = emailInput.value.trim().toLowerCase();
        const lastSubmitTime = localStorage.getItem(`submit_time_${emailValue}`);
        const currentTime = Date.now();
        const cooldownPeriod = 10 * 60 * 1000; 

        if (lastSubmitTime) {
            const timePassed = currentTime - parseInt(lastSubmitTime);
            if (timePassed < cooldownPeriod) {
                const remainingMinutes = Math.ceil((cooldownPeriod - timePassed) / 60000);
                alert(`Bu e-posta adresi ile zaten bir başvuru yaptınız. Lütfen yeni bir gönderim için ${remainingMinutes} dakika bekleyin.`);
                return;
            }
        }

        const formData = new FormData(evaluationForm);

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

    // Anlık hata temizleme mekanizması
    evaluationForm.querySelectorAll('[required]').forEach(input => {
        input.addEventListener('input', () => { if (input.value.trim()) input.classList.remove('error'); });
        input.addEventListener('change', () => { if (input.value) input.classList.remove('error'); });
    });
}

// ==========================================
// 4. NOT HESAPLAMA MANTIĞI (BAVYERA FORMÜLÜ)
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
                if (germanGradeDisplay) germanGradeDisplay.innerText = "4.0+";
                if (resultTextDisplay) resultTextDisplay.innerText = "Girdiğiniz not minimum geçme sınırının altında kaldığı için Alman sisteminde başarısız kabul edilir.";
                return;
            }
        } else if (system === "100") {
            pMax = 100; pMin = 50;
            if (grade > 100) { alert("Notunuz 100'den büyük olamaz."); return; }
            if (grade < 50) {
                if (germanGradeDisplay) germanGradeDisplay.innerText = "4.0+";
                if (resultTextDisplay) resultTextDisplay.innerText = "Girdiğiniz not lise mezuniyet barajının altında kaldığı için Alman sisteminde başarısız kabul edilir.";
                return;
            }
        }

        let germanGrade = 1 + 3 * ((pMax - grade) / (pMax - pMin));
        germanGrade = germanGrade.toFixed(1);
        if (germanGradeDisplay) germanGradeDisplay.innerText = germanGrade;

        if (resultTextDisplay) {
            if (germanGrade >= 1.0 && germanGrade <= 1.5) {
                resultTextDisplay.innerText = "Harika bir not! Almanya'daki prestijli teknik üniversitelerden kabul alma şansınız yüksek.";
            } else if (germanGrade > 1.5 && germanGrade <= 2.5) {
                resultTextDisplay.innerText = "İyi bir derece. Birçok Alman devlet üniversitesinin kabul şartlarını karşılıyorsunuz.";
            } else if (germanGrade > 2.5 && germanGrade <= 3.5) {
                resultTextDisplay.innerText = "Orta düzey bir not. Şartlı kabul sunan üniversiteler üzerinden şansınızı deneyebiliriz.";
            } else {
                resultTextDisplay.innerText = "Sınırda bir not. Almanya'da hazırlık eğitimi (Studienkolleg) seçeneğini değerlendirmeniz gerekebilir.";
            }
        }
    });
}

// Koşullu Görünürlük Düzenlemesi
const eduStatusSelect = document.getElementById('eduStatus');
const uniGradeGroup = document.getElementById('uniGradeGroup');
const uniGradeInput = document.getElementById('uniGrade');

if (eduStatusSelect && uniGradeGroup && uniGradeInput) {
    eduStatusSelect.addEventListener('change', function() {
        const secilenDeger = eduStatusSelect.value;
        if (secilenDeger === "Üniversite Öğrencisi" || secilenDeger === "Üniversite Mezunu") {
            uniGradeGroup.style.display = 'block';
            uniGradeInput.setAttribute('required', 'true');
        } else {
            uniGradeGroup.style.display = 'none';
            uniGradeInput.removeAttribute('required');
            uniGradeInput.value = '';
            uniGradeInput.classList.remove('error');
        }
    });
}

// ==========================================
// 5. MOBİL MENÜ (HAMBURGER) VE YUKARI ÇIK SİSTEMİ
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// 6. ANA YATAY SLIDER (2 KART BİRDEN GEÇİŞ)
// ==========================================
function slideGrid(direction) {
    const grid = document.querySelector('.uni-grid');
    if (!grid) return;

    const firstCard = grid.querySelector('.uni-card');
    if (!firstCard) return;

    const cardWidth = firstCard.clientWidth; 
    const gap = 20; 

    const scrollAmount = (cardWidth + gap) * 2; 
    
    grid.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
