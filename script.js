const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const navItems = [nav1, nav2, nav3, nav4];


const link = document.querySelector('#favicon')
if (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
    link.setAttribute('href', "images/lightbulbDarkMode.png");
}


// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}

// Toggle Nav Function
function toggleNav() {
    // Toggle: Menu Bars Crossed/Uncrossed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    // NOTE : in this case, the overlay-active class DOES NOT exist, but is acting as a boolean to toggle slide right/left class
    if (overlay.classList.contains('overlay-active')) {
        // Animate IN Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate In - Nav Items
        //remove   //add
        navAnimation('out', 'in')
    } else {
        // Animate OUT Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate Out - Nav Items
        //remove   //add
        navAnimation('in', 'out')
    }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
});


// Dynamic Footer Date
let year = new Date().getFullYear();
document.getElementById('footer-date').innerHTML = year;


