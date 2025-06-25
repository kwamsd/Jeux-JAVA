package entites;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Barbare barbare = new Barbare("Conan", "le Barbare", 100, 20);
        Paladin paladin = new Paladin("Arthur", "le Paladin", 100, 20);
        Amazone amazone = new Amazone("Xena", "l'Amazone", 100, 15);
        Dragon dragon = new Dragon("Smaug", "le Dragon", 80, 40, "Souffle");

        System.out.println("Choisissez votre héros :");
        System.out.println("1. Barbare");
        System.out.println("2. Paladin");
        System.out.println("3. Amazone");
        int choixHero = scanner.nextInt();
        Personnage heroChoisi = null;

        switch (choixHero) {
            case 1:
                heroChoisi = barbare;
                break;
            case 2:
                heroChoisi = paladin;
                break;
            case 3:
                heroChoisi = amazone;
                break;
            default:
                System.out.println("Choix invalide, fin du jeu.");
                return;
        }

        int nombreMonstres = 1;

        for (int i = 1; i <= nombreMonstres; i++) {
            System.out.println("Combat " + i + " : " + heroChoisi.getNom() + " vs Monstre");

            while (heroChoisi.getPointsDeVie() > 0 && dragon.getPointsDeVie() > 0) {
                System.out.println("Tour du héros :");
                int degatsInfligesParHero = heroChoisi.getAttaque();
                dragon.setPointsDeVie(dragon.getPointsDeVie() - degatsInfligesParHero);
                System.out.println(heroChoisi.getNom() + " inflige " + degatsInfligesParHero + " points de dégâts au dragon.");

                if (dragon.getPointsDeVie() <= 0) {
                    break;
                }

                System.out.println("Tour du monstre :");
                dragon.utiliserCapaciteSpeciale(heroChoisi);
                int degatsInfligesParDragon = dragon.attaquer();
                heroChoisi.setPointsDeVie(heroChoisi.getPointsDeVie() - degatsInfligesParDragon);
                System.out.println("Le dragon inflige " + degatsInfligesParDragon + " points de dégâts à " + heroChoisi.getNom() + ".");

                if (heroChoisi.getPointsDeVie() <= 0) {
                    break;
                }

                System.out.println("Points de vie du héros : " + heroChoisi.getPointsDeVie());
                System.out.println("Points de vie du dragon : " + dragon.getPointsDeVie());
            }

            if (heroChoisi.getPointsDeVie() <= 0) {
                System.out.println("Le héros a été vaincu !");
                break;
            } else {
                System.out.println("Le dragon a été vaincu !");
            }
        }

        System.out.println("Fin du jeu.");
    }
}
