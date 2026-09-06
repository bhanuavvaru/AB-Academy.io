/* =========================================================
   SKILLFORGE ACADEMY
   MAIN JAVASCRIPT
========================================================= */




document.addEventListener(
    "DOMContentLoaded",
    function () {




        /* =================================================
           LUCIDE ICONS
        ================================================= */


        if (window.lucide) {


            lucide.createIcons();


        }






        /* =================================================
           MOBILE MENU
        ================================================= */


        const menuButton =
            document.getElementById(
                "mobileMenuBtn"
            );


        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );




        if (
            menuButton &&
            mobileMenu
        ) {


            menuButton.addEventListener(
                "click",
                function () {


                    mobileMenu.classList.toggle(
                        "show"
                    );


                    document.body.classList.toggle(
                        "menu-open"
                    );




                    const isOpen =
                        mobileMenu.classList.contains(
                            "show"
                        );




                    menuButton.innerHTML =
                        isOpen


                        ? '<i data-lucide="x"></i>'


                        : '<i data-lucide="menu"></i>';




                    if (window.lucide) {


                        lucide.createIcons();


                    }


                }
            );




            /* CLOSE MOBILE MENU */


            mobileMenu
                .querySelectorAll("a")
                .forEach(
                    function (link) {


                        link.addEventListener(
                            "click",
                            function () {


                                mobileMenu.classList.remove(
                                    "show"
                                );


                                document.body.classList.remove(
                                    "menu-open"
                                );


                                menuButton.innerHTML =
                                    '<i data-lucide="menu"></i>';


                                lucide.createIcons();


                            }
                        );


                    }
                );


        }






        /* =================================================
           FAQ ACCORDION
        ================================================= */


        const faqItems =
            document.querySelectorAll(
                ".faq-item"
            );




        faqItems.forEach(
            function (item) {


                const question =
                    item.querySelector(
                        ".faq-question"
                    );




                question.addEventListener(
                    "click",
                    function () {




                        const alreadyOpen =
                            item.classList.contains(
                                "active"
                            );




                        /* CLOSE ALL */


                        faqItems.forEach(
                            function (otherItem) {


                                otherItem.classList.remove(
                                    "active"
                                );


                            }
                        );




                        /* OPEN SELECTED */


                        if (!alreadyOpen) {


                            item.classList.add(
                                "active"
                            );


                        }


                    }
                );


            }
        );






        /* =================================================
           BACK TO TOP
        ================================================= */


        const backToTop =
            document.getElementById(
                "backToTop"
            );




        window.addEventListener(
            "scroll",
            function () {




                if (
                    window.scrollY >
                    500
                ) {


                    backToTop.classList.add(
                        "active"
                    );


                } else {


                    backToTop.classList.remove(
                        "active"
                    );


                }


            }
        );




        backToTop.addEventListener(
            "click",
            function () {


                window.scrollTo(
                    {
                        top: 0,
                        behavior: "smooth"
                    }
                );


            }
        );






        /* =================================================
           NAVBAR SHADOW
        ================================================= */


        const navbar =
            document.querySelector(
                ".navbar"
            );




        window.addEventListener(
            "scroll",
            function () {




                if (
                    window.scrollY >
                    20
                ) {


                    navbar.style.boxShadow =
                        "0 8px 30px rgba(15,35,65,.07)";


                } else {


                    navbar.style.boxShadow =
                        "none";


                }


            }
        );






        /* =================================================
           SMOOTH ANCHOR SCROLL
        ================================================= */


        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                function (link) {




                    link.addEventListener(
                        "click",
                        function (event) {




                            const targetId =
                                this.getAttribute(
                                    "href"
                                );




                            if (
                                targetId ===
                                "#"
                            ) {


                                return;


                            }




                            const target =
                                document.querySelector(
                                    targetId
                                );




                            if (target) {


                                event.preventDefault();




                                target.scrollIntoView(
                                    {
                                        behavior:
                                            "smooth",


                                        block:
                                            "start"
                                    }
                                );


                            }


                        }
                    );


                }
            );






        /* =================================================
           SIMPLE SCROLL REVEAL
        ================================================= */


        const revealElements =
            document.querySelectorAll(
                ".program-card, .feature-card, .career-card, .project-card, .testimonial-card, .outcome-card, .tool-card"
            );




        const revealObserver =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {




                    entries.forEach(
                        function (entry) {




                            if (
                                entry.isIntersecting
                            ) {




                                entry.target.style.opacity =
                                    "1";


                                entry.target.style.transform =
                                    "translateY(0)";




                                observer.unobserve(
                                    entry.target
                                );


                            }


                        }
                    );


                },
                {
                    threshold: 0.12
                }
            );




        revealElements.forEach(
            function (element) {




                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(25px)";


                element.style.transition =
                    "opacity .7s ease, transform .7s ease";




                revealObserver.observe(
                    element
                );


            }
        );




    }
);

/* =========================================================
   SKILLFORGE ACADEMY
   MAIN JAVASCRIPT
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           LUCIDE ICONS
        ================================================= */

        if (window.lucide) {

            lucide.createIcons();

        }



        /* =================================================
           MOBILE MENU
        ================================================= */

        const menuButton =
            document.getElementById(
                "mobileMenuBtn"
            );

        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        if (
            menuButton &&
            mobileMenu
        ) {

            menuButton.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.toggle(
                        "show"
                    );

                    document.body.classList.toggle(
                        "menu-open"
                    );


                    const isOpen =
                        mobileMenu.classList.contains(
                            "show"
                        );


                    menuButton.innerHTML =
                        isOpen

                        ? '<i data-lucide="x"></i>'

                        : '<i data-lucide="menu"></i>';


                    if (window.lucide) {

                        lucide.createIcons();

                    }

                }
            );


            mobileMenu
                .querySelectorAll("a")
                .forEach(
                    function (link) {

                        link.addEventListener(
                            "click",
                            function () {

                                mobileMenu.classList.remove(
                                    "show"
                                );

                                document.body.classList.remove(
                                    "menu-open"
                                );

                                menuButton.innerHTML =
                                    '<i data-lucide="menu"></i>';

                                lucide.createIcons();

                            }
                        );

                    }
                );

        }



        /* =================================================
           FAQ ACCORDION
        ================================================= */

        const faqItems =
            document.querySelectorAll(
                ".faq-item"
            );


        faqItems.forEach(
            function (item) {

                const question =
                    item.querySelector(
                        ".faq-question"
                    );


                if (!question) {
                    return;
                }


                question.addEventListener(
                    "click",
                    function () {


                        const alreadyOpen =
                            item.classList.contains(
                                "active"
                            );


                        faqItems.forEach(
                            function (otherItem) {

                                otherItem.classList.remove(
                                    "active"
                                );

                            }
                        );


                        if (!alreadyOpen) {

                            item.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );



        /* =================================================
           BACK TO TOP
        ================================================= */

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        if (backToTop) {


            window.addEventListener(
                "scroll",
                function () {


                    if (
                        window.scrollY >
                        500
                    ) {

                        backToTop.classList.add(
                            "active"
                        );

                    } else {

                        backToTop.classList.remove(
                            "active"
                        );

                    }

                }
            );


            backToTop.addEventListener(
                "click",
                function () {

                    window.scrollTo(
                        {
                            top: 0,
                            behavior: "smooth"
                        }
                    );

                }
            );

        }



        /* =================================================
           NAVBAR SHADOW
        ================================================= */

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (navbar) {


            window.addEventListener(
                "scroll",
                function () {


                    if (
                        window.scrollY >
                        20
                    ) {

                        navbar.style.boxShadow =
                            "0 8px 30px rgba(15,35,65,.07)";

                    } else {

                        navbar.style.boxShadow =
                            "none";

                    }

                }
            );

        }



        /* =================================================
           SMOOTH ANCHOR SCROLL
        ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                function (link) {


                    link.addEventListener(
                        "click",
                        function (event) {


                            const targetId =
                                this.getAttribute(
                                    "href"
                                );


                            if (
                                targetId ===
                                "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (target) {

                                event.preventDefault();


                                target.scrollIntoView(
                                    {
                                        behavior:
                                            "smooth",

                                        block:
                                            "start"
                                    }
                                );

                            }

                        }
                    );

                }
            );



        /* =================================================
           SCROLL REVEAL
        ================================================= */

        const revealElements =
            document.querySelectorAll(
                ".program-card, .feature-card, .career-card, .project-card, .testimonial-card, .outcome-card, .tool-card, .company-logo-card, .company-feature"
            );


        if (
            "IntersectionObserver"
            in window
        ) {


            const revealObserver =
                new IntersectionObserver(
                    function (
                        entries,
                        observer
                    ) {


                        entries.forEach(
                            function (entry) {


                                if (
                                    entry.isIntersecting
                                ) {


                                    entry.target.style.opacity =
                                        "1";

                                    entry.target.style.transform =
                                        "translateY(0)";


                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.10
                    }
                );


            revealElements.forEach(
                function (element) {


                    element.style.opacity =
                        "0";

                    element.style.transform =
                        "translateY(25px)";

                    element.style.transition =
                        "opacity .7s ease, transform .7s ease";


                    revealObserver.observe(
                        element
                    );

                }
            );

        }



        /* =================================================
           COMPANY LOGO CAROUSEL
        ================================================= */

        const companyTrack =
            document.getElementById(
                "companyTrack"
            );

        const companyPrev =
            document.getElementById(
                "companyPrev"
            );

        const companyNext =
            document.getElementById(
                "companyNext"
            );


        if (
            companyTrack &&
            companyPrev &&
            companyNext
        ) {


            let companyPosition = 0;


            function getVisibleCompanies() {


                if (
                    window.innerWidth <=
                    700
                ) {

                    return 2;

                }


                if (
                    window.innerWidth <=
                    1100
                ) {

                    return 4;

                }


                return 8;

            }



            function getStep() {

                const card =
                    companyTrack.querySelector(
                        ".company-logo-card"
                    );


                if (!card) {

                    return 0;

                }


                const cardWidth =
                    card.getBoundingClientRect()
                        .width;


                const trackStyle =
                    window.getComputedStyle(
                        companyTrack
                    );


                const gap =
                    parseFloat(
                        trackStyle.columnGap ||
                        trackStyle.gap ||
                        0
                    );


                return cardWidth + gap;

            }



            function updateCompanyCarousel() {


                const total =
                    companyTrack.querySelectorAll(
                        ".company-logo-card"
                    ).length;


                const visible =
                    getVisibleCompanies();


                const maxPosition =
                    Math.max(
                        0,
                        total - visible
                    );


                companyPosition =
                    Math.max(
                        0,
                        Math.min(
                            companyPosition,
                            maxPosition
                        )
                    );


                const move =
                    companyPosition *
                    getStep();


                companyTrack.style.transform =
                    "translateX(-" +
                    move +
                    "px)";


                /* BUTTON STATES */

                if (
                    companyPosition <=
                    0
                ) {

                    companyPrev.style.opacity =
                        ".45";

                } else {

                    companyPrev.style.opacity =
                        "1";

                }


                if (
                    companyPosition >=
                    maxPosition
                ) {

                    companyNext.style.opacity =
                        ".45";

                } else {

                    companyNext.style.opacity =
                        "1";

                }

            }



            companyNext.addEventListener(
                "click",
                function () {


                    const total =
                        companyTrack.querySelectorAll(
                            ".company-logo-card"
                        ).length;


                    const visible =
                        getVisibleCompanies();


                    const maxPosition =
                        Math.max(
                            0,
                            total - visible
                        );


                    if (
                        companyPosition <
                        maxPosition
                    ) {

                        companyPosition++;

                        updateCompanyCarousel();

                    }

                }
            );



            companyPrev.addEventListener(
                "click",
                function () {


                    if (
                        companyPosition >
                        0
                    ) {

                        companyPosition--;

                        updateCompanyCarousel();

                    }

                }
            );



            window.addEventListener(
                "resize",
                function () {

                    updateCompanyCarousel();

                }
            );


            updateCompanyCarousel();


            /* =================================================
               AUTO SLIDE
            ================================================= */

            let autoSlide =
                setInterval(
                    function () {


                        const total =
                            companyTrack.querySelectorAll(
                                ".company-logo-card"
                            ).length;


                        const visible =
                            getVisibleCompanies();


                        const maxPosition =
                            Math.max(
                                0,
                                total - visible
                            );


                        if (
                            companyPosition >=
                            maxPosition
                        ) {

                            companyPosition =
                                0;

                        } else {

                            companyPosition++;

                        }


                        updateCompanyCarousel();


                    },
                    3500
                );


            /* STOP AUTO SLIDE WHEN USER HOVERS */

            const carousel =
                document.querySelector(
                    ".company-carousel-wrapper"
                );


            if (carousel) {


                carousel.addEventListener(
                    "mouseenter",
                    function () {

                        clearInterval(
                            autoSlide
                        );

                    }
                );


                carousel.addEventListener(
                    "mouseleave",
                    function () {


                        autoSlide =
                            setInterval(
                                function () {


                                    const total =
                                        companyTrack.querySelectorAll(
                                            ".company-logo-card"
                                        ).length;


                                    const visible =
                                        getVisibleCompanies();


                                    const maxPosition =
                                        Math.max(
                                            0,
                                            total - visible
                                        );


                                    if (
                                        companyPosition >=
                                        maxPosition
                                    ) {

                                        companyPosition =
                                            0;

                                    } else {

                                        companyPosition++;

                                    }


                                    updateCompanyCarousel();


                                },
                                3500
                            );

                    }
                );

            }

        }


    }
);