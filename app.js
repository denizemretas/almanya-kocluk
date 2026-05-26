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
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.br.de%2Ffernsehen%2Fard-alpha%2Fsendungen%2Fcampus%2Ftu-muenchen-108~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg%3Fversion%3D9bb09&sp=1779820214Ta44676b6df50d83623aa815066073556e1e2c84b940bf2301b0b87b363374dd4",
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.muenchen.travel%2Fvar%2Fger_muc%2Fstorage%2Fimages%2F_aliases%2Fstage_large%2F4%2F4%2F1%2F1%2F2181144-1-ger-DE%2Fmarienplatz-D-2687s-v1-foto-redline.jpg&sp=1779820263T0e314923b3785e3cfcc8fb0a61d038396bb8be03272b7b867d825a6f6b49688a"
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
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.academy.rwth-aachen.de%2Fassets%2Fimages%2F1%2F%25C2%25A9IA-super-c-2022-rwth-international-academy-01-a63aa9d4.jpg&sp=1779820295T2f8fc8043988df9c23fe65d62ef47068f8ffa9e40a53d5ba842be7c6436a8f07",
            "https://www.startpage.com/av/proxy-image?piurl=http%3A%2F%2Fblog.michaelrasche.com%2Fwp-content%2Fuploads%2F2017%2F03%2FCARL_Aachen_1043-b.jpg&sp=1779820396T452fb4d3414be451f0e67e3d053e289469b1216ea320dbd23c4f88e411c0854a",
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg.fotocommunity.com%2Faachener-dom-bei-nacht-im-winter-cba2e3d4-d332-40d1-afc1-294cd4e8ed12.jpg%3Fheight%3D1080&sp=1779820420T4f18cd5c61d68961cb5303e3c51b008af0a8a8a414dd689d6bcc154bb215ca0d"
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
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwann-wurde.de%2Fwp-content%2Fuploads%2F2023%2F03%2FRuprecht-Karls-Universitaet-Heidelberg-hier-die-Unibibliothek-gilt-als-aelteste-Hochschule-in-Deutschland.-Foto-%25C2%25A9-eyetronic-stock-adobe-scaled.jpeg&sp=1779820478T119fcaf3eab958573b1e1c9f8864d3c0beb147bc4bcd22d85457954fba8b7cff",
            "https://www.uni-heidelberg.de/md/zentral/alte_universitaet_460x280.jpg",
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Felviajerofeliz.com%2Fwp-content%2Fuploads%2F2020%2F08%2FQue-ver-en-Heidelberg.jpg&sp=1779820592T088be5615322fdbfb74c83837b94a1a856f48b03404cb8b5394b48979873956f"
        ]
    }
};

// ==========================================
// 2. MODAL VE SLIDER (GALERİ) MANTIĞI
// ==========================================

const modal = document.getElementById('uniModal');
const closeBtn = document.querySelector('.close-btn');
const bottomCloseBtn = document.getElementById('bottomCloseBtn');

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

// Slayt Değiştirme Fonksiyonu (Sınıf Yönetimi)
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

// Olay Dinleyicileri (Event Listeners)
document.querySelectorAll('.uni-card').forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.getAttribute('data-id'));
    });
});

// Ok tetikleyicileri
prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

// Kapatma tetikleyicileri
if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
if (bottomCloseBtn) bottomCloseBtn.addEventListener('click', () => modal.classList.remove('open'));

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
});

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
