package entites;
public class Paladin extends Combattant {
    // Attributs spécifiques à Paladin
    private static final int ATTAQUE_MIN = 5;
    private static final int ATTAQUE_MAX = 10;
    private static final int DEFENSE_MIN = 10;
    private static final int DEFENSE_MAX = 15;
    private static final int COUT_SOIN = 5;


    public Paladin(String nom, String prenom, int pointsDeVie, int pointsDeMagie) {
        // Appel au constructeur de la classe parent avec les attributs propres à un Paladin
        super(nom, prenom, pointsDeVie, pointsDeMagie, 0, 0);
        // Initialisation de l'attaque et de la défense dans les limites
        this.setAttaque(genererValeurAleatoire(ATTAQUE_MIN, ATTAQUE_MAX));
        this.setDefense(genererValeurAleatoire(DEFENSE_MIN, DEFENSE_MAX));
    }

    // mé pour générer une valeur aléatoire
    private int genererValeurAleatoire(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    // méthode pour se soigner
    public void seSoigner() {
        // je vérifie si le personnage a suffisament de points pour se soigner
        if (this.getPointsDeMagie() >= COUT_SOIN) {
            // restaure les PV
            this.setPointsDeVie(100); // Les PV reviennent au max
            // reduit les poitns de magie
            this.setPointsDeMagie(this.getPointsDeMagie() - COUT_SOIN);
            System.out.println("Le Paladin s'est soigné complètement, enfIINNN.");
        } else {
            System.out.println("Le Paladin n'a pas assez de PG pour se soigner.");
        }
    }
}
