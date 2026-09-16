// ページが読み込まれたときに実行する
document.addEventListener("DOMContentLoaded", function () {

    // ナビゲーションのリンクを取得
    const navLinks = document.querySelectorAll("nav a");

    // ナビゲーションリンクにクリックイベントを追加
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("ページを移動します：" + link.textContent);

        });

    });


    // 「観光スポットを見る」ボタン
    const spotButton = document.querySelector(".button");

    if (spotButton) {

        spotButton.addEventListener("click", function () {

            console.log("観光スポットを確認します");

        });

    }

});
// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function(element) {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ========================================
// CARD CLICK EFFECT
// ========================================

const cards = document.querySelectorAll(".culture-card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("selected");

    });

});


// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");

            if (navMenu.classList.contains("show")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }
        });

        // Menu link click गरेपछि menu बन्द
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("show");
                menuToggle.textContent = "☰";
            });
        });
    }


    /* =========================
       DARK MODE
    ========================= */

    const themeToggle = document.getElementById("themeToggle");

    // पहिले save भएको theme हेर्ने
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }
    }

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

                themeToggle.textContent = "☀️";

            } else {

                localStorage.setItem("theme", "light");

                themeToggle.textContent = "🌙";
            }
        });
    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {
                element.classList.add("active");
            }
        });
    }

    if (revealElements.length > 0) {

        revealOnScroll();

        window.addEventListener("scroll", revealOnScroll);
    }


    /* =========================
       BACK TO TOP
    ========================= */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =========================
       GALLERY LIGHTBOX
    ========================= */

    const galleryImages =
        document.querySelectorAll(".gallery-image");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxPrev =
        document.getElementById("lightboxPrev");

    const lightboxNext =
        document.getElementById("lightboxNext");


    let currentImageIndex = 0;


    function showImage(index) {

        if (!galleryImages.length || !lightboxImage) {
            return;
        }

        if (index < 0) {
            index = galleryImages.length - 1;
        }

        if (index >= galleryImages.length) {
            index = 0;
        }

        currentImageIndex = index;

        lightboxImage.src =
            galleryImages[index].src;

        lightboxImage.alt =
            galleryImages[index].alt;

        if (lightbox) {
            lightbox.classList.add("show");
            document.body.style.overflow = "hidden";
        }
    }


    // Image click
    galleryImages.forEach(function (image, index) {

        image.addEventListener("click", function () {
            showImage(index);
        });

    });


    // Next
    if (lightboxNext) {

        lightboxNext.addEventListener("click", function (event) {

            event.stopPropagation();

            showImage(currentImageIndex + 1);

        });
    }


    // Previous
    if (lightboxPrev) {

        lightboxPrev.addEventListener("click", function (event) {

            event.stopPropagation();

            showImage(currentImageIndex - 1);

        });
    }


    // Close function
    function closeLightbox() {

        if (lightbox) {
            lightbox.classList.remove("show");
        }

        document.body.style.overflow = "";
    }


    if (lightboxClose) {

        lightboxClose.addEventListener("click", function () {
            closeLightbox();
        });

    }


    // Background click गर्दा close
    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });
    }


    /* =========================
       LIGHTBOX KEYBOARD
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (!lightbox ||
            !lightbox.classList.contains("show")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            showImage(currentImageIndex + 1);
        }

        if (event.key === "ArrowLeft") {
            showImage(currentImageIndex - 1);
        }

    });


    /* =========================
       QUIZ
    ========================= */

    const quizSubmit =
        document.getElementById("quizSubmit");

    const quizResult =
        document.getElementById("quizResult");


    if (quizSubmit && quizResult) {

        quizSubmit.addEventListener("click", function () {

            /*
              सही उत्तर:
              Q1 = A
              Q2 = A
              Q3 = A
              Q4 = A
            */

            const correctAnswers = [
                "a",
                "a",
                "a",
                "a"
            ];

            let score = 0;

            correctAnswers.forEach(function (answer, index) {

                const questionNumber = index + 1;

                const selected =
                    document.querySelector(
                        'input[name="q' +
                        questionNumber +
                        '"]:checked'
                    );

                if (selected &&
                    selected.value === answer) {

                    score++;
                }

            });


            const total =
                correctAnswers.length;


            quizResult.textContent =
                "あなたの結果： " +
                score +
                " / " +
                total +
                " 問正解！";


            quizResult.style.background = "#f1f1f1";
            quizResult.style.color = "#222";


            if (score === total) {

                quizResult.textContent +=
                    " 🎉 全問正解です！";

            } else if (score >= 2) {

                quizResult.textContent +=
                    " 👍 よくできました！";

            } else {

                quizResult.textContent +=
                    " 😊 もう一度挑戦してみよう！";

            }

        });
    }

});