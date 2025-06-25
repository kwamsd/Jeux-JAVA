package entites;

import java.util.Random;

public class Magicien extends Personnage {
    private static final int VIE_MIN = 1;
    private static final int VIE_MAX = 70;
    private static final int MAGIE_MIN = 0;
    private static final int MAGIE_MAX = 50;
    private static final int SORT_DEGATS = 7;

    public Magicien(String nom, String prenom) {
        super(nom, prenom, genererVieAleatoire(), genererMagieAleatoire(), 0, 0);
    }

    private static int genererVieAleatoire() {
        return new Random().nextInt(VIE_MAX - VIE_MIN + 1) + VIE_MIN;
    }

    private static int genererMagieAleatoire() {
        return new Random().nextInt(MAGIE_MAX - MAGIE_MIN + 1) + MAGIE_MIN;
    }

    public void jeterSort(Monstre monstre, Arme arme) {
        int degats;
        if (arme != null) {
            if (arme.getTypeElementaire().estEfficaceContre(monstre.getTypeElementaire())) {
                degats = SORT_DEGATS * 3;
                System.out.println("Le sort est très efficace contre ce monstre !");
            } else {
                degats = SORT_DEGATS * 2;
                System.out.println("Le sort inflige des dégâts supplémentaires !");
            }
        } else {
            degats = SORT_DEGATS * 2;
        }
        monstre.setPointsDeVie(monstre.getPointsDeVie() - degats);
        System.out.println("Le sort inflige " + degats + " points de dégâts au " + monstre.getClass().getSimpleName());
    }
}
