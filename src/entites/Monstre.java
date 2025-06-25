package entites;

public abstract class Monstre {
    private int pointsDeVie;
    private int attaque;
    private String capaciteSpeciale;
    private TypeElementaire typeElementaire;

    public Monstre(String nom, String prenom, int pointsDeVie, int attaque, int defense, TypeElementaire typeElementaire, String capaciteSpeciale) {
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.capaciteSpeciale = capaciteSpeciale;
        this.typeElementaire = typeElementaire;
    }

    protected static int generateRandom(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    public int attaquer() {
        return generateRandom(1, attaque);
    }

    public void utiliserCapaciteSpeciale(Personnage heroChoisi) {
        System.out.println("Le monstre utilise sa capacité spéciale : " + capaciteSpeciale);
    }

    public abstract void capaciteSpeciale(Personnage personnage);

    public boolean estVivant() {
        return pointsDeVie > 0;
    }

    public void setPointsDeVie(int pointsDeVie) {
        this.pointsDeVie = pointsDeVie;
    }

    public void setAttaque(int attaque) {
        this.attaque = attaque;
    }

    public TypeElementaire getTypeElementaire() {
        return typeElementaire;
    }

    public void setTypeElementaire(TypeElementaire typeElementaire) {
        this.typeElementaire = typeElementaire;
    }

    public int getPointsDeVie() {
        return pointsDeVie;
    }

    public int getAttaque() {
        return attaque;
    }
}
