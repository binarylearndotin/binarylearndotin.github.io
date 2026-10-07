document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuIcon =
        document.getElementById("menu-icon");

    const menuCloseIcon =
        document.getElementById("menu-close-icon");

    const nav =
        document.querySelector("nav");


    if (menuIcon && menuCloseIcon && nav) {

        menuIcon.addEventListener("click", function () {

            nav.classList.add("active");

        });


        menuCloseIcon.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    }


    /* =====================================================
       NAVIGATION
       ACTIVE LINK CHANGES ON CLICK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            "#nav-links a"
        );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            /* ---------------------------------------------
               REMOVE ACTIVE FROM ALL LINKS
            --------------------------------------------- */

            navLinks.forEach(function (navLink) {

                navLink.classList.remove("active");

            });


            /* ---------------------------------------------
               ADD ACTIVE TO CLICKED LINK
            --------------------------------------------- */

            this.classList.add("active");


            /* ---------------------------------------------
               CLOSE MOBILE MENU
            --------------------------------------------- */

            if (nav) {

                nav.classList.remove("active");

            }


            /* ---------------------------------------------
               IGNORE EMPTY LINKS
            --------------------------------------------- */

            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            /* ---------------------------------------------
               FIND TARGET SECTION
            --------------------------------------------- */

            const targetElement =
                document.querySelector(targetId);


            /* ---------------------------------------------
               SMOOTH SCROLL
            --------------------------------------------- */

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function () {

                const nameInput =
                    contactForm.querySelector(
                        'input[name="name"]'
                    );


                const username =
                    nameInput &&
                    nameInput.value.trim()
                        ? nameInput.value.trim()
                        : "User";


                setTimeout(function () {

                    alert(
                        "Dear " +
                        username +
                        ",\n" +
                        "Your form submitted successfully!\n" +
                        "Binary Learn will contact you soon."
                    );

                }, 300);

            }
        );

    }


    /* =====================================================
       REFRESH CONTACT FORM
    ===================================================== */

    const refreshButton =
        document.getElementById(
            "refreshButton"
        );


    if (
        refreshButton &&
        contactForm
    ) {

        refreshButton.addEventListener(
            "click",
            function () {

                contactForm.reset();

            }
        );

    }

});