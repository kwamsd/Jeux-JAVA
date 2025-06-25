package entites;

public class Arme {
    private String nom;
    private int degats;
    private TypeElementaire typeElementaire;

    public Arme(String nom, int degats, TypeElementaire typeElementaire) {
        this.nom = nom;
        this.degats = degats;
        this.typeElementaire = typeElementaire;
    }

    // Getters et setters

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getDegats() {
        return degats;
    }

    public void setDegats(int degats) {
        this.degats = degats;
    }

    public TypeElementaire getTypeElementaire() {
        return typeElementaire;
    }

    public void setTypeElementaire(TypeElementaire typeElementaire) {
        this.typeElementaire = typeElementaire;
    }
}
