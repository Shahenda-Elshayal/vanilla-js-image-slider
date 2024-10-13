let img = document.querySelectorAll(".img-holder img");
let next = document.querySelector(".next");
let prev = document.querySelector(".previous");
let ul = document.querySelector("ul");
let slideNum = document.querySelector(".slide-num");

let currentSlide = 0;
let theListItem = [];

let imgArr = Array.from(img);

imgArr.forEach((e, i) => {
    let list = document.createElement("li");
    list.innerHTML = i + 1;
    ul.append(list);
    theListItem.push(list);
    if (currentSlide == i) {
        list.classList.add("active");
    }

})

prev.classList.add("disabled");
slideNum.innerHTML = `Slide #${currentSlide + 1}`

next.addEventListener("click", nextCheck);
prev.addEventListener("click", prevCheck);

function nextCheck() {
    if (currentSlide < imgArr.length - 1) {
        currentSlide++;
        slideNum.innerHTML = `Slide #${currentSlide + 1}`
        theChecker();
    }
}

function prevCheck() {
    if (currentSlide > 0) {
        currentSlide--;
        slideNum.innerHTML = `Slide #${currentSlide + 1}`
        theChecker();
    }
}

function theChecker() {
    imgArr.forEach((e, i) => {
        e.classList.remove("active");
        if (i == currentSlide) {
            e.classList.add("active");
        }
    })

    theListItem.forEach((e, i) => {
        e.classList.remove("active");
        if (i == currentSlide) {
            e.classList.add("active");
        }
    })

    if (currentSlide == 0) {
        prev.classList.add("disabled");
    }
    else {
        prev.classList.remove("disabled");
    }

    if (currentSlide == imgArr.length - 1) {
        next.classList.add("disabled");
    }
    else {
        next.classList.remove("disabled");
    }
}

theListItem.forEach((e, i) => {
    e.addEventListener("click", function () {
        currentSlide = i;
        slideNum.innerHTML = `Slide #${currentSlide + 1}`
        theChecker();
    });
})




