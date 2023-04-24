document.addEventListener('DOMContentLoaded', function() {
    const nav_anchors = document.querySelectorAll('nav a');
    const contents_checkbox = document.getElementById('contents');
  
    nav_anchors.forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        // Do not stop normal functionality of the anchor tag
        // event.preventDefault();
  
        // Uncheck the input with id "contents"
        if (contents_checkbox && contents_checkbox.type === 'checkbox') {
          contents_checkbox.checked = false;
        }
      });
    });
  });
  