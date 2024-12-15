document.addEventListener('DOMContentLoaded', () => {
    // Get the current pathname (e.g., '/info.html', '/index.html')
    const currentPath = window.location.pathname;

    // Select all navbar links
    const navbarLinks = document.querySelectorAll('#navbar a');

    // Loop through all navbar links
    navbarLinks.forEach(link => {
        // Get the href of the current link (e.g., 'info.html', 'index.html')
        const linkPath = link.getAttribute('href');

        // Check if the currentPath ends with the linkPath
        if (currentPath.endsWith(linkPath)) {
            link.classList.add('active'); // Add 'active' class to the matching link
        } else {
            link.classList.remove('active'); // Remove 'active' class from non-matching links
        }
    });
});


// Select all navbar links
const navbarLinks = document.querySelectorAll('#navbar a');

// Function to update the active class
function updateActiveClass() {
    // Get the current scroll position of the page
    let fromTop = window.scrollY + 100; // Add some offset for header height

    // Loop through all navbar links
    navbarLinks.forEach(link => {
        // Find the section the link points to (via its href)
        const section = document.querySelector(link.getAttribute('href'));

        // Check if the section is in view
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            // Add the 'active' class to the link if its section is in view
            link.classList.add('active');
        } else {
            // Remove the 'active' class if its section is not in view
            link.classList.remove('active');
        }
    });
}



// Update active class on scroll as before
window.addEventListener('scroll', updateActiveClass);

// Add a scroll event listener to the window
window.addEventListener('scroll', updateActiveClass);
