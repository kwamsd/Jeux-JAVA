package entites;

public enum TypeElementaire {
    FEU,
    BOIS,
    EAU,
    METAL,
    TERRE;

    // l'élément courant est efficace contre un autre élément
    public boolean estEfficaceContre(TypeElementaire autreElement) {
        switch (this) {
            case FEU:
                return autreElement == TypeElementaire.METAL;
            case BOIS:
                return autreElement == TypeElementaire.TERRE;
            case EAU:
                return autreElement == TypeElementaire.FEU;
            case METAL:
                return autreElement == TypeElementaire.BOIS;
            case TERRE:
                return autreElement == TypeElementaire.EAU;
            default:
                return false;
        }
    }

    //  si l'élément courant est faible contre un autre élément
    public boolean estFaibleContre(TypeElementaire autreElement) {
        switch (this) {
            case FEU:
                return autreElement == TypeElementaire.EAU;
            case BOIS:
                return autreElement == TypeElementaire.METAL;
            case EAU:
                return autreElement == TypeElementaire.TERRE;
            case METAL:
                return autreElement == TypeElementaire.FEU;
            case TERRE:
                return autreElement == TypeElementaire.BOIS;
            default:
                return false;
        }
    }
}
