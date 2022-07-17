let menu = "<header><a href=\"#\" class=\"logo\">НРА</a><nav><ul class=\"menu\"><li><a href=\"\">Главная</a></li><li><a href=\"\">Новости</a></li><li><a href=\"\">Статьи</a></li></ul></nav></header>";

document.getElementById('menu').innerHTML = menu;

let footer = "<footer><img src=\"media/imgs/logo.png\" alt=\"logo\" class=\"footer-img\"><div class=\"con\"><div class=\"nra\">НРА</div><a href=\"https://vk.com/agaria_official\" class=\"vk\">VK</a></div></footer>";

document.getElementById('footer').innerHTML = footer;

document.getElementsByClassName('disclaimer').style = 'visibility: hidden;';