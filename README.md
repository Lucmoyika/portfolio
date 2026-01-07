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
1. Choisir un domaine chez le fournisseur (ex: Namecheap via le pack).
2. Ajouter un fichier `CNAME` à la racine contenant le domaine (ex: `www.mondomaine.com`).
3. Configurer DNS: CNAME vers `lucmoyika.github.io`.
4. Mettre à jour `canonical`, `og:url`, `twitter:image`, `robots.txt`, `sitemap.xml` avec le nouveau domaine.

## Sitemaps et robots
- robots.txt: autorise l’indexation et pointe vers le sitemap.
- sitemap.xml: référence les pages principales.

## Maintenance
- Ajouter les mêmes balises SEO à toute nouvelle page.
- Optimiser les images (WebP/AVIF, dimensions `width`/`height`).# portfolio
Portfolio de développeur web mettant en avant mes projets, compétences et services professionnels.
