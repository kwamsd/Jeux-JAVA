package entites;
public abstract class Combattant extends Personnage {
    // Attribut spécifique à Combattant
    private static final int MIN_POINTS_DE_MAGIE = 0;
    private static final int MAX_POINTS_DE_MAGIE = 25;

    // Constructeur
    public Combattant(String nom, String prenom, int pointsDeVie, int pointsDeMagie, int attaque, int defense) {
        super(nom, prenom, pointsDeVie, pointsDeMagie, attaque, defense);
        if (pointsDeMagie < MIN_POINTS_DE_MAGIE) {
            this.setPointsDeMagie(MIN_POINTS_DE_MAGIE);
        } else if (pointsDeMagie > MAX_POINTS_DE_MAGIE) {
            this.setPointsDeMagie(MAX_POINTS_DE_MAGIE);
        } else {
            this.setPointsDeMagie(pointsDeMagie);
        }
    }
}
