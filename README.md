# 🏗️ ReformasPro - Sitio Web Profesional

Sitio web moderno y profesional para empresa de reformas en Barcelona.

## ✨ Características

- ✅ Diseño moderno y responsive
- ✅ Optimizado para SEO local (Barcelona)
- ✅ Animaciones suaves y micro-interacciones
- ✅ Botón WhatsApp flotante
- ✅ Formulario de contacto funcional
- ✅ Testimonios de clientes
- ✅ Estadísticas de la empresa
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Structured Data para Google
- ✅ Optimizado para Netlify

## 🚀 Despliegue en Netlify

### Opción 1: Desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/reformas-web.git
   git push -u origin main
   ```

2. **Conecta con Netlify:**
   - Ve a [netlify.com](https://netlify.com) y crea una cuenta
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub y autoriza
   - Elige tu repositorio `reformas-web`
   - Configuración de build:
     - **Build command:** (dejar vacío)
     - **Publish directory:** `.` (punto)
   - Click en "Deploy site"

3. **Configurar dominio personalizado (opcional):**
   - En el dashboard de Netlify, ve a "Domain settings"
   - Click en "Add custom domain"
   - Sigue las instrucciones para configurar tu dominio

### Opción 2: Arrastrar y Soltar

1. Ve a [netlify.com/drop](https://netlify.com/drop)
2. Arrastra la carpeta completa del proyecto
3. ¡Listo! Tu sitio estará en línea en segundos

## 📁 Estructura del Proyecto

```
reformas-web/
├── index.html              # Página principal
├── pages/
│   ├── servicios.html      # Página de servicios
│   ├── sobre-nosotros.html # Sobre nosotros
│   └── contacto.html       # Contacto
├── assets/
│   ├── css/
│   │   └── custom.css      # Estilos personalizados
│   ├── js/
│   │   ├── main.js         # JavaScript principal
│   │   └── components.js   # Componentes reutilizables
│   └── img/                # Imágenes (vacío por ahora)
├── netlify.toml            # Configuración de Netlify
├── sitemap.xml             # Mapa del sitio para SEO
├── robots.txt              # Instrucciones para crawlers
└── README.md               # Este archivo
```

## 🎨 Personalización

### Cambiar Colores

Edita las variables en `assets/css/custom.css`:

```css
:root {
  --primary: #FF6B35;        /* Color principal */
  --primary-dark: #E85A28;   
  --secondary: #1E3A8A;      /* Color secundario */
  --accent: #10B981;         /* Color de acento */
}
```

### Cambiar Información de Contacto

1. **Teléfono:** Busca `600 000 000` y reemplaza en todos los archivos
2. **Email:** Busca `info@reformaspro.com` y reemplaza
3. **WhatsApp:** En el botón flotante, cambia el número en `wa.me/34600000000`

### Cambiar Contenido

- **Testimonios:** Edita la sección de testimonios en `index.html` (líneas ~216-263)
- **Estadísticas:** Modifica los números en la sección de estadísticas (líneas ~105-125)
- **Servicios:** Actualiza las cards de servicios según tus necesidades

## 📧 Configurar Formulario de Contacto

El formulario usa [Formspree](https://formspree.io/). Para configurarlo:

1. Ve a [formspree.io](https://formspree.io) y crea una cuenta
2. Crea un nuevo formulario
3. Copia el endpoint que te dan
4. En `pages/contacto.html`, reemplaza:
   ```html
   action="https://formspree.io/f/xnjjqydl"
   ```
   con tu endpoint

## 🔍 SEO

### Actualizar URLs

Cuando tengas tu dominio final, busca y reemplaza:
- `https://reformaspro.netlify.app/` → `https://tudominio.com/`

En estos archivos:
- `index.html` (meta tags)
- `sitemap.xml`
- `robots.txt`

### Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade tu sitio
3. Verifica la propiedad
4. Envía el sitemap: `https://tudominio.com/sitemap.xml`

### Google My Business

Para aparecer en Google Maps:
1. Crea un perfil en [Google My Business](https://business.google.com)
2. Verifica tu ubicación
3. Añade fotos y actualiza información

## 📱 Redes Sociales

Actualiza los enlaces en el footer (`index.html` líneas ~295-305):

```html
<a href="https://facebook.com/tu-pagina">Facebook</a>
<a href="https://instagram.com/tu-perfil">Instagram</a>
<a href="https://linkedin.com/company/tu-empresa">LinkedIn</a>
```

## 🖼️ Imágenes

Para mejor rendimiento, añade imágenes optimizadas en `assets/img/`:

- **og-image.jpg** (1200x630px) - Para compartir en redes sociales
- **logo.png** - Logo de la empresa
- **proyectos/** - Fotos de proyectos realizados

Herramientas recomendadas:
- [TinyPNG](https://tinypng.com/) - Comprimir imágenes
- [Squoosh](https://squoosh.app/) - Convertir a WebP

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **TailwindCSS** - Framework CSS utility-first
- **CSS Personalizado** - Componentes y animaciones
- **Vanilla JavaScript** - Interactividad
- **Schema.org** - Structured Data para SEO
- **Netlify** - Hosting y deployment

## 📊 Rendimiento

El sitio está optimizado para:
- ⚡ Carga rápida (< 2 segundos)
- 📱 100% responsive
- ♿ Accesibilidad (ARIA labels)
- 🔒 Seguridad (headers configurados)

## 🆘 Soporte

Si necesitas ayuda:
1. Revisa la documentación de [Netlify](https://docs.netlify.com/)
2. Consulta la guía de [TailwindCSS](https://tailwindcss.com/docs)
3. Para SEO local: [Google My Business Help](https://support.google.com/business)

## 📝 Licencia

Este proyecto es privado y pertenece a ReformasPro.

---

**¿Listo para lanzar?** 🚀

1. Personaliza el contenido
2. Añade tus imágenes
3. Configura el formulario
4. Despliega en Netlify
5. Configura Google Search Console
6. ¡Empieza a recibir clientes!
