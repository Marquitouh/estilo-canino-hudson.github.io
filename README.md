# Estilo Canino Hudson 🐾

Sitio web de **Estilo Canino Hudson**: paseos de perros, peluquería canina y cuidado
de mascotas a domicilio en **Fincas de Hudson, Buenos Aires**.

Página única (landing), hecha con HTML + CSS + JS puro. No necesita build ni
dependencias: se publica directo en GitHub Pages.

## Contacto del negocio

- WhatsApp: 11 5669-8721 → `https://wa.me/5491156698721`
- Instagram: [@estilo.canino.hudson](https://instagram.com/estilo.canino.hudson)

## Qué incluye

- Hero con foto real del negocio (dos goldens) + chip de zona + badge "Hecho con amor"
- Franja animada de servicios
- Servicios: paseos (arrancan 7:30, duran lo que dure el paseo), pelu canina, cuidado a domicilio
- Galería con **las fotos reales** (24 paseos + 5 baño), filtros por categoría y CTA a Instagram
- Preguntas frecuentes (acordeón)
- Contacto con tarjeta de datos (WhatsApp, Instagram, horario, zona)
- Formulario de reserva: arma el mensaje solo y lo envía a WhatsApp
- Botón flotante de WhatsApp siempre visible
- Animaciones suaves con `prefers-reduced-motion`, accesible (Lighthouse 100)

## Estructura

```
index.html          → página completa
404.html            → página de error con la marca (GitHub Pages la sirve sola)
css/styles.css      → estilos (paleta crema + oliva, tipografías Archivo y Caveat)
js/main.js          → aparición al hacer scroll + filtros de galería + formulario
assets/favicon.svg  → huellita de la marca
assets/img/         → fotos
  hero.jpg            dos golden retriever (foto del negocio)
  paseos.jpg / pelu.jpg / cita.jpg   fotos de tarjetas
  paseo-01..24.jpg    galería de paseos (fotos reales)
  bano-01..05.jpg     galería de baño (fotos reales)
  cuidado-01.jpg      galería de cuidos a domicilio (foto real)
```

## ⚠️ Antes de publicar: contenido de ejemplo

- **Detalles de políticas** — grupos, lluvia, pagos: revisá la sección
  "Preguntas frecuentes" en `index.html` y ajustá lo que escribas distinto.

## Cómo verlo / publicarlo

1. **Local:** abrir `index.html` en el navegador (doble clic).
2. **GitHub Pages:**
   ```bash
   cd "D:\Carpetas y Cosas importantes\Codigos\Paginas\Estilo-Canino-Hudson.Github.Io"
   git add .
   git commit -m "Actualización"
   git push
   ```
   El sitio queda en `https://<usuario>.github.io`.

## Cambios rápidos

- **Textos / zona / horarios:** todo está en `index.html`.
- **Colores:** variables al inicio de `css/styles.css` (`--oliva`, `--crema`, etc.).
- **WhatsApp:** el número está como `5491156698721` en todos los enlaces `wa.me`.
- **Fotos:** pegá las nuevas en `assets/img/` (formato `paseo-XX.jpg` / `bano-XX.jpg`)
  y sumalas como `<figure class="g-foto" data-categoria="paseo">` en la galería.
