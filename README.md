# Avenir Football Club

## Description
Le projet **Avenir Football Club** reflète l'identité d'un club de football fictif, avec ses valeurs, ses services, et son ambition de fédérer sa communauté. Il inclut une boutique en ligne, un classement en ligue régionale, une billetterie, une présentation de l'équipe et des services, le tout dans un format interactif, moderne et accessible.

### Origine et évolution
À l'origine, le projet consistait en une landing page destinée à promouvoir un produit spécifique lié au club. Au fil du développement, il s'est transformé en une plateforme complète offrant un écosystème numérique pour tous les fans et membres du club. Ce passage a demandé :
- Une réorganisation des fichiers et des contenus.
- L’ajout de fonctionnalités étendues comme les services, l'actualité, classement régional, la billetterie, et le multilingue.
- Un effort particulier sur le design responsive pour garantir une expérience utilisateur optimale sur toutes les plateformes.

---

## Fonctionnalités principales
### Sections du site
1. **Page introductive ou à propos** :
   - Introduction au club et présentation de ses valeurs.
   - Call-to-action pour rejoindre la communauté (vous dirige vers contact pour le moment).

2. **Boutique** :
   - Articles officiels du club (maillots, accessoires, crampons).
   - Promotions dynamiques avec animations attractives.
   - Paiement sécurisé via partenaires comme PayPal et Mastercard.

3. **Classement en ligue régionale** :
   - Tableau interactif affichant les positions, statistiques, et performances des équipes.

4. **Billetterie** :
   - Réservation simple et rapide de places pour les matchs.
   - Détails du lieu, catégories de siège, et tarif.

5. **Équipe et Joueurs** :
   - Profil de l'équipe et présentation des joueurs avec leurs rôles.
   - Intégration d'une galerie pour afficher des images de l'équipe et son actualité.

6. **Services** :
   - Formation et entraînement.
   - Encadrement médical et conseils nutritionnels.
   - Infrastructures disponibles.
   - Gestion administrative et actions communautaires.

7. **Contact et Footer** :
   - Formulaire pour laisser un message ou poser une question.
   - Liens vers les réseaux sociaux et mentions légales.

### Contenu multilingue
Le site propose des versions adaptées à plusieurs langues pour une portée internationale :
- Français
- Anglais
- Espagnol
- Italien
- Ukrainien
- Japonais

Chaque langue dispose de sa propre structure HTML dédiée, accompagnée de styles CSS unifiés.

---

## Installation
### Étapes pour lancer le projet localement
1. **Clonez ce dépôt via Git** :
   ```bash
   git clone <https://github.com/Only-tech/AFC_Rebuilt_html_css.git>
   ```
2. **Ouvrez le fichier** `index.html` dans votre navigateur pour consulter la version principale (français).
3. Pour les autres langues :
   - Accédez aux fichiers `en.html`, `es.html`, `it.html`, `ukr.html`, `jpn.html`, ou naviguez dans les différentes pages via **Langues** dans le footer.
   - Les styles universels sont appliqués via `css/styles.css`.

### Structure des fichiers
Voici une vue simplifiée de l'organisation du projet :
```
/
├── index.html (Page principale en français)
├── en.html (Version anglaise)
├── es.html (Version espagnole)
├── it.html (Version italienne)
├── ukr.html (Version ukrainienne)
├── jpn.html (Version japonaise)
├── main.js (Pour le menu Burger et le Panier)
├── css/
│   └── styles.css (Styles globaux pour toutes les langues)
│   └── fonts.css (Styles globaux pour toutes les langues)
├── fonts/
│   └── Montserrat (Contient les polices)
│   └── Open_Sans (Contient les polices)
│   └── Oswald (Contient les polices)
│   └── Poppins (Contient les polices)
│   └── Volkhov (Contient les polices)
├── img/ (Images utilisées dans le site)
├── README
```

---

## Technologies utilisées
### Développement
- **HTML5** : Création des pages multilingues.
- **CSS3** : Styles modernes et animations (hover, bounce, slide-in).

### Design
- **Figma** : Outil de conception visuelle utilisé pour structurer et créer une maquette immersive, [consultable ici](https://www.figma.com/design/zRXORc8Cqby9iMO3t7FWcB/Avenir-Football-Club?node-id=0-1&p=f&t=BrUX2Y6FPWfHDFhZ-0).

### Autres outils graphiques et de conception 
- **Paint** : Redimensionnement des images afin d'adapter les visuels aux besoins du site.
- **PosterMyWall** : Création des logos du club et personnalisation des maillots, en intégrant des éléments visuels uniques.
- **Samsung Studio** : Réalisation des photos des marques partenaires


### Design responsive
Le site est optimisé pour offrir une expérience utilisateur fluide :
- **Desktop** : Animations riches et espaces bien définis.
- **Tablettes et mobiles** :
  - Menu burger_menu pour les petits écrans.
  - Ajustements automatiques des marges, tailles de police, et images.

---

## Extraits de code
### Exemple de styles CSS pour animations
```css
/* Animation de slide-in */
@keyframes left-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.left_slide_in {
  animation: left-slide-in 1s ease-in-out forwards;
}
```

### Exemple de gestion multilingue
```html
<!DOCTYPE html>
<html lang="fr"> <!-- Français -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avenir Football Club</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Avenir Football Club</h1>
</body>
</html>
```

Pour la version ukrainienne (`ukr.html`) :
```html
<!DOCTYPE html>
<html lang="uk"> <!-- Ukrainien -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Футбольний Клуб Авенір</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Футбольний Клуб Авенір</h1>
</body>
</html>
```

Voici le menu permettant aux utilisateurs de choisir la langue du site :

```html
<nav>
    <ul>
        <li><a href="index.html">Français</a></li>
        <li><a href="en.html">English</a></li>
        <li><a href="es.html">Español</a></li>
        <li><a href="it.html">Italiano</a></li>
        <li><a href="ukr.html">Українська</a></li>
        <li><a href="jpn.html">日本語</a></li>
    </ul>
</nav>
```

---

## Crédits
- **Développeur** : Cedrick F.
- **Design** : Cedrick F, via Figma.
- **Contributions** :
  J'ai rencontré des difficultés pour traduire en bon sens le site en d'autres langues, donc les contributions sont les bienvenues.

---

## Licence
Open.....

---










---

# Avenir Football Club

## Description
The **Avenir Football Club** project reflects the identity of the fictional football club, Avenir Football Club, showcasing its values, services, and its ambition to unite the community. The website includes an online store, a regional league ranking, ticketing, team and service presentations, all within an interactive, modern, and accessible format.

### Origins and Evolution
Initially, the project consisted of a landing page dedicated to promoting a specific club-related product. Over time, it evolved into a comprehensive platform providing a digital ecosystem for all club fans and members. This transformation required:
- Reorganizing files and content.
- Adding extended functionalities such as services, news, regional rankings, ticketing, and multilingual support.
- Special focus on responsive design to ensure an optimal user experience across all platforms.

---

## Key Features
### Website Sections
1. **Introduction or About Page**:
   - Club introduction and value presentation.
   - Call-to-action to join the community (redirects to contact at the moment).

2. **Store**:
   - Official club merchandise (jerseys, accessories, cleats).
   - Dynamic promotions with engaging animations.
   - Secure payments via partners like PayPal and Mastercard.

3. **Regional League Ranking**:
   - Interactive table displaying positions, statistics, and team performances.

4. **Ticketing**:
   - Simple and quick ticket reservations for matches.
   - Venue details, seat categories, and pricing.

5. **Team and Players**:
   - Team profile and player presentation with their roles.
   - Integration of a gallery displaying team images and news.

6. **Services**:
   - Training and coaching.
   - Medical support and nutritional advice.
   - Available infrastructures.
   - Administrative management and community activities.

7. **Contact and Footer**:
   - Contact form for leaving messages or inquiries.
   - Links to social media and legal mentions.

### Multilingual Content
The website offers versions adapted to several languages for an international audience:
- French
- English
- Spanish
- Italian
- Ukrainian
- Japanese

Each language has its own dedicated HTML structure, accompanied by unified CSS styles.

---

## Installation
### Steps to Launch the Project Locally
1. **Clone this repository via Git**:
   ```bash
   git clone <https://github.com/Only-tech/AFC_Rebuilt_html_css.git>
   ```
2. **Open the file** `index.html` in your browser to view the main version (French).
3. For other languages:
   - Access the files `en.html`, `es.html`, `it.html`, `ukr.html`, `jpn.html`, or navigate between pages via **Languages** in the footer.
   - Universal styles are applied through `css/styles.css`.

### File Structure
Here's a simplified view of the project organization:
```
/
├── index.html (Main page in French)
├── en.html (English version)
├── es.html (Spanish version)
├── it.html (Italian version)
├── ukr.html (Ukrainian version)
├── jpn.html (Japanese version)
├── main.js (for burger menu and shopping cart)
├── css/
│   └── styles.css (Global styles for all languages)
│   └── fonts.css (Global font styles)
├── fonts/
│   └── Montserrat/
│   └── Open_Sans/
│   └── Oswald/
│   └── Poppins/
│   └── Volkhov/
├── img/ (Images used on the website)
```

---

## Technologies Used
### Development
- **HTML5**: Creation of multilingual pages.
- **CSS3**: Modern styles and animations (hover, bounce, slide-in).

### Design
- **Figma**: Visual design tool used for structuring and creating an immersive prototype, [accessible here](https://www.figma.com/design/zRXORc8Cqby9iMO3t7FWcB/Avenir-Football-Club?node-id=0-1&p=f&t=BrUX2Y6FPWfHDFhZ-0).

### Other Graphic and Design Tools 
- **Paint**: Used for resizing images to adapt visuals to the site's requirements.
- **PosterMyWall**: Creation of club logos and customization of jerseys, integrating unique visual elements.
- **Samsung Studio**: Production of photos for partner brands.

### Responsive Design
The site is optimized to offer a seamless user experience:
- **Desktop**: Rich animations and well-defined spaces.
- **Tablets and Mobile Devices**:
  - burger_menu menu for smaller screens.
  - Automatic adjustments of margins, font sizes, and images.

---

## Code Snippets
### Example of CSS Styles for Animations
```css
/* Slide-in Animation */
@keyframes left-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.left_slide_in {
  animation: left-slide-in 1s ease-in-out forwards;
}
```

### Example of Multilingual Management
```html
<!DOCTYPE html>
<html lang="fr"> <!-- French -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avenir Football Club</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Avenir Football Club</h1>
</body>
</html>
```

For the Ukrainian version (`ukr.html`):
```html
<!DOCTYPE html>
<html lang="uk"> <!-- Ukrainian -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Футбольний Клуб Авенір</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>Футбольний Клуб Авенір</h1>
</body>
</html>
```

Here’s the menu allowing users to choose the site’s language:

```html
<nav>
    <ul>
        <li><a href="index.html">Français</a></li>
        <li><a href="en.html">English</a></li>
        <li><a href="es.html">Español</a></li>
        <li><a href="it.html">Italiano</a></li>
        <li><a href="ukr.html">Українська</a></li>
        <li><a href="jpn.html">日本語</a></li>
    </ul>
</nav>
```

---

## Credits
- **Developer**: Cedrick F.
- **Design**: Cedrick F, via Figma.
- **Contributions**:
  I encountered difficulties translating the site properly into other languages, so contributions are welcome.

---

## License
Open....

---

