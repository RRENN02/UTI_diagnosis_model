// Get elements
const popupButton = document.getElementById('popupButton');
const popupContainer = document.getElementById('popupContainer');
const closeButton = document.querySelector('.close-button');

// Show popup when button is clicked
popupButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
});

// Hide popup when close button is clicked
closeButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// Hide popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});
