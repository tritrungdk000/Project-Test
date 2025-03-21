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
    let scrollY = window.scrollY; 
    let move = Math.sin(scrollY * 0.005) * 50; // Dao động lên xuống
    
    img.style.transform = `translateY(${move}px)`;
  });
window.addEventListener("scroll", function () {
    let img = document.querySelector(".scroll-vertical-up-2");
    let scrollY = window.scrollY;
    let moveUp = Math.min(scrollY * 0.5, 500); // Giới hạn di chuyển tối đa
  
    img.style.transform = `translateY(${-moveUp}px)`;
  });
function countUp(elementId, start, end, duration) {
    let element = document.getElementById(elementId);
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);
        let currentNumber = Math.floor(progress * (end - start) + start);

        element.innerText = currentNumber + "+";
        
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
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://d1j8r0kxyu9tj8.cloudfront.net/files/dl0JEyizduXZ8ZOp9tr2A7JmXswCX5Y1J8TFcCLf.png",
        "https://d1j8r0kxyu9tj8.cloudfront.net/files/0WXBA7jbYOzN22xKKZYQzxytTNKixUIQr7BBiBd0.png"
    ];
    let currentImageIndex = 0;
    const imageElement = document.querySelector(".image-section-6 img");

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.style.opacity = 0;
        setTimeout(() => {
            imageElement.src = images[currentImageIndex];
            imageElement.style.opacity = 1;
        }, 2000);
    }, 4000);
});