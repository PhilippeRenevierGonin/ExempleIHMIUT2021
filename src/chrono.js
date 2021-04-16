let temps = 0;

function chrono(e) {
    temps += 1;
    let spanChrono = document.querySelector("span");
    spanChrono.innerHTML = temps;
}