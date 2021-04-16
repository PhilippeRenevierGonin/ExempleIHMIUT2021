class Chronometre {
    constructor(position) {
        this.temps = -1;

        // structure html
        this.spanChrono = document.createElement("span");
        this.chrono();
        this.btn = document.createElement("button");
        this.btn.innerHTML="chronométrer";

        let aside = document.createElement("aside");
        aside.appendChild(this.btn);
        aside.appendChild(this.spanChrono);

        document.body.appendChild(aside);

        // mise en forme en js
        this.spanChrono.style.fontFamily = "Courier New, monospace";
        // ou this.spanChrono = "font-familly : Courier New, monospace"; // écrase d'autre modification de .style. précédocument
        // ou this.spanChrono.setAttribute("style", "font-family : Courier New, monospace");

        let top = "0em";
        console.log(position);
        if (position) {
            top = ""+1.2*position+"em";
        }    
        aside.setAttribute("style", "position : absolute; right: 0; top: "+top+"; background: rgba(232,232,232,0.75);padding-right: 0.5rem;");


        this.btn.addEventListener("click", (e) => {
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


    démarrer() {
        this.interval = setInterval(() => this.chrono(), 100);
    }


}