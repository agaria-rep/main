let addm = document.querySelector('#menu').innerHTML;

let menu = "<header><a href=\"/main\" class=\"logo\">НРА</a><nav><ul class=\"menu\"><li><a href=\"/main\">Главная</a></li><li><a href=\"/main/news/\">Новости</a></li><li><a href=\"/main/info/\">Статьи</a></li></ul></nav></header>";

document.querySelector('#menu').innerHTML = menu;

let addf = document.querySelector('#footer').innerHTML;

let footer = "<footer><img src=\""+addf +"media/imgs/logo.png\" alt=\"logo\" class=\"footer-img\"><div class=\"con\"><div class=\"nra\">НРА</div><a href=\"https://vk.com/agaria_official\" class=\"vk\">VK</a></div></footer>";

document.querySelector('#footer').innerHTML = footer;

let tech = "<span>Сайт на технических работах! </span><span>Не все может отображатся правильно!</span>";

document.querySelector('#tech').innerHTML = tech;