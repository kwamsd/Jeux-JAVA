# Donjon Java – Projet POO

Jeu textuel orienté objet réalisé en Java, simulant des combats entre héros et monstres dans un environnement terminal.

---

## Aperçu

* Sélection d'un personnage jouable (mage, barbare, etc.)
* Combats tour à tour contre des monstres générés aléatoirement
* Gestion des armes, armures, points de vie, coups critiques
* Interface terminal web (via ttyd) avec Docker

---

## Stack technique

* **Java 11** (POO)
* **Docker** pour l'environnement d'exécution
* **ttyd** pour accéder au terminal en ligne depuis un navigateur
* **Busybox httpd** pour afficher une page d'accueil HTML

---

## Ce que j'ai fait

* Développement complet de la logique de combat (classes, héritage, polymorphisme)
* Gestion aléatoire des monstres et de leurs attributs
* Ajout de coups critiques (10 % de chance de faire x2 dégâts)
* Création d'un script de lancement (`simulation.sh`) pour garder le terminal ouvert
* Création d'une image Docker complète pour lancer depuis le navigateur
* Intégration d'une page `index.html` accessible via `localhost:8000`

---

## Lancer le projet

### En local avec Docker

```bash
docker build -t my-java-game .
docker run -p 8080:8080 -p 8000:8000 my-java-game
```

* `http://localhost:8000` → page d'accueil HTML
* `http://localhost:8080` → terminal interactif pour jouer

### Sur Gitpod

```yaml
# .gitpod.yml
image: gitpod/workspace-full
tasks:
  - before: |
      mkdir -p out
      javac -d out src/entites/*.java
    init: |
      java -cp out entites.Main
```

---

## Améliorations possibles

* Ajouter des objets (potions, bonus)
* Système de progression (XP, niveau)
* Interface graphique (JavaFX)
* Combat en équipe

---

> Réalisé dans le cadre du cours de Programmation Orientée Objet (POO Java).
