// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Cambiar ícono
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-2xl';
            } else {
                icon.className = 'fas fa-times text-2xl';
            }
        });
    }
    
    // Cerrar menú al hacer clic en enlace móvil
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (mobileMenuButton) {
                    mobileMenuButton.querySelector('i').className = 'fas fa-bars text-2xl';
                }
            }
        });
    });
    
    // Animación de elementos al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                setTimeout(() => {
                    element.classList.add('fade-in-up');
                }, index * 100);
            }
        });
    }
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Contador animado
    const projectsCounter = document.getElementById('projectsCounter');
    if (projectsCounter) {
        let count = 0;
        const target = 250;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const updateCounter = () => {
                    if (count < target) {
                        count += increment;
                        projectsCounter.textContent = Math.floor(count) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        projectsCounter.textContent = target + '+';
                    }
                };
                updateCounter();
                observer.unobserve(projectsCounter);
            }
        });
        
        observer.observe(projectsCounter);
    }
    
    // Smooth scroll para anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.startsWith('#!')) return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto (si existe en la página)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const telefono = document.getElementById('telefono');
            const mensaje = document.getElementById('mensaje');
            
            if (!nombre.value || !email.value || !telefono.value || !mensaje.value) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Por favor, introduce un email válido.');
                return;
            }
            
            // Mostrar mensaje de éxito
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío (para Formspree, esto se reemplaza con el envío real)
            setTimeout(() => {
                alert('¡Gracias! Tu mensaje ha sido enviado. Te contactaremos en 24-48 horas.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});