class Chronometre {
    constructor(btn, span) {
        this.temps = 0;
        this.spanChrono = span;
        btn.addEventListener("click", (e) => {
            this.chrono(e);
        });

    }

    chrono(e) {
        this.temps += 1;
        this.spanChrono.innerHTML = this.format(this.getHeures(), "h")+this.format(this.getMinutes(), "m")+this.format(this.getSecondes(), "s")+this.getDixiemes()+ "'";
    }


    format(nombre,unité) {
        if (nombre < 10) return "0"+nombre+unité;
        else return ""+nombre+unité;
    }

    getHeures() {
        let nbSecondes = Math.floor(this.temps  / 10);
        let nbH = Math.floor(nbSecondes / 3600);

        return nbH;
    }

    getMinutes() {
        let nbSecondes = Math.floor(this.temps  / 10);
        nbSecondes = nbSecondes - this.getHeures()*3600;
        let nbM = Math.floor( nbSecondes  / 60);

        return nbM;
    }

    getSecondes() {
        let nbSecondes = Math.floor(this.temps  / 10);
        nbSecondes = nbSecondes - this.getHeures()*3600 - this.getMinutes() * 60;
        return nbSecondes;
    }

    getDixiemes() {
        let nbDixièmes = this.temps  % 10;
        return nbDixièmes
    }


}