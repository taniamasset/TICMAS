const buttons = document.querySelectorAll('.detalles-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.nextElementSibling;
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
        } else {
            popup.style.display = 'block';
        }
    });
});
