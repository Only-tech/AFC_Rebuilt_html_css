# Avenir Football Club

## Description
Le projet **Avenir Football Club** a évolué d’une landing page dédiée à la promotion d’un produit vers un site web complet et multilingue. Ce projet reflète l'identité du club de football fictif, Avenir Football Club, avec ses valeurs, ses services, et son ambition de fédérer sa communauté. Il inclut une boutique en ligne, un classement en ligue régionale, une billetterie, une présentation de l'équipe et des services, le tout dans un format interactif, moderne et accessible.

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
   - Call-to-action pour rejoindre la communauté ou accéder aux services.

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
├── css/
│   └── styles.css (Styles globaux pour toutes les langues)
├── img/ (Images utilisées dans le site)
```

---

## Technologies utilisées
### Développement
- **HTML** : Création des pages multilingues.
- **CSS** : Styles modernes et animations (hover, bounce, slide-in).
- **Google Fonts** : Intégration de la police Montserrat pour une uniformité visuelle.

### Design
- **Figma** : Outil de conception visuelle utilisé pour structurer et créer une maquette immersive, [consultable ici](https://www.figma.com/design/zRXORc8Cqby9iMO3t7FWcB/Avenir-Football-Club?node-id=0-1&p=f&t=BrUX2Y6FPWfHDFhZ-0).

### Design responsive
Le site est optimisé pour offrir une expérience utilisateur fluide :
- **Desktop** : Animations riches et espaces bien définis.
- **Tablettes et mobiles** :
  - Menu burger pour les petits écrans.
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
Pas de licence spécifique pour le moment.

---









Here is the English translation of your README:

---

# Avenir Football Club

## Description
The **Avenir Football Club** project has evolved from a landing page dedicated to promoting a product into a complete, multilingual website. This project reflects the identity of the fictional football club, Avenir Football Club, showcasing its values, services, and its ambition to unite the community. The site includes an online store, a regional league ranking, ticketing, a presentation of the team and services, all in an interactive, modern, and accessible format.

### Origins and Evolution
Originally, the project was a landing page intended to promote a specific club-related product. Over time, it transformed into a comprehensive platform providing a digital ecosystem for all club fans and members. This transition required:
- A reorganization of files and content.
- The addition of extended functionalities such as services, news, regional rankings, ticketing, and multilingual support.
- A particular focus on responsive design to ensure an optimal user experience across all platforms.

---

## Key Features
### Website Sections
1. **Introduction or About Page**:
   - Introduction to the club and its values.
   - Call-to-action to join the community or access services.

2. **Store**:
   - Official club merchandise (jerseys, accessories, cleats).
   - Dynamic promotions with attractive animations.
   - Secure payments via partners like PayPal and Mastercard.

3. **Regional League Ranking**:
   - Interactive table displaying positions, statistics, and team performances.

4. **Ticketing**:
   - Simple and fast ticket reservations for matches.
   - Venue details, seat categories, and pricing.

5. **Team and Players**:
   - Team profile and presentation of players with their roles.
   - Integration of a gallery to display team images and news.

6. **Services**:
   - Training and coaching.
   - Medical support and nutritional advice.
   - Available infrastructures.
   - Administrative management and community activities.

7. **Contact and Footer**:
   - Contact form to leave a message or ask a question.
   - Links to social media and legal mentions.

### Multilingual Content
The site is available in multiple languages for an international audience:
- French
- English
- Spanish
- Italian
- Ukrainian
- Japanese

Each language has its own dedicated HTML structure, accompanied by unified CSS styles.

---

## Installation
### Steps to run the project locally
1. **Clone this repository via Git**:
   ```bash
   git clone <https://github.com/Only-tech/AFC_Rebuilt_html_css.git>
   ```
2. **Open the file** `index.html` in your browser to view the main version (French).
3. For other languages:
   - Access the files `en.html`, `es.html`, `it.html`, `ukr.html`, `jpn.html`, or navigate between pages via **Languages** in the footer.
   - Universal styles are applied via `css/styles.css`.

### File Structure
Here is a simplified view of the project’s organization:
```
/
├── index.html (Main page in French)
├── en.html (English version)
├── es.html (Spanish version)
├── it.html (Italian version)
├── ukr.html (Ukrainian version)
├── jpn.html (Japanese version)
├── css/
│   └── styles.css (Global styles for all languages)
├── img/ (Images used in the site)
```

---

## Technologies Used
### Development
- **HTML**: Creation of multilingual pages.
- **CSS**: Modern styles and animations (hover, bounce, slide-in).
- **Google Fonts**: Integration of the Montserrat font for visual uniformity.

### Design
- **Figma**: Visual design tool used to structure and create an immersive prototype, [available here](https://www.figma.com/design/zRXORc8Cqby9iMO3t7FWcB/Avenir-Football-Club?node-id=0-1&p=f&t=BrUX2Y6FPWfHDFhZ-0).

### Responsive Design
The site is optimized to provide a smooth user experience:
- **Desktop**: Rich animations and well-defined spaces.
- **Tablets and mobile devices**:
  - Burger menu for small screens.
  - Automatic adjustments of margins, font sizes, and images.

---

## Code Samples
### Example of CSS for animations
```css
/* Slide-in animation */
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

### Example of multilingual management
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

Here is the menu allowing users to choose the site’s language:

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
No specific license at the moment.
