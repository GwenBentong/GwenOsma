
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-menu');

    burger.addEventListener('click', function() {
        burgerMenu.classList.toggle('show');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector(".logo");
    const text = heading.textContent;
    heading.innerHTML = ""; 

    text.split("").forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        heading.appendChild(span);
    });
});