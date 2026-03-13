/* Scroll animation to divs*/
document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.3   
    });

    document.querySelectorAll(".scroll-animate").forEach(section => {
        observer.observe(section);
    });

});


/*for .head fixed*/
window.addEventListener("scroll", () => {
    const header = document.querySelector(".head");

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/*Cards scroll horizontally (supports multiple sections) */
document.addEventListener("DOMContentLoaded", () => {
    const newsSections = document.querySelectorAll(".news");
    const cardWidth = 500; // approx width of one card + gap

    newsSections.forEach(section => {
        const cards = section.querySelector(".cards");
        const leftBtn = section.querySelector("#leftBtn");
        const rightBtn = section.querySelector("#rightBtn");

        if (!cards || !leftBtn || !rightBtn) return;

        function updateButtons() {
            const maxScrollLeft = cards.scrollWidth - cards.clientWidth;

            if (cards.scrollLeft <= 0) {
                leftBtn.classList.add("disabled");
            } else {
                leftBtn.classList.remove("disabled");
            }

            if (cards.scrollLeft >= maxScrollLeft - 5) {
                rightBtn.classList.add("disabled");
            } else {
                rightBtn.classList.remove("disabled");
            }
        }

        updateButtons();

        rightBtn.addEventListener("click", () => {
            cards.scrollBy({
                left: cardWidth,
                behavior: "smooth"
            });
            setTimeout(updateButtons, 300);
        });

        leftBtn.addEventListener("click", () => {
            cards.scrollBy({
                left: -cardWidth,
                behavior: "smooth"
            });
            setTimeout(updateButtons, 300);
        });
    });
});

/*Options scroll horizontally (Apps page) */
document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelector(".options");
    const leftBtn2 = document.getElementById("leftBtn2");
    const rightBtn2 = document.getElementById("rightBtn2");

    if (!options || !leftBtn2 || !rightBtn2) return;

    const optionWidth = 500; // approx width of one card + gap

    function updateButtons() {
        const maxScrollLeft = options.scrollWidth - options.clientWidth;

        if (options.scrollLeft <= 0) {
            leftBtn2.classList.add("disabled");
        } else {
            leftBtn2.classList.remove("disabled");
        }

        if (options.scrollLeft >= maxScrollLeft - 5) {
            rightBtn2.classList.add("disabled");
        } else {
            rightBtn2.classList.remove("disabled");
        }
    }

    updateButtons();

    rightBtn2.addEventListener("click", () => {
        options.scrollBy({
            left: optionWidth,
            behavior: "smooth"
        });
        setTimeout(updateButtons, 300);
    });

    leftBtn2.addEventListener("click", () => {
        options.scrollBy({
            left: -optionWidth,
            behavior: "smooth"
        });
        setTimeout(updateButtons, 300);
    });
});

