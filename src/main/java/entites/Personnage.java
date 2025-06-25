package entites;

public class Personnage {
    // Attributs
    private String nom;
    private String prenom;
    private int pointsDeVie;
    private int pointsDeMagie;
    private int attaque;
    private int defense;
    private Arme arme;
    private Armure armure;

    // Constructeur
    public Personnage(String nom, String prenom, int pointsDeVie, int pointsDeMagie, int attaque, int defense) {
        this.nom = nom;
        this.prenom = prenom;
        this.pointsDeVie = pointsDeVie;
        this.pointsDeMagie = pointsDeMagie;
        this.attaque = attaque;
        this.defense = defense;
        this.arme = null;
        this.armure = null;
    }

    // Méthodes


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public int getPointsDeVie() {
        return pointsDeVie;
    }

    public void setPointsDeVie(int pointsDeVie) {
        this.pointsDeVie = pointsDeVie;
    }

    public int getPointsDeMagie() {
        return pointsDeMagie;
    }

    public void setPointsDeMagie(int pointsDeMagie) {
        this.pointsDeMagie = pointsDeMagie;
    }

    public int getAttaque() {
        return attaque;
    }

    public void setAttaque(int attaque) {
        this.attaque = attaque;
    }

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public Arme getArme() {
        return arme;
    }

    public void setArme(Arme arme) {
        this.arme = arme;
    }

    public Armure getArmure() {
        return armure;
    }

    public void setArmure(Armure armure) {
        this.armure = armure;
    }

    // Méthode pour narguer un monstre
    public void narguerMonstre() {
        System.out.println("Haha, vilain monstre !");
    }

    // Méthode permet de fuir le combat
    public boolean fuirCombat() {
        return Math.random() < 0.4;
    }
}
