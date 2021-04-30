class ChronoVue  {
    constructor(position) {

         // structure html
         this.spanChrono = document.createElement("span");
         this.btn = document.createElement("button");
         this.btn.innerHTML="stop";
 
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

    }

    format(nombre,unité) {
        if (nombre < 10) return "0"+nombre+unité;
        else return ""+nombre+unité;
    }


    // déplacé dans la vue après chaque modification du modèle 
    // dans la méthode update.
    update(heures, minutes, secondes, dixiemes) {
        this.spanChrono.innerHTML = this.format(heures, "h")+this.format(minutes, "m")+this.format(secondes, "s")+dixiemes+ "'";
    }

    /*
    // on expose directement le bouton
    getBouton() {
        return this.btn;
    }
    */

    /*
    // on passe la méthode en paramètre
    écouterPanneauDeContrôle(callback) {
        this.btn.addEventListener("click", () => callback());
    }
    */

    // on passe un objet en paramètre
    écouterPanneauDeContrôle(ctrl) {
        this.btn.addEventListener("click", () => ctrt.stopperOuRelancer());
    }

    // changement de mode
    modifierPanneauDeContrôle(mode) {
        // on pourrait faire des tests sur la valeur de mode
        // mais ici on fait un raccourci
        this.btn.innerHTML = mode;
    }

}