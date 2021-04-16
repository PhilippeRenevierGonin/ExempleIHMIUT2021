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
        this.spanChrono.innerHTML = this.temps;
    }


}