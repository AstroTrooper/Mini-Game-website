// var lastScrollTop = 0;
// navbar = document.getElementById("navbar");
// window.addEventListener("scroll",function(){
//     var scrollTop = window.pageYOffset || document.getElement.scrollTop;
//     if(scrollTop > lastScrollTop){
//         navbar.style.top ="-80px";
//     }else{
//         navbar.style.top ="0";
//     }
//     lastScrollTop = scrollTop;
// })
const nav = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
    if(lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
    }else{
        nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});
function slope_game(){
    window.location.href = "slope(game).html"
}