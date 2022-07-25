let info_array = [
    {
        "name" : "День Агарии",
        "link" : "july-07-1300",
        "more" : "Сегодня исполняется год как наша страна появилась..."
    }
];

function innerLast() {
    for (let i = 0; i < info_array.length; i++) {
        let elem = document.createElement('div');
        elem.innerHTML = `
        <img src="../media/imgs/info/${info_array[i].link}.png"/>
        <div class="w">
            <h2><a href="/main/info/${info_array[i].link}.html">${info_array[i].name}</a></h2>
            <div class="text">${info_array[i].more}</div>
        </div>
        `
        elem.className = "info-new";

        document.querySelector(".info").appendChild(elem);
    }
}

if (document.title == "Статьи") {
    innerLast();
}