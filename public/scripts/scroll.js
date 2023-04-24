document.addEventListener("DOMContentLoaded", function () {
    // Non-essential if user has JavaScript off. Just hides TOC button on scroll.
    const nav = document.querySelector("nav");
    let lastScrollTop = 0;
    
    function didScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop < lastScrollTop) {
            nav.classList.add("scrolled-up");
        } else {
            nav.classList.remove("scrolled-up");
        }
        lastScrollTop = currentScrollTop;
    }

    window.addEventListener("scroll", didScroll);
});
  