package entites;

public class Dragon extends Monstre {

    public Dragon(String nom, String prenom, int pointsDeVie, int attaque, String souffle) {
        super(nom, prenom, pointsDeVie, attaque, 0, TypeElementaire.FEU, "Souffle");
    }

    @Override
    public void capaciteSpeciale(Personnage personnage) {
        souffle();
    }

    public void souffle() {
        System.out.println("Le Dragon utilise sa capacité spéciale : Souffle !");
    }
}
