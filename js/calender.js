//產生年
(function () {
    let html = '';
    let nowYear = new Date().getFullYear(); //取得今年
    for (let i = nowYear - 50; i <= nowYear + 50; i++){
        html += "<option";
        if (i === nowYear) {
            html += " selected";
        }
        html += ">" + i + "</option>";
    }
    document.querySelector('#year').innerHTML = html;
})();

//產生月
(function () {
    let html = '';
    let nowMonth = new Date().getMonth() + 1;
    for (let i = 1; i <= 12; i++) {
        html += "<option";
        if (i === nowMonth) {
            html += " selected";
        }
        html += ">" + i + "</option>";
    }
    document.querySelector('#month').innerHTML = html;
})();


//選取事件
(function () {
    document.querySelectorAll('select').forEach(function (el) {
        el.addEventListener('change', function () {
            buildCalender(document.querySelector('#year').value ,
                document.querySelector('#month').value);
        })
        el.dispatchEvent(new Event('change'));
    })
})();

function buildCalender(year, month) {
    let html = '';
    month = month - 1;
    let first = new Date(year, month, 1).getDay(); //每個月第一天
    let last = (function () {
        let d = new Date(year, month, 1);
        d.setMonth(d.getMonth() + 1);
        d.setDate(0);
        return d.getDate();
    })();
    let index = 1;
    for (let rows = 0; rows < 6; rows++){
        if (index > last) break;
        html += '<tr>';
        for (let cells = 0; cells < 7; cells++){
            html += '<td>';
            if (cells + (rows * 7) >= first) {
                if (index > last) break;
                html += index;
                index++;
                }
            html += '</td>';
        }
        html += '</td>';
    }
    document.querySelector('tbody').innerHTML = html;
}

