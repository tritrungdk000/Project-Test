function toggleMenu() {
    var menu = document.querySelector('.main-nav .menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
window.addEventListener("scroll", function () {
    let img = document.getElementById("scrollImg");
    let scrollValue = window.scrollY;
    let moveX = Math.min(scrollValue * 0.5, 100);
    img.style.transform = `rotate(90deg) translate3d(${moveX}px, 7.2px, 0px)`;
});
window.addEventListener("scroll", function () {
    let img = document.getElementById("scrollImg2");
    let scrollValue = window.scrollY; 
    let moveY = Math.min(scrollValue * 0.5, 55); 
    img.style.transform = `translate3d(50px, ${24.8 - moveY}px, 0px)`;
});
window.addEventListener("scroll", function () {
    let img = document.getElementById("scrollImg3");
    let scrollValue = window.scrollY; 
    let moveY = Math.min(scrollValue * 0.5, 500);
    img.style.transform = `translateY(-${moveY}px)`;
});
window.addEventListener("scroll", function () {
    let img = document.getElementById("scrollImg4");
    let scrollValue = window.scrollY; 
    let moveY = Math.min(scrollValue * 0.2, 500);
    img.style.transform = `translateY(-${moveY}px)`;
});
window.addEventListener("scroll", function () {
    let img = document.getElementById("scrollImg5");
    let scrollValue = window.scrollY;
    let moveX = Math.min(scrollValue * 0.5, 100);
    img.style.transform = `translateX(${moveX}px, 0px, 0px)`;
});
window.addEventListener("scroll", function () {
    let img = document.getElementById("bounceImg");
    let scrollValue = window.scrollY;
    let moveY = -scrollValue * 0.5;
    img.style.transform = `translate(-50%, calc(-50% + ${moveY}px))`; 
});
function countUp(elementId, start, end, duration) {
    let element = document.getElementById(elementId);
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);
        let currentNumber = Math.floor(progress * (end - start) + start);

        element.innerText = currentNumber + "+"; // Thêm dấu +
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

document.addEventListener("DOMContentLoaded", function () {
    countUp("count", 0, 6000, 3000);
    countUp("count1", 0, 400, 3000);  
});