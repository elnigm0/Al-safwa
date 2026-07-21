document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navClose = document.getElementById("navClose");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.getElementById("header");

    // فتح القائمة الجانبية
    const openMenu = () => {
        mainNav.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // إيقاف التمرير في الخلفية أثناء فتح القائمة
    };

    // إغلاق القائمة الجانبية
    const closeMenu = () => {
        mainNav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "initial";
    };

    menuToggle.addEventListener("click", openMenu);
    navClose.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // إغلاق المنيو عند الضغط على أي رابط
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // إضافة تأثير الظل واللون المعتم للهيدر عند التمرير لأسفل
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.backgroundColor = "rgba(65, 6, 67, 0.98)"; // البنفسجي الغامق
        } else {
            header.style.padding = "15px 0";
            header.style.backgroundColor = "rgba(93, 16, 95, 0.95)";
        }
    });
});
