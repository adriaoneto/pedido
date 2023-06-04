function sim() {
    alert("Vc aceitou namorar comigo :)")
    location.href ="https://youtu.be/izGwDsrQ1eQ";    
}

function desvia(t) {
    var btn = t
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(30, 70);
    btn.style.left = geraPosicao(30, 70);
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + min + "%";
}
