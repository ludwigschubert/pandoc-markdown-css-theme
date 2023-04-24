document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll('main h1, main h2, main h3, main h4');

    function handleIntersection(entries) {
        //  IntersectionObserver's entries are ordered by their position in the DOM tree
        const topmostEntry = entries.find(entry => entry.isIntersecting);
        console.log(topmostEntry)
        if (!topmostEntry) return;

        const tocElementId = 'toc-' + topmostEntry.target.id;
        const tocElement = document.getElementById(tocElementId);
        if (!tocElement) return;

        const otherTocElements = document.querySelectorAll('.active');
        otherTocElements.forEach(el => el.classList.remove('active'));
        tocElement.classList.add('active');
    }

    // root: null -> entire browser viewport
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    headings.forEach(heading => {
        observer.observe(heading);
    });

    // Manually trigger the IntersectionObserver callback for the initial state
    const initialEntries = Array.from(headings).map(heading => ({
        isIntersecting: heading.getBoundingClientRect().top < window.innerHeight && heading.getBoundingClientRect().bottom > 0,
        target: heading
    }));
    handleIntersection(initialEntries);
});