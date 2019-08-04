const xhr = new XMLHttpRequest();

xhr.open('get',
    'https://data.taipei/api/getDatasetInfo/downloadResource?id=8a569b5b-0cb1-4c7f-a064-780b3301354c&rid=639b4d6f-e58f-47b1-900d-c2a692c436cf',
    true
);

xhr.send(null);

xhr.onload = function () {

    if (xhr.status == 200) {
        let str = JSON.parse(xhr.responseText);
        document.querySelector('.name').textContent = str[15].品牌名稱
        document.querySelector('.message').textContent = str[15].品牌故事
        document.querySelector('.name1').textContent = str[2].品牌名稱
        document.querySelector('.message1').textContent = str[2].品牌故事
        document.querySelector('.name2').textContent = str[3].品牌名稱
        document.querySelector('.message2').textContent = str[3].品牌故事
        document.querySelector('.name3').textContent = str[4].品牌名稱
        document.querySelector('.message3').textContent = str[4].品牌故事


    } else {
        console.log('錯誤');
    }
}