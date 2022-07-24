let news_array = [
    {
        "name" : "Новые маршруты",
        "link" : "july-22-2018",
        "text" : "Сегодня гос. компания по ЖД перевозкам KėretaAgariâ начинает первые рейсы..."
    },
    {
        "name" : "Новые банкноты",
        "link" : "july-13-2311",
        "text" : "ЦБ Агарии принял решение перейти полностью на купюры с использованием пластик..."
    },
    {
        "name" : "День Агарии",
        "link" : "july-07-1300",
        "text" : "Сегодня исполняется год как наша страна появилась..."
    }
];

function innerThreeLast() {
    for (let i = 0; (i < news_array.length) && (i < 3); i++) {
        let elem = document.createElement('div');
        elem.innerHTML = `
        <h2><a href="main/news/${news_array[i].link}.html">${news_array[i].name}</a></h2>
        <div class="text">${news_array[i].text}</div>
        `
        elem.className = "news-new";
        elem.style = `background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(media/imgs/news/${news_array[i].link}.png);
        background-position: center;
        background-size: cover;`;

        document.querySelector(".news .w").appendChild(elem);
    }
}

function innerLast() {
    for (let i = 0; i < news_array.length; i++) {
        let elem = document.createElement('div');
        elem.innerHTML = `
        <img src="../media/imgs/news/${news_array[i].link}.png"/>
        <div class="w">
            <h2><a href="/main/news/${news_array[i].link}.html">${news_array[i].name}</a></h2>
            <div class="text">${news_array[i].text}</div>
        </div>
        `
        elem.className = "news-new";

        document.querySelector(".news").appendChild(elem);
    }
}

if (document.title == "Главная") {
    innerThreeLast();
}

if (document.title == "Новости") {
    innerLast();
}