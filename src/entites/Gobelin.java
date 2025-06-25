package entites;

public class Gobelin extends Monstre {

    public Gobelin(String nom, String prenom, int pointsDeVie) {
        super(nom, prenom, pointsDeVie, 0, generateRandom(3, 10), TypeElementaire.FEU, "Empaler");
        if (pointsDeVie < 1) {
            setPointsDeVie(1);
        } else if (pointsDeVie > 50) {
            setPointsDeVie(50);
        }
    }

    @Override
    public void capaciteSpeciale(Personnage personnage) {
        empaler();
    }

    public void empaler() {
        System.out.println("Le Gobelin utilise sa capacité spéciale : Empaler !");
        setAttaque(getAttaque() + 10);
    }
}
