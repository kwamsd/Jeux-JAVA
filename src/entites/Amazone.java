package entites;

public class Amazone extends Combattant {

    public Amazone(String nom, String prenom, int pointsDeVie, int pointsDeMagie) {
        super(nom, prenom, pointsDeVie, pointsDeMagie, 0, 0);
        this.setAttaque(genererValeurAleatoire(7, 12));
        this.setDefense(genererValeurAleatoire(7, 12));
    }

    public void danserVSadversaires() {
        System.out.println("L'amazone danse mieux que Chris Brown, pour surprendre ses adversaires !");
        int bonusAttaque = 3; // une bonne danse est égale à plus de points logique
        // agyment l'attaque pendant un tour
        this.setAttaque(this.getAttaque() + bonusAttaque);
    }

    private int genererValeurAleatoire(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }
}
