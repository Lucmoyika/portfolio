# Portfolio Luc Moyika

Site statique déployé via GitHub Pages. Ce dépôt contient le portfolio et la page de détails des projets.

## URL de production
- Projet: https://lucmoyika.github.io/portfolio/
- Détails: https://lucmoyika.github.io/portfolio/portfolio-details.html

## Déploiement
- L’action GitHub Pages est configurée dans .github/workflows/pages.yml
- À chaque `push` sur `main`, le site est publié.

## Mise à jour locale
```powershell
git add -A
git commit -m "Mises à jour"
git push
```

## SEO
- Balises `meta` (description, keywords, canonical, author, robots)
- Open Graph/Twitter Cards
- Données structurées JSON-LD (`WebSite`, `Person`, `BreadcrumbList`)
- `robots.txt` et `sitemap.xml`
- `loading="lazy"` sur les images, `defer` sur les scripts

## Domaine personnalisé (GitHub Student Pack)
1. Domaine choisi: `www.lucmoyika.dev`.
2. Fichier `CNAME` à la racine contenant `www.lucmoyika.dev`.
3. DNS pour sous-domaine `www`: créer un enregistrement CNAME pointant vers `lucmoyika.github.io`.
4. (Option) Si apex `lucmoyika.dev` doit aussi répondre: créer des enregistrements A/AAAA vers les IP GitHub Pages.
5. Mettre à jour `canonical`, `og:url`, `twitter:image`, `robots.txt`, `sitemap.xml` avec `https://www.lucmoyika.dev`.
6. GitHub → Settings → Pages: définir "Custom domain" à `www.lucmoyika.dev` et activer "Enforce HTTPS".

## Sitemaps et robots
- robots.txt: autorise l’indexation et pointe vers le sitemap.
- sitemap.xml: référence les pages principales.

## Maintenance
- Ajouter les mêmes balises SEO à toute nouvelle page.
- Optimiser les images (WebP/AVIF, dimensions `width`/`height`).# portfolio
Portfolio de développeur web mettant en avant mes projets, compétences et services professionnels.
