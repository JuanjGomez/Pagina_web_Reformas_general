// Header HTML que se reutiliza en todas las páginas
const headerHTML = `
<header class="header-blur fixed w-full top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="text-2xl font-bold text-gradient">
            ReformasPro
        </div>
        
        <nav class="hidden md:flex space-x-6">
            <a href="/index.html" class="nav-link hover:text-primary transition-colors">Inicio</a>
            <a href="/pages/servicios.html" class="nav-link hover:text-primary transition-colors">Servicios</a>
            <a href="/pages/sobre-nosotros.html" class="nav-link hover:text-primary transition-colors">Sobre Nosotros</a>
            <a href="/pages/contacto.html" class="nav-link hover:text-primary transition-colors">Contacto</a>
        </nav>
        
        <button id="menu-btn" class="md:hidden text-2xl">☰</button>
    </div>
    
    <div id="mobile-menu" class="hidden md:hidden bg-white px-4 pb-4">
        <a href="/index.html" class="block py-2">Inicio</a>
        <a href="/pages/servicios.html" class="block py-2">Servicios</a>
        <a href="/pages/sobre-nosotros.html" class="block py-2">Sobre Nosotros</a>
        <a href="/pages/contacto.html" class="block py-2">Contacto</a>
    </div>
</header>
`;

// Insertar header al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});