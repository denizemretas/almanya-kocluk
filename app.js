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
// 2. MODAL VE SLIDER (GALERİ) MANTIĞI
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

        // Form gönderim olayı (Submit Event)
        evaluationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Sayfanın yenilenmesini engeller
        
            // 1. E-posta input alanını ve değerini alıyoruz
            const emailInput = evaluationForm.querySelector('input[type="email"]') || document.getElementById('email');
            if (!emailInput) return;
            
            const emailValue = emailInput.value.trim().toLowerCase();
        
            // 2. Zaman Kontrolü (10 Dakika Cooldown)
            const lastSubmitTime = localStorage.getItem(`submit_time_${emailValue}`);
            const currentTime = Date.now();
            const cooldownPeriod = 10 * 60 * 1000; // Milisaniye cinsinden 10 dakika
        
            if (lastSubmitTime) {
                const timePassed = currentTime - parseInt(lastSubmitTime);
                
                if (timePassed < cooldownPeriod) {
                    const remainingMinutes = Math.ceil((cooldownPeriod - timePassed) / 60000);
                    alert(`Bu e-posta adresi ile zaten bir başvuru yaptınız. Lütfen yeni bir gönderim için ${remainingMinutes} dakika bekleyin.`);
                    return; // Kodun aşağıya devam etmesini ve formun gönderilmesini engeller
                }
            }
        
            // 3. Form verilerini hazırlama (Eğer süre sınırı aşılmışsa veya ilk gönderimse)
            const formData = new FormData(evaluationForm);
        
            // 4. Web3Forms API'sine Gönderim
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async response => {
                const result = await response.json();
                
                if (response.ok && result.success) {
                    // BAŞARILI GÖNDERİM: E-posta adresini ve şu anki zamanı hafızaya kaydet
                    localStorage.setItem(`submit_time_${emailValue}`, Date.now());
        
                    evaluationForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                } else {
                    alert("Form iletilemedi: " + (result.message || "Lütfen tekrar deneyin."));
                }
            })
            .catch(error => {
                console.error("Hata:", error);
                alert("Bağlantı hatası oluştu.");
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
