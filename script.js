const Bttn = document.querySelector("#menu");
const navBar = document.querySelector(".mobile-menu");
const linK = document.querySelector(".lnk");

const rev_right = document.querySelector(".reviews_right");
const rev_middle = document.querySelector(".reviews_middle");
const rev_left = document.querySelector(".reviews_left");

const first_pageIcon = document.querySelector("#first-page-icon");
const second_pageIcon1 = document.querySelector("#second-page-icon1");
const second_pageIcon2 = document.querySelector("#second-page-icon2");
const last_pageIcon = document.querySelector("#last-page-icon");

/*
============================================
Menu Icon Open and Close Function
============================================
*/
Bttn.addEventListener("click", () => {
    //close menu
    if (Bttn.classList.contains('menu-open')) {
        console.log('Menu Closed')
        Bttn.classList.remove('menu-open')
        navBar.classList.remove('nav-open')
    }//Open menu
    else {
        console.log('Menu Opened')
        Bttn.classList.add('menu-open')
        navBar.classList.add('nav-open')
    }
})
//Menu Links Closing Function
linK.onclick = () => {
    Bttn.classList.remove('menu-open')
    navBar.classList.remove('nav-open')
}
/*
===========================================
Reviews Carousel Function
===========================================
*/
first_pageIcon.onclick = () => {
    console.log('Got second page!')
    rev_middle.classList.add('next_review_right')
}

second_pageIcon1.onclick = () => {
    console.log('Got third page!')
    rev_left.classList.add('next_review_double-right')
}

second_pageIcon2.onclick = () => {
    console.log('Got first page!')
    rev_middle.classList.remove('next_review_right')
}

last_pageIcon.onclick = () => {
    console.log('Got second page again!')
    rev_left.classList.remove('next_review_double-right')
}