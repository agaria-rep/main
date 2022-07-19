function replays_zas(mode) {
    if (mode == 1) {
        document.querySelector('#zas h1').innerHTML = "НРА";
    } else {
        document.querySelector('#zas h1').innerHTML = "Народная Республика Агария";
    }
}

if (document.documentElement.clientWidth < 556) {replays_zas(1);}
window.onresize = function() {document.documentElement.clientWidth < 556 ? replays_zas(1) : replays_zas(0);}