// Toggle the burger menu on click
const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

// Toggle the 'show' class to display/hide the burger menu
burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-header a, .burger-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default link behavior
        
        // Get the target section from the link href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});




const picture = document.querySelector('.picture');

// Mouse move event listener
picture.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target;

    // Calculate distance from the center of the image
    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;
    const deltaX = offsetX - centerX;
    const deltaY = offsetY - centerY;

    // Calculate the border-radius effect based on the mouse position
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const scale = distance / maxDistance; // Scale factor for border-radius

    // Apply the ripple effect by adjusting the border-radius dynamically
    const borderRadiusValue = 50 + scale * 20;  // 50 is the initial value for circular shape

    picture.style.borderRadius = `${borderRadiusValue}%`;
});

// Reset the border-radius when mouse leaves the image
picture.addEventListener('mouseleave', () => {
    picture.style.borderRadius = '50%';
});