package entites;

public class Armure {
    private String nom;
    private int protection;
    private TypeElementaire typeElementaire;

    public Armure(String nom, int protection, TypeElementaire typeElementaire) {
        this.nom = nom;
        this.protection = protection;
        this.typeElementaire = typeElementaire;
    }

    // Getters et setters

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getProtection() {
        return protection;
    }

    public void setProtection(int protection) {
        this.protection = protection;
    }

    public TypeElementaire getTypeElementaire() {
        return typeElementaire;
    }

    public void setTypeElementaire(TypeElementaire typeElementaire) {
        this.typeElementaire = typeElementaire;
    }
}
