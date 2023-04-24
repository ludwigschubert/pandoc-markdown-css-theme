document.addEventListener("DOMContentLoaded", function () {
    // Non-essential if user has JavaScript off. Just hides TOC button on scroll.
    const nav = document.querySelector("nav");
    let lastScrollTop = 0;
    const min_diff_px = 32;
    
    function didScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop < lastScrollTop) {
            nav.classList.add("scrolled-up");
            nav.classList.remove("scrolled-down");
            lastScrollTop = currentScrollTop;
        } else if (currentScrollTop > lastScrollTop + min_diff_px) {
            nav.classList.remove("scrolled-up");
            nav.classList.add("scrolled-down");
            lastScrollTop = currentScrollTop;
        }
    }

    window.addEventListener("scroll", didScroll);
});
  