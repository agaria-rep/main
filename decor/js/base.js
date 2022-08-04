let mode = "normal";

if (mode == "emergency") {
    window.location.replace("/errors/emergency-tech.html");
} else if ((mode == "normal") || (mode == "tech")) {

    let addm = document.querySelector('#menu').innerHTML;

    let menu = `<header><a href="/main" class="logo">НРА</a><nav><a href="/main">Главная</a><a href="/main/news/">Новости</a><a href="/main/info/">Статьи</a></nav><button id="themeSwitch" onclick="toggleTheme()"><img src="${addm}media/imgs/theme/moon.png"></button></header>`;

    document.querySelector('#menu').innerHTML = menu;

    let addf = document.querySelector('#footer').innerHTML;

    let footer = `<footer><img src="${addf}media/imgs/logo.png" alt="logo" class="footer-img"><div class="con"><div class="nra">НРА</div><a href="https://vk.com/agaria_official" class="vk">VK</a></div></footer>`;

    document.querySelector('#footer').innerHTML = footer;
} else if (mode == "tech") {
    let tech = `<span>Сайт на технических работах! </span><span>Не все может отображатся правильно!</span>`;

    document.querySelector('#tech').innerHTML = tech;
    document.querySelector('#tech').style.height = "75px"
}

if (mode == "normal") {
    if (window.location.toString().includes("errors")) window.location = "/main";
}

function toggleTheme() {
    document.querySelector(":root").classList.toggle("dark");
    
    if (document.querySelector(":root").classList.length > 0)
        document.querySelector("#themeSwitch img").setAttribute("src", `media/imgs/theme/sun.png`);
    else
        document.querySelector("#themeSwitch img").setAttribute("src", `media/imgs/theme/moon.png`);
}