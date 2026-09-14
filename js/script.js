// ================================
// MODERN PORTFOLIO JAVASCRIPT
// ================================


// ================================
// SELECT ELEMENTS
// ================================

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');
const backTop = document.querySelector('.back-top');


// ================================
// MOBILE MENU
// ================================

if (menuIcon) {

    menuIcon.addEventListener('click', () => {

        navbar.classList.toggle('active');

        const icon = menuIcon.querySelector('i');

        if (navbar.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }

    });

}


// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');

        const icon = menuIcon?.querySelector('i');

        if (icon) {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }

    });

});


// ================================
// ACTIVE NAVIGATION ON SCROLL
// ================================

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active');

        const target = link.getAttribute('href');

        if (target === `#${currentSection}`) {
            link.classList.add('active');
        }

    });

});


// ================================
// BACK TO TOP BUTTON
// ================================

window.addEventListener('scroll', () => {

    if (backTop) {

        if (window.scrollY > 500) {
            backTop.classList.add('show');
        } else {
            backTop.classList.remove('show');
        }

    }

});


// ================================
// SMOOTH SCROLL
// ================================

navLinks.forEach(link => {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (
            targetId &&
            targetId.startsWith('#') &&
            targetId.length > 1
        ) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        }

    });

});


// ================================
// TYPING EFFECT
// ================================

const typingText = document.querySelector('.typing-area strong');

const typingWords = [
    'Front-End Developer',
    'UX/UI Designer',
    'WordPress Developer',
    'Web Developer',
    'Creative Designer'
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingEffect() {

    if (!typingText) return;

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );

}

typingEffect();


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    '.section-heading, .about-image, .about-content, .service-card, .timeline-item, .skills-box, .contact-info, .contact-form'
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add('reveal');

    revealObserver.observe(element);

});


// ================================
// SKILL BAR ANIMATION
// ================================

const skillBoxes = document.querySelectorAll('.skills-box');


const skillObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bars =
                    entry.target.querySelectorAll('.skill-bar span');

                bars.forEach(bar => {

                    const width = bar.style.width;

                    bar.style.width = '0';

                    setTimeout(() => {

                        bar.style.width = width;

                    }, 200);

                });

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.3
    }
);


skillBoxes.forEach(box => {

    skillObserver.observe(box);

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.querySelector('#contactForm');


if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const name =
            document.querySelector('#name').value.trim();

        const email =
            document.querySelector('#email').value.trim();

        const mobile =
            document.querySelector('#mobile').value.trim();

        const subject =
            document.querySelector('#subject').value.trim();

        const message =
            document.querySelector('#message').value.trim();


        if (
            !name ||
            !email ||
            !mobile ||
            !subject ||
            !message
        ) {

            alert('Please fill in all fields.');

            return;

        }


        // Temporary mail action.
        // Secure backend/API can be connected later.

        const mailSubject =
            encodeURIComponent(subject);

        const mailBody =
            encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Mobile: ${mobile}\n\n` +
                `Message:\n${message}`
            );


        window.location.href =
            `mailto:sahilalee21@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    });

}


// ================================
// HEADER BACKGROUND ON SCROLL
// ================================

const header = document.querySelector('.header');


window.addEventListener('scroll', () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});


// ================================
// PREVENT MENU FROM STAYING OPEN
// ================================

window.addEventListener('resize', () => {

    if (window.innerWidth > 850) {

        navbar.classList.remove('active');

        const icon = menuIcon?.querySelector('i');

        if (icon) {

            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');

        }

    }

});


// ================================
// PAGE LOADED
// ================================

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});
