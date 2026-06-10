// ==========================================
// 1. ÜNİVERSİTE VERİ HAVUZU (OBJECT DATA)
// ==========================================
// ==========================================
// 1. ÜNİVERSİTE VERİ HAVUZU (OBJECT DATA) - GÜNCEL HARİTALAR
// ==========================================
const uniData = {
    tum: {
        title: "Münih Teknik Üniversitesi (TUM)",
        location: "Münih, Bavyera",
        desc: "Almanya'nın en prestijli teknik üniversitesidir. Nobel ödüllü birçok bilim insanı yetiştirmiştir. Mühendislik fakülteleri dünya çapında lider konumdadır ve sanayi devleri ile doğrudan ortak projeler yürütmektedir.",
        year: "1868",
        students: "50,000+",
        link: "https://www.tum.de",
        images: ["images/TUM1.jpg", "images/TUM2.jpg", "images/TUM3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.115858055416!2d11.565434315642302!3d48.1496181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75ebe77e114f%3A0x6a0c0cbdf5780d3b!2sTechnical%20University%20of%20Munich!5e0!3m2!1str!2sde!4v1650000000000!5m2!1str!2sde"
    },
    rwth: {
        title: "RWTH Aachen Üniversitesi",
        location: "Aachen, Kuzey Ren-Vestfalya",
        desc: "Avrupa'nın en büyük teknik üniversitelerinden biridir. Özellikle Makine Mühendisliği ve Bilgisayar Bilimleri alanlarında Almanya'nın bir numarası olarak kabul edilir. Aachen şehri tamamen bir öğrenci kentine dönüşmüştür.",
        year: "1870",
        students: "47,000+",
        link: "https://www.rwth-aachen.de",
        images: ["images/RWTH1.jpg", "images/RWTH2.jpg", "images/RWTH3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.9168541940954!2d6.077844015736636!3d50.77785367952136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c099687e3f28cf%3A0x1d4a04d0ad8c7a7b!2sRWTH%20Aachen%20University!5e0!3m2!1str!2sde!4v1650000000001!5m2!1str!2sde"
    },
    heidelberg: {
        title: "Heidelberg Üniversitesi",
        location: "Heidelberg, Baden-Württemberg",
        desc: "Almanya'nın en eski ve köklü üniversitesidir. Tıp, Astronomi, Psikoloji ve Felsefe alanlarında küresel bir üne sahiptir. Tarihi dokusu korunan kampüsüyle klasik Alman akademik kültürü sunar.",
        year: "1386",
        students: "29,000+",
        link: "https://www.uni-heidelberg.de",
        images: ["images/HEU1.jpg", "images/HEU2.jpg", "images/HEU3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.68235287411!2d8.704944315688534!3d49.410180679345264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c104dc404f2d%3A0x6fb2bbcdbe9b053c!2sHeidelberg%20University!5e0!3m2!1str!2sde!4v1650000000008!5m2!1str!2sde"
    },
    stuttgart: {
        title: "Stuttgart Üniversitesi",
        location: "Stuttgart, Baden-Württemberg",
        desc: "Almanya'nın önde gelen teknik üniversitelerinden biridir. Makine mühendisliği, otomotiv, havacılık ve uzay teknolojileri ile bilgisayar bilimleri alanlarında güçlü bir akademik odağa sahiptir. Endüstri iş birlikleriyle desteklenen araştırma odaklı bir eğitim sunar.",
        year: "1829",
        students: "22,000+",
        link: "https://www.uni-stuttgart.de",
        images: ["images/STU1.jpg", "images/STU2.jpg", "images/STU3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.22235287411!2d9.172944315688534!3d48.77518067934526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db4ca583cd1b%3A0x42f0e0d50044000!2sUniversity%20of%20Stuttgart!5e0!3m2!1str!2sde!4v1650000000009!5m2!1str!2sde"
    },
    berlin: {
        title: "Berlin Teknik Üniversitesi (TU Berlin)",
        location: "Berlin",
        desc: "Almanya'nın en büyük ve prestijli teknik üniversitelerinden biridir. Mühendislik ve bilgisayar bilimleri alanlarında dünya çapında bir üne sahiptir.",
        year: "1879",
        students: "35,000+",
        link: "https://www.tu.berlin",
        images: ["images/TUB1.jpg", "images/TUB2.jpg", "images/TUB3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.115858055416!2d13.323434315642302!3d52.5116181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8511e4f4cbb39%3A0xbb1f7cb87a036fb3!2sTechnical%20University%20of%20Berlin!5e0!3m2!1str!2sde!4v1650000000010!5m2!1str!2sde"
    },
    braunschweig: {
        title: "TU Braunschweig",
        location: "Braunschweig, Aşağı Saksonya",
        desc: "Almanya'nın en eski teknik üniversitesidir. Özellikle otomotiv mühendisliği, havacılık ve mobilite araştırmalarında lider konumdadır.",
        year: "1745",
        students: "16,800+",
        link: "https://www.tu-braunschweig.de",
        images: ["images/TUBR1.jpg", "images/TUBR2.jpg", "images/TUBR3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.115858055416!2d10.528434315642302!3d52.2736181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0492daea2e071%3A0xb36ef0185e7b212f!2sTU%20Braunschweig!5e0!3m2!1str!2sde!4v1650000000011!5m2!1str!2sde"
    },
    darmstadt: {
        title: "TU Darmstadt",
        location: "Darmstadt, Hessen",
        desc: "Siber güvenlik, yapay zekâ ve elektrik-elektronik mühendisliğinde çok güçlüdür. Almanya'da bağımsız bir teknik üniversite olarak kurulan ilk kurumdur.",
        year: "1877",
        students: "25,000+",
        link: "https://www.tu-darmstadt.de",
        images: ["images/TUD1.jpg", "images/TUD2.jpg", "images/TUD3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.115858055416!2d8.657434315642302!3d49.8756181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd707af4628db9%3A0x633513a960df768f!2sTU%20Darmstadt!5e0!3m2!1str!2sde!4v1650000000012!5m2!1str!2sde"
    },
    dresden: {
        title: "TU Dresden",
        location: "Dresden, Saksonya",
        desc: "Almanya'nın 'Mükemmeliyet Üniversitesi' unvanına sahip az sayıdaki teknik okulundan biridir. Mikroelektronik ve bilişim teknolojilerinde öncüdür.",
        year: "1828",
        students: "30,000+",
        link: "https://tu-dresden.de",
        images: ["images/TUDR1.jpg", "images/TUDR2.jpg", "images/TUDR3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.115858055416!2d13.727434315642302!3d51.0286181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf6e2467d581%3A0x272cf3c959736dbb!2sTU%20Dresden!5e0!3m2!1str!2sde!4v1650000000013!5m2!1str!2sde"
    },
    leibniz: {
        title: "Leibniz Universität Hannover",
        location: "Hannover, Aşağı Saksonya",
        desc: "Gottfried Wilhelm Leibniz'in adını taşıyan üniversite; kuantum optiği, üretim teknolojileri ve yer bilimleri alanındaki araştırmalarıyla tanınır.",
        year: "1831",
        students: "28,000+",
        link: "https://www.uni-hannover.de",
        images: ["images/LEI1.jpg", "images/LEI2.jpg", "images/LEI3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.115858055416!2d9.721434315642302!3d52.3826181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b074a3ca043a13%3A0x633513a960df768f!2sLeibniz%20University%20Hannover!5e0!3m2!1str!2sde!4v1650000000014!5m2!1str!2sde"
    },
    kit: {
        title: "Karlsruhe Teknoloji Enstitüsü (KIT)",
        location: "Karlsruhe, Baden-Württemberg",
        desc: "Ulusal bir araştırma merkezi ile üniversitenin birleşimiyle kurulmuştur. Bilgisayar mühendisliği ve enerji teknolojilerinde Avrupa'nın en saygın kurumlarındandır.",
        year: "2009",
        students: "22,000+",
        link: "https://www.kit.edu",
        images: ["images/KIT1.jpg", "images/KIT2.jpg", "images/KIT3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.115858055416!2d8.411434315642302!3d49.0116181792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479979038e2d4cf7%3A0x42f0e0d50044000!2sKarlsruhe%20Institute%20of%20Technology!5e0!3m2!1str!2sde!4v1650000000015!5m2!1str!2sde"
    },
    "tu-clausthal": {
        title: "Clausthal Teknik Üniversitesi",
        location: "Clausthal-Zellerfeld, Aşağı Saksonya",
        desc: "Mühendislik, malzeme bilimi ve enerji araştırmalarında güçlü köklere sahiptir. Uluslararası öğrencilere sunduğu avantajlı şartlı kabul olanakları ve anlaşmalı olduğu yoğun Almanca hazırlık kursları ile bilinir.",
        year: "1775",
        students: "4,000+",
        link: "https://www.tu-clausthal.de",
        images: ["images/tu-clausthal1.jpg", "images/tu-clausthal2.jpg", "images/tu-clausthal3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9298418080516!2d10.337775915762886!3d51.80562697968565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5223631f498cb%3A0xda5eb7a052865955!2sClausthal%20University%20of%20Technology!5e0!3m2!1str!2sde!4v1650000000002!5m2!1str!2sde"
    },
    "uni-koeln": {
        title: "Köln Üniversitesi",
        location: "Köln, Kuzey Ren-Vestfalya",
        desc: "Almanya'nın en eski ve en büyük üniversitelerinden biridir. Özellikle hukuk, yönetim, iktisat, psikoloji ve sosyal bilimler alanlarında küresel çapta yüksek bir saygınlığa sahiptir.",
        year: "1388",
        students: "50,000+",
        link: "https://www.uni-koeln.de",
        images: ["images/uni-koeln1.jpg", "images/uni-koeln2.jpg", "images/uni-koeln3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.864700342938!2d6.926521315742055!3d50.92795177955896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2500fa822601%3A0x7d8a04d0ad8c7a7b!2sUniversity%20of%20Cologne!5e0!3m2!1str!2sde!4v1650000000003!5m2!1str!2sde"
    },
    "uni-frankfurt": {
        title: "Frankfurt Goethe Üniversitesi",
        location: "Frankfurt am Main, Hessen",
        desc: "Avrupa'nın finans başkentinde yer alan üniversite ekonomi, felsefe ve siyaset biliminde öncüdür. Sosyal teorilerde bir döneme damga vuran 'Frankfurt Okulu' akımına ev sahipliği yapmıştır.",
        year: "1914",
        students: "45,000+",
        link: "https://www.uni-frankfurt.de",
        images: ["images/uni-frankfurt1.jpg", "images/uni-frankfurt2.jpg", "images/uni-frankfurt3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.77123451904!2d8.665321315713215!3d50.12723167943216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0955fa822601%3A0x7d8a04d0ad8c7a7b!2sGoethe%20University%20Frankfurt!5e0!3m2!1str!2sde!4v1650000000004!5m2!1str!2sde"
    },
    "uni-freiburg": {
        title: "Freiburg Üniversitesi",
        location: "Freiburg im Breisgau, Baden-Württemberg",
        desc: "Felsefe, beşeri bilimler, teoloji og tıp alanlarında köklü bir akademik mirasa sahiptir. Beş asrı aşan tarihi ve Kara Ormanlar'ın kıyısındaki konumu ile tam bir klasik Alman öğrenci şehridir.",
        year: "1457",
        students: "24,000+",
        link: "https://www.uni-freiburg.de",
        images: ["images/uni-freiburg1.jpg", "images/uni-freiburg2.jpg", "images/uni-freiburg3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.7420556535552!2d7.84666571581452!3d47.994519679210085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b5143a598c9%3A0x5efcd33eb22f9d5a!2sAlbert-Ludwigs-Universit%C3%A4t%20Freiburg!5e0!3m2!1str!2sde!4v1714560000000!5m2!1str!2sde"
    },
    "uni-paderborn": {
        title: "Paderborn Üniversitesi",
        location: "Paderborn, Kuzey Ren-Vestfalya",
        desc: "Bilgisayar bilimleri, bilişim ve mühendislikte son derece aktiftir. Bünyesinde barındırdığı köklü dil hazırlık merkezi sayesinde, şartlı kabul ile Almanya'da dil eğitimi alıp lisansa başlamak isteyen öğrenciler için öncelikli tercihtir.",
        year: "1972",
        students: "20,000+",
        link: "https://www.uni-paderborn.de",
        images: ["images/uni-paderborn1.jpg", "images/uni-paderborn2.jpg", "images/uni-paderborn3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.564700342938!2d8.770521315742055!3d51.70825177955896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba4bcf1b5fa82d%3A0xbcf2bbcdbe9b053c!2sPaderborn%20University!5e0!3m2!1str!2sde!4v1714560000001!5m2!1str!2sde"
    },
    "uni-mannheim": {
        title: "Mannheim Üniversitesi",
        location: "Mannheim, Baden-Württemberg",
        desc: "Büyük bir kısmı tarihi Mannheim Sarayı'nın içerisinde yer alan üniversite; işletme (BWL), ekonomi, siyaset bilimi ve sosyolojide Almanya'nın bir numaralı ekolüdür.",
        year: "1967",
        students: "12,000+",
        link: "https://www.uni-mannheim.de",
        images: ["images/uni-mannheim1.jpg", "images/uni-mannheim2.jpg", "images/uni-mannheim3.jpg"],
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.564700342938!2d8.460521315742055!3d49.48325177955896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc26ef822601%3A0x7d8a04d0ad8c7a7b!2sUniversity%20of%20Mannheim!5e0!3m2!1str!2sde!4v1650000000007!5m2!1str!2sde"
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
    if (modalMap && uni.map) {
    modalMap.src = uni.map; // Doğrudan nokta atışı adresi içeren haritayı yükler
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
const emailInput = document.getElementById('email') || (evaluationForm ? evaluationForm.querySelector('input[type="email"]') : null);
const emailConfirmInput = document.getElementById('emailConfirm');
const emailConfirmGroup = document.getElementById('emailConfirmGroup');
const matchMessage = document.getElementById('emailMatchMessage');

// 1. İlk e-posta alanına veri girildiğinde ikinci kutuyu göster/gizle
if (emailInput && emailConfirmGroup) {
    emailInput.addEventListener('input', function() {
        const emailValue = this.value.trim();
        if (emailValue.includes('@') && emailValue.includes('.')) {
            emailConfirmGroup.style.display = 'block';
        } else {
            emailConfirmGroup.style.display = 'none';
            if (emailConfirmInput) emailConfirmInput.value = '';
            if (matchMessage) matchMessage.style.display = 'none';
        }
    });
}

// 2. Canlı uyuşmazlık kontrolü ve alt yazı geri bildirimi
function checkEmailMatch() {
    if (!emailInput || !emailConfirmInput || !matchMessage) return;

    const email = emailInput.value.trim().toLowerCase();
    const confirmEmail = emailConfirmInput.value.trim().toLowerCase();

    if (!confirmEmail) {
        matchMessage.style.display = 'none';
        emailConfirmInput.classList.remove('error');
        return;
    }

    if (email === confirmEmail) {
        matchMessage.textContent = '✓ E-posta adresleri eşleşti.';
        matchMessage.style.color = '#059669';
        matchMessage.style.display = 'block';
        emailConfirmInput.classList.remove('error');
    } else {
        matchMessage.textContent = '✗ E-posta adresleri birbiriyle uyuşmuyor.';
        matchMessage.style.color = '#DC2626';
        matchMessage.style.display = 'block';
    }
}

if (emailConfirmInput) emailConfirmInput.addEventListener('input', checkEmailMatch);
if (emailInput) emailInput.addEventListener('input', checkEmailMatch);

// 3. Formun Gönderilme Anı Kontrolü
// 3. Formun Gönderilme Anı Kontrolü
if (evaluationForm) {
    evaluationForm.addEventListener('submit', function(e) {
        
        // [KESİN ÇÖZÜM]: Sayfanın en başa atmasını ilk satırda bloke ediyoruz
        e.preventDefault(); 

        // Sadece ekranda GÖRÜNÜR olan zorunlu alanların (İsim, Seviye vb.) doluluğunu kontrol eder
        // Gizli olan alanlar boş olsa bile formu kilitlemez
        let isFormValid = true;
        const requiredInputs = evaluationForm.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            // Eğer alan görünür durumdaysa ve içi boşsa
            if (input.offsetParent !== null && !input.value.trim()) {
                input.classList.add('error');
                isFormValid = false;
            }
        });

        // Eğer görünür zorunlu alanlardan biri bile boşsa işlemi burada kes, alert ver
        if (!isFormValid) {
            alert('Lütfen formdaki zorunlu alanları eksiksiz doldurunuz.');
            return;
        }

        if (!emailInput) {
            alert("Sistemsel bir hata oluştu: E-posta alanı bulunamadı.");
            return;
        }

        const emailValue = emailInput.value.trim().toLowerCase();
        const confirmEmailValue = emailConfirmInput ? emailConfirmInput.value.trim().toLowerCase() : '';

        // İkinci e-posta alanı görünür durumdayken boş bırakıldıysa engelle
        if (emailConfirmGroup && emailConfirmGroup.style.display !== 'none' && !confirmEmailValue) {
            if (emailConfirmInput) emailConfirmInput.classList.add('error');
            alert('Lütfen e-posta adresinizi doğrulamak için tekrar giriniz.');
            if (emailConfirmInput) emailConfirmInput.focus();
            return;
        }

        // --- MEVCUT SOĞUMA SÜRESİ (COOLDOWN) KONTROLÜ ---
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

        // E-posta uyuşmazlık kontrolü
        if (emailConfirmGroup && emailConfirmGroup.style.display !== 'none' && emailValue !== confirmEmailValue) {
            if (emailConfirmInput) emailConfirmInput.classList.add('error');
            alert('Girdiğiniz e-posta adresleri uyuşmuyor. Lütfen kontrol edin.');
            if (emailConfirmInput) emailConfirmInput.focus();
            return;
        }

        // --- SAYISAL ARALIK VE TELEFON KONTROLLERİ ---
        const liseGradeInput = document.getElementById('liseGrade');
        if (liseGradeInput) {
            const liseGrade = parseFloat(liseGradeInput.value);
            if (isNaN(liseGrade) || liseGrade < 0 || liseGrade > 100) {
                liseGradeInput.classList.add('error');
                alert('Lütfen geçerli bir lise not ortalaması giriniz (0 - 100 arası).');
                liseGradeInput.focus();
                return;
            }
        }

        const uniGradeInput = document.getElementById('uniGrade');
        const uniGradeGroup = document.getElementById('uniGradeGroup');
        if (uniGradeInput && uniGradeGroup && uniGradeGroup.style.display !== 'none') {
            const uniGrade = parseFloat(uniGradeInput.value);
            if (isNaN(uniGrade) || uniGrade < 0 || uniGrade > 4) {
                uniGradeInput.classList.add('error');
                alert('Lütfen geçerli bir üniversite not ortalaması giriniz (0.00 - 4.00 arası).');
                uniGradeInput.focus();
                return;
            }
        }

        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            const phoneValue = phoneInput.value.trim();
            if (phoneValue.length < 10) {
                phoneInput.classList.add('error');
                alert('Lütfen geçerli bir telefon numarası giriniz (En az 10 haneli olmalıdır).');
                phoneInput.focus();
                return;
            }
        }

        // Tüm aşamalar geçildiyse formu gönder
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
// ==========================================
// KVKK MODAL KONTROL MEKANİZMASI 
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const kvkkLink = document.getElementById('kvkkLink');
    const kvkkModal = document.getElementById('kvkkModal');
    const closeKvkk = document.getElementById('closeKvkk');
    const btnConfirmKvkk = document.getElementById('btnConfirmKvkk');

    // Modalı Açma Fonksiyonu
    if (kvkkLink && kvkkModal) {
        kvkkLink.addEventListener('click', function(e) {
            e.preventDefault(); // Sayfanın yukarı kaymasını kesin olarak engeller
            kvkkModal.classList.add('open');
        });
    }

    // Modalı Kapatma Fonksiyonu
    function handleCloseKvkk() {
        if (kvkkModal) {
            kvkkModal.classList.remove('open');
        }
    }

    // Kapatma tetikleyicileri
    if (closeKvkk) closeKvkk.addEventListener('click', handleCloseKvkk);
    if (btnConfirmKvkk) btnConfirmKvkk.addEventListener('click', handleCloseKvkk);

    // Kullanıcı açılır pencerenin dışındaki boşluğa tıklarsa kapat
    window.addEventListener('click', function(e) {
        if (e.target === kvkkModal) {
            handleCloseKvkk();
        }
    });
});
