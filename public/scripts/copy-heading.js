/* JavaScript */
document.addEventListener('DOMContentLoaded', function() {
  const headings = document.querySelectorAll('main h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');

  headings.forEach(heading => {
    heading.addEventListener('click', function(event) {
      const target = event.target;

      // Check if the target is the heading itself or the paperclip icon
      if (target.tagName.toLowerCase().startsWith('h') && target.hasAttribute('id')) {
        const headingId = target.getAttribute('id');
        const url = new URL(window.location.href);
        url.hash = headingId;

        // Copy the URL with the heading ID to the clipboard
        navigator.clipboard.writeText(url.toString()).then(
          function() {
            console.log('Heading URL copied to clipboard:', url.toString());
          },
          function(err) {
            console.error('Failed to copy the heading URL:', err);
          }
        );
      }
    });
  });
});
