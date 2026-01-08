# Guide Google Search Console - Indexation Rapide

## 1. Créer et vérifier la propriété

### Accéder à Search Console
1. Va sur: https://search.google.com/search-console
2. Connecte-toi avec ton compte Google
3. Clique sur "Ajouter une propriété"

### Choisir le type de propriété
- **Domaine** (recommandé): `lucmoyika.tech` (couvre www et apex)
- **Préfixe d'URL**: `https://www.lucmoyika.tech/`

### Méthode de vérification (choisis une)

#### Option 1: Balise HTML (le plus simple)
1. Google te donne une balise comme:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXX" />
   ```
2. Ajoute-la dans `<head>` de index.html (juste après les meta de base)
3. Commit et push
4. Retourne sur Search Console et clique "Vérifier"

#### Option 2: Fichier HTML
1. Télécharge le fichier `googleXXXXXXXX.html`
2. Place-le à la racine du projet
3. Commit et push
4. Vérifie l'accès: `https://www.lucmoyika.tech/googleXXXXXXXX.html`
5. Clique "Vérifier" dans Search Console

#### Option 3: DNS (si tu gères les DNS)
1. Ajoute un enregistrement TXT dans Namecheap:
   - Type: TXT
   - Host: @
   - Value: `google-site-verification=XXXXXX`
2. Attends propagation (5-60 min)
3. Clique "Vérifier"

## 2. Soumettre le sitemap

Une fois vérifié:
1. Dans Search Console → Sitemaps (menu gauche)
2. Ajoute l'URL: `https://www.lucmoyika.tech/sitemap.xml`
3. Clique "Envoyer"
4. État doit passer à "Réussite" après quelques minutes

## 3. Demander l'indexation des pages principales

### Indexation manuelle (accélère le processus)
1. Search Console → Inspection de l'URL (en haut)
2. Tape: `https://www.lucmoyika.tech/`
3. Clique "Tester l'URL en direct"
4. Clique "Demander une indexation"
5. Répète pour: `https://www.lucmoyika.tech/portfolio-details.html`

**Délai**: 1-3 jours pour indexation vs 1-2 semaines sans demande manuelle

## 4. Bing Webmaster Tools (bonus)

### Importer depuis Google (rapide)
1. Va sur: https://www.bing.com/webmasters
2. Connecte-toi avec Microsoft
3. Clique "Importer depuis Google Search Console"
4. Autorise l'accès
5. Sélectionne `www.lucmoyika.tech`
6. Importation automatique (sitemap inclus)

### Ou ajouter manuellement
1. "Ajouter un site"
2. URL: `https://www.lucmoyika.tech`
3. Vérification: balise HTML, fichier ou DNS (même principe que Google)
4. Soumettre sitemap: `https://www.lucmoyika.tech/sitemap.xml`

## 5. Vérifier l'indexation

### Après 2-3 jours
```
site:www.lucmoyika.tech
```
Tape cette recherche sur Google → devrait afficher tes pages

### Recherches à tester
- `luc moyika`
- `lucmoyika`
- `portfolio développeur kinshasa`
- `luc moyika développeur web`
- `freelance web developer rdc`

## 6. Suivi et optimisation

### Métriques à surveiller (Search Console)
- **Performances**: clics, impressions, CTR, position moyenne
- **Couverture**: pages indexées vs erreurs
- **Expérience**: Core Web Vitals (LCP, FID, CLS)
- **Améliorations**: problèmes d'ergonomie mobile

### Objectifs 30 jours
- Pages indexées: 2/2 ✅
- Impressions: >100/mois
- Position moyenne: <20 pour ton nom
- Core Web Vitals: tous en vert

## 7. Accélérer encore plus l'indexation

### Créer des backlinks (liens entrants)
1. **Profils sociaux**: ajoute l'URL sur:
   - LinkedIn (section "Site web")
   - GitHub (bio + README du profil)
   - Twitter/X (bio)
   - Facebook, Instagram

2. **Répertoires professionnels**:
   - Dev.to: https://dev.to/ (créer profil + articles)
   - GitHub Pages Showcase
   - LinkedIn Articles (mentionne ton portfolio)

3. **Forums et communautés**:
   - Stack Overflow (profil)
   - Reddit r/webdev (partage dans "Showoff Saturday")
   - Discord dev RDC/Congo

4. **Ping Google directement**:
   ```
   https://www.google.com/ping?sitemap=https://www.lucmoyika.tech/sitemap.xml
   ```
   Ouvre ce lien dans le navigateur (une seule fois)

## 8. Balise de vérification à ajouter

Si tu choisis la méthode balise HTML, ajoute dans `index.html`:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Google Search Console Verification -->
  <meta name="google-site-verification" content="REMPLACE_PAR_TON_CODE" />
  
  <title>Portfolio Luc Moyika...</title>
  ...
</head>
```

Puis:
```powershell
git add index.html
git commit -m "feat: ajouter vérification Google Search Console"
git push
```

## Résumé des étapes

1. ✅ Créer propriété Search Console
2. ✅ Vérifier avec balise/fichier/DNS
3. ✅ Soumettre sitemap.xml
4. ✅ Demander indexation pages principales
5. ✅ Importer dans Bing Webmaster
6. ✅ Partager sur réseaux sociaux
7. ✅ Ping Google
8. ⏱️ Attendre 2-3 jours
9. ✅ Vérifier avec `site:www.lucmoyika.tech`

**Temps total**: 15-20 minutes  
**Résultat**: indexation en 1-3 jours vs 1-2 semaines

---

Besoin d'aide? Dis-moi à quelle étape tu es!
