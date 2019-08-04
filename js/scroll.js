

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        if (timeout) return;
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

let images = document.querySelectorAll("img");
function scrollHandler() {

    let windowTop = window.scrollY;
    let windowBottom = windowTop + window.innerHeight;

    images.forEach(img => {
        let imgCenter = img.offsetTop + img.height / 2;
        if (imgCenter < windowBottom &&
            imgCenter > windowTop) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    })
}

window.addEventListener("scroll", scrollHandler);



