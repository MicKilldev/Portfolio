const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

// Check if elements exist before using them
if (sideMenu && navBar && navLinks) {
    function openMenu() {
        sideMenu.style.transform = 'translateX(-16rem)';
    }
    
    function closeMenu() {
        sideMenu.style.transform = 'translateX(16rem)';
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        } else {
            navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        }
    });
} else {
    console.warn('Required elements not found in DOM');
}