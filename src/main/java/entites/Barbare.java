package entites;

public class Barbare extends Combattant {
    // Attributs spécifiques à Barbare
    private static final int ATTAQUE_MIN = 10;
    private static final int ATTAQUE_MAX = 15;
    private static final int DEFENSE_MIN = 5;
    private static final int DEFENSE_MAX = 10;


    public Barbare(String nom, String prenom, int pointsDeVie, int pointsDeMagie) {
        // j'appelle le constructeur de la classe parent avec les attributs propres à un Barbare
        super(nom, prenom, pointsDeVie, pointsDeMagie, 0, 0);
        this.setAttaque(genererValeurAleatoire(ATTAQUE_MIN, ATTAQUE_MAX));
        this.setDefense(genererValeurAleatoire(DEFENSE_MIN, DEFENSE_MAX));
    }

    // m pour générer une valeur aléatoire dans un intervalle donné
    private int genererValeurAleatoire(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }
}
