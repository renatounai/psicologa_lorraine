// Mobile Navigation Menu
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const header = document.querySelector('.header__container');
    const nav = document.querySelector('.header__nav');

    // Create hamburger menu button for mobile
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'header__mobile-menu';
    mobileMenuBtn.setAttribute('aria-label', 'Menu de navegação');
    mobileMenuBtn.innerHTML = `
        <span class="header__mobile-menu-bar"></span>
        <span class="header__mobile-menu-bar"></span>
        <span class="header__mobile-menu-bar"></span>
    `;

    // Insert button before nav
    header.insertBefore(mobileMenuBtn, nav);

    // Add mobile menu functionality
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('header__nav--active');
        mobileMenuBtn.classList.toggle('header__mobile-menu--active');

        // Toggle aria-expanded attribute for accessibility
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    });

    // Close mobile menu when clicking on a link
    const menuLinks = document.querySelectorAll('.header__menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('header__nav--active');
                mobileMenuBtn.classList.remove('header__mobile-menu--active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Initialize mobile menu state
    function updateMenuState() {
        if (window.innerWidth <= 768) {
            nav.classList.add('header__nav--mobile');
            mobileMenuBtn.style.display = 'block';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        } else {
            nav.classList.remove('header__nav--mobile');
            nav.classList.remove('header__nav--active');
            mobileMenuBtn.style.display = 'none';
        }
    }

    // Initial setup
    updateMenuState();

    // Update on window resize
    window.addEventListener('resize', updateMenuState);
});
