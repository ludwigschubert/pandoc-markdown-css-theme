document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('main h1[id], main h2[id], main h3[id], main h4[id], main h5[id], main h6[id]');

  headings.forEach(heading => {
    heading.addEventListener('click', event => {
      const target = event.target;

      if (target.tagName.toLowerCase().startsWith('h') && target.hasAttribute('id')) {
        const headingId = target.getAttribute('id');
        const url = new URL(window.location.href);
        url.hash = headingId;

        navigator.clipboard.writeText(url.toString())
          .then(() => {
            console.log('Heading URL copied to clipboard:', url.toString());
            target.classList.add('copy-success');
            target.setAttribute('title', 'Copied URL to clipboard! ✅');
            setTimeout(() => {
              target.classList.remove('copy-success');
              target.removeAttribute('title');
            }, 3000);

          })
          .catch(err => {
            console.error('Failed to copy the heading URL:', err);
            target.classList.add('copy-error');
            target.setAttribute('title', 'Failed to copy URL! ❌');
            setTimeout(() => {
              target.classList.remove('copy-error');
              target.removeAttribute('title');
            }, 3000);

          });
      }
    });
  });
});
