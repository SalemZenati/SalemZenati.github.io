document.addEventListener('DOMContentLoaded', () => {
    console.log('The document is fully loaded and parsed');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        const nameInput = document.getElementById('name');
        
        if(nameInput.value.trim() === '') {
            e.preventDefault(); // Prevent form from submitting
            nameInput.style.border = '2px solid red'; // Highlight the input border in red
            alert('Please enter your full name.');
        }
    });
});
