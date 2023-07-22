const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-on");
const navLinks = document.querySelector(".nav-links");
let hamburgerOpen = false;

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})

hamburger.addEventListener("click", function() {
    if(!hamburgerOpen) {
        navLinks.classList.toggle("show-navlinks");
        hamburger.classList.toggle("hamburger-off")
    } else{
        navLinks.classList.remove("show-navlinks");
        hamburger.classList.remove("hamburger-off");
        hamburgerOpen = false;
    }
})


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


function showScroll(id) { 
    var offset = 0;
    $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
} 


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

$('.slide').hiSlide();


var swiper = new Swiper(".card_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

