package entites;

import java.util.Random;

public class Vampire extends Monstre {
    private static final int VIE_MIN = 30;
    private static final int VIE_MAX = 70;
    private static final double POURCENTAGE_ABSORPTION = 0.33;

    public Vampire(String nom, String prenom, int attaque) {
        super(nom, prenom, genererVieAleatoire(), attaque, 0, TypeElementaire.FEU, "Absorption");
    }

    private static int genererVieAleatoire() {
        return new Random().nextInt(VIE_MAX - VIE_MIN + 1) + VIE_MIN;
    }

    @Override
    public void capaciteSpeciale(Personnage personnage) {
        if (personnage instanceof Personnage) {
            Personnage personnageAttaque = (Personnage) personnage;
            int degatsInfliges = personnageAttaque.getAttaque();
            int pointsSoignes = (int) Math.ceil(degatsInfliges * POURCENTAGE_ABSORPTION);
            this.setPointsDeVie(this.getPointsDeVie() + pointsSoignes);
            System.out.println("Le vampire se soigne de " + pointsSoignes + " points de vie !");
        }
    }

}
