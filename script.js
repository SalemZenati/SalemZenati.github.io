document.addEventListener('DOMContentLoaded', () => {
    console.log('The document is fully loaded and parsed');

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('name');
            
            if (nameInput.value.trim() === '') {
                e.preventDefault(); // Prevent form from submitting
                nameInput.style.border = '2px solid red'; // Highlight the input border in red
                alert('Please enter your full name.');
            }
        });
    }

    const expandBar = document.querySelector(".expand-bar");
    const aboutSection = document.querySelector(".about");
    const aboutContent = document.querySelector(".about-content");

    if (expandBar && aboutSection && aboutContent) {
        console.log('Expand bar and about content found.');
        expandBar.addEventListener("click", function() {
            console.log('Expand bar clicked.');
            aboutSection.classList.toggle("expanded");
            aboutContent.classList.toggle("expanded");
            console.log('Toggled expanded class.');
        });
    } else {
        console.log('Expand bar or about content not found.');
    }


    let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop;
});

});
