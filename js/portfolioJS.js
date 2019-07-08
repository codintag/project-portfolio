let scrollNav = document.getElementById("scrollNav");


window.onscroll = () => {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        scrollNav.style.backgroundColor = "#7125db";
    } else {
        scrollNav.style.backgroundColor = "#418FDE";
    }
}


