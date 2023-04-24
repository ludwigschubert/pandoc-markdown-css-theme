document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    const options = {
        root: null, // null -> entire viewport
        rootMargin: '0px',
        threshold: 0.8
    };

    const observer = new IntersectionObserver(entries => {
        console.debug(entries)
        //  IntersectionObserver's entries are ordered by their position in the DOM tree
        const topmostEntry = entries.find(entry => entry.isIntersecting);
        if (!topmostEntry) return;
        console.debug(topmostEntry)

        const tocElementId = 'toc-' + topmostEntry.target.id;
        const tocElement = document.getElementById(tocElementId);
        if (!tocElement) return;
        console.debug(tocElement)

        const otherTocElements = document.querySelectorAll('.active');
        otherTocElements.forEach(el => el.classList.remove('active'));
        
        tocElement.classList.add('active');
    }, options);

    headings.forEach(heading => {
        observer.observe(heading);
    });
});