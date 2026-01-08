# Guide d'optimisation des performances

## Images WebP/AVIF
Les formats modernes réduisent la taille des images de 25-35% sans perte de qualité.

### Conversion avec outil en ligne
- **Squoosh**: https://squoosh.app/ (par Google, gratuit)
- **CloudConvert**: https://cloudconvert.com/png-to-webp
- Glisser-déposer les PNG/JPG depuis `assets/img/`

### Conversion locale (PowerShell)
```powershell
# Installer cwebp (Google WebP)
# Télécharger: https://developers.google.com/speed/webp/download

# Convertir une image
cwebp -q 85 assets/img/profile.jpg -o assets/img/profile.webp

# Batch conversion
Get-ChildItem assets/img/portfolio/*.PNG | ForEach-Object {
    $output = $_.FullName -replace '\.PNG$', '.webp'
    cwebp -q 85 $_.FullName -o $output
}
```

### Utilisation dans HTML (fallback automatique)
```html
<picture>
  <source srcset="assets/img/profile.webp" type="image/webp">
  <img src="assets/img/profile.jpg" alt="Luc Moyika" loading="lazy">
</picture>
```

## Dimensions des images
Ajouter `width` et `height` réduit le CLS (Cumulative Layout Shift).

### Obtenir les dimensions
```powershell
# Via PowerShell
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("d:\Portflo-luc\assets\img\profile.jpg")
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
```

Ensuite ajouter aux balises:
```html
<img src="assets/img/profile.jpg" width="800" height="600" loading="lazy" alt="...">
```

## Minification CSS/JS
Réduire la taille des fichiers CSS et JS.

### En ligne (rapide)
- **CSS Minifier**: https://cssminifier.com/
- **JS Minifier**: https://javascript-minifier.com/

### Avec Node.js (si installé)
```powershell
npm install -g csso-cli terser
csso assets/css/main.css -o assets/css/main.min.css
terser assets/js/main.js -o assets/js/main.min.js -c -m
```

## Google Analytics (optionnel)
Suivre le trafic avec respect de la vie privée.

### Plausible (recommandé, privacy-first)
1. Créer compte: https://plausible.io/
2. Ajouter avant `</head>`:
```html
<script defer data-domain="www.lucmoyika.tech" src="https://plausible.io/js/script.js"></script>
```

### Google Analytics 4
1. Créer propriété: https://analytics.google.com/
2. Ajouter le tag avant `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Google Search Console
Soumettre le site pour indexation.

1. Aller sur: https://search.google.com/search-console
2. Ajouter la propriété: `https://www.lucmoyika.tech`
3. Vérifier via balise HTML ou DNS
4. Soumettre le sitemap: `https://www.lucmoyika.tech/sitemap.xml`

## Bing Webmaster Tools
1. Aller sur: https://www.bing.com/webmasters
2. Ajouter le site: `https://www.lucmoyika.tech`
3. Importer depuis Google Search Console (si déjà configuré)
4. Soumettre sitemap

## Tests de performance
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

Cible: Score >90 sur mobile et desktop.

## Cache et CDN (avancé)
- **Cloudflare**: DNS + CDN + cache automatique (plan gratuit disponible)
- Active "Auto Minify" HTML/CSS/JS
- Enable Brotli compression

## Checklist finale
- [ ] Images converties en WebP/AVIF
- [ ] Dimensions width/height ajoutées aux images
- [ ] CSS/JS minifiés
- [ ] Google Search Console configuré
- [ ] Bing Webmaster configuré
- [ ] Analytics installé (optionnel)
- [ ] Test PageSpeed >90
