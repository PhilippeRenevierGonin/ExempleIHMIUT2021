class ChronoControleur {
    constructor(modele, vue) {
        this.modele = modele;
        this.vue = vue;
        this.interval = 0;

        // @todo commebt accéder au bouton ? 
        this.vue.écouterPanneauDeContrôle(this);

    }

    démarrer() {
        this.modele.chrono();
        this.interval = setInterval(() => this.modele.chrono(), 100);
    }

    stopperOuRelancer() {
        if (this.interval === 0) {
            this.démarrer();
            // @todo commebt accéder au bouton ? 
            this.vue.modifierPanneauDeContrôle("stop");
        }
        else {
            clearInterval(this.interval);
            this.interval = 0;
            // @todo commebt accéder au bouton ? 
            this.vue.modifierPanneauDeContrôle("play");

        }
    }

}


document.addEventListener("DOMContentLoaded", () => {
    let vue = new ChronoVue(1);
    let modele = new ChronoModele();
    modele.ajouterEcouteur(vue);
    let ctrl = new ChronoControleur(modele, vue);
    ctrl.démarrer();
});