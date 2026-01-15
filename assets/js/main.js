// ============================================
// MOBILE MENU
// ============================================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        // Cambiar icono del menú
        menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });

    // Cerrar menú al hacer click en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.textContent = '☰';
        });
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Añadir sombra al hacer scroll
    if (currentScroll > 50) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL PARA ANCLAS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ANIMACIONES ON SCROLL (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            // Opcional: dejar de observar después de animar
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos los elementos con clase 'observe'
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.observe').forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// BOTÓN SCROLL TO TOP
// ============================================
// Crear botón dinámicamente
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'fixed bottom-28 right-4 md:bottom-24 md:right-6 bg-secondary text-white w-12 h-12 rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300 hover:bg-secondary-dark z-[9999]';
scrollTopBtn.setAttribute('aria-label', 'Volver arriba');
scrollTopBtn.style.fontSize = '24px';
document.body.appendChild(scrollTopBtn);

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100');
    } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100');
    }
});

// Scroll to top al hacer click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// ANIMACIÓN DE NÚMEROS (Counter Animation)
// ============================================
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = element.textContent.replace(/\d+/, target);
            clearInterval(timer);
        } else {
            element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
        }
    }, 16);
}

// Animar contadores cuando sean visibles
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.text-5xl');
            counters.forEach(counter => {
                if (!counter.dataset.animated) {
                    animateCounter(counter);
                    counter.dataset.animated = 'true';
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observar sección de estadísticas
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.grid.md\\:grid-cols-4');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
});

// ============================================
// LAZY LOADING DE IMÁGENES
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    // El navegador soporta lazy loading nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback para navegadores antiguos
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

console.log('✅ ReformasPro - JavaScript cargado correctamente');
