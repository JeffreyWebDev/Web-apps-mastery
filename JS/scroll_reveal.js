document.addEventListener("DOMContentLoaded", function () {
    // Navbar toggle menu *******************
    let mainMenu = document.getElementById("mainMenu");

    function showMenu() {   
        mainMenu.style.right = "0";
    }

    function hideMenu() {   
        mainMenu.style.right = "-380px";
    }

    showMenu();
    hideMenu();

    // let showMenu = document.querySelector(".showMenu");
//    let hideMenu = document.querySelector(".hideMenu");

//     showMenu.addEventListener("click", function() {
//         showMenu.style.right = "0";
//     });

//     hideMenu.addEventListener("click", function() {
//         hideMenu.style.right = "-380px";
//     });


    // Navbar transition *******************
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 250);
    });


    // scroll reveal animation ******************************************
    ScrollReveal({
    reset: true,
    distance: "50px",
    delay: 400,
    duration: 2000
    })

    ScrollReveal().reveal(".main-heading, .primary-heading, .title", {
        delay: 500,
        origin: "bottom",
        interval: 200
    })

    ScrollReveal().reveal(".slider-inner-01, .slider-inner-02, .slider-inner-03", {
        delay: 500,
        origin: "bottom",
    })

    ScrollReveal().reveal(".text_box, .copyright",{
        delay: 500,
        origin: "bottom",
        distance: "60px",
    })

    ScrollReveal().reveal(".footer-flex .footer-logo, .about-company .company_container", {
        delay: 500,
        origin: "left",
        interval: 300,
        distance: "200px"
    })
})
