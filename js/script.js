/* =========================================
   HEADER / NAVBAR
========================================= */

const header = document.querySelector(".header");

const menuBtn = document.querySelector("#menu-btn");

const navbar = document.querySelector("#navbar");

const navLinks = document.querySelectorAll(".navbar a");

const sections = document.querySelectorAll("section[id]");


/* Header scroll effect */

window.addEventListener("scroll", () => {

    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );


    /* Active navigation */

    let current = "";


    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        if(window.scrollY >= top){

            current = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href")
            === `#${current}`
        );

    });

});



/* =========================================
   MOBILE MENU
========================================= */

menuBtn.addEventListener("click", () => {

    const open =
        navbar.classList.toggle("open");


    menuBtn.setAttribute(
        "aria-expanded",
        open
    );


    menuBtn.innerHTML = open

        ? "<i class='bx bx-x'></i>"

        : "<i class='bx bx-menu'></i>";

});


/* Close menu after clicking */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.innerHTML =
            "<i class='bx bx-menu'></i>";

    });

});



/* =========================================
   TYPING ANIMATION
========================================= */

const roles = [

    "Front-End Developer",

    "UI/UX Designer",

    "WordPress Developer",

    "Web Designer"

];


const typingText =
    document.querySelector("#typing-text");


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeRole(){

    const current =
        roles[roleIndex];


    if(!deleting){

        charIndex++;

        typingText.textContent =
            current.slice(0, charIndex);


        if(charIndex === current.length){

            deleting = true;

            setTimeout(
                typeRole,
                1500
            );

            return;

        }

    }

    else{

        charIndex--;

        typingText.textContent =
            current.slice(0, charIndex);


        if(charIndex === 0){

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }


    setTimeout(

        typeRole,

        deleting
            ? 45
            : 80

    );

}


typeRole();



/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target
                        .classList
                        .add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold:0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* =========================================
   CONTACT FORM
========================================= */

/*
   GitHub Pages is a static website.

   Therefore we don't put SMTP passwords
   inside JavaScript.

   Instead, this opens the visitor's
   email application with the message
   already prepared.
*/


document
    .querySelector("#contact-form")
    .addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            const name =
                document
                .querySelector("#name")
                .value
                .trim();


            const email =
                document
                .querySelector("#email")
                .value
                .trim();


            const mobile =
                document
                .querySelector("#mobile")
                .value
                .trim();


            const subject =
                document
                .querySelector("#subject")
                .value
                .trim();


            const message =
                document
                .querySelector("#message")
                .value
                .trim();


            const body =

`Name: ${name}

Email: ${email}

Mobile: ${mobile}

Message:

${message}`;


            const mailto =

                `mailto:sahilalee21@gmail.com` +

                `?subject=${
                    encodeURIComponent(subject)
                }` +

                `&body=${
                    encodeURIComponent(body)
                }`;


            window.location.href = mailto;

        }
    );
