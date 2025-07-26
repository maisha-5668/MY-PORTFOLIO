document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu .close-btn');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a[href^="#"]');

    // Get the search button
    const searchBtn = document.querySelector('.search-btn');


    // Toggle mobile menu
    if (menuToggle && mobileMenu && closeBtn) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable body scrolling
        });

        // Close menu if clicked outside
        document.addEventListener('click', (event) => {
            const isClickOutsideMenu = !mobileMenu.contains(event.target);
            const isClickOnMenuToggle = menuToggle.contains(event.target);

            // Ensure the menu is active and the click is truly outside both the menu and its toggle button
            if (mobileMenu.classList.contains('active') && isClickOutsideMenu && !isClickOnMenuToggle) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable body scrolling
            }
        });

        // Close menu when a link is clicked
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable body scrolling
            });
        });
    }

    // Search button functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('Search functionality will appear here!'); // Temporary alert for demonstration
        });
    }
});