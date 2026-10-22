// ========================================
// VELORA FASHION WEBSITE
// Interactive JavaScript
// ========================================


// 1. MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");

if (menuToggle && mainNavigation) {
    // Open and close the navigation menu
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNavigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu when a navigation link is clicked
    const navigationLinks = mainNavigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainNavigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the menu when the Escape key is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            mainNavigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}


// 2. NEWSLETTER DEMO FORM
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm && newsletterEmail && newsletterMessage) {
    newsletterForm.addEventListener("submit", (event) => {
        // Prevent the browser from reloading the page
        event.preventDefault();

        // Check that the email field contains a valid value
        if (!newsletterEmail.checkValidity()) {
            newsletterEmail.reportValidity();
            return;
        }

        // Display a clear demo message
        newsletterMessage.textContent =
            "Thanks for trying VELORA! This is a demo form, so your email has not been sent or stored.";

        // Clear the form after displaying the message
        newsletterForm.reset();
    });
}


// 3. AUTOMATIC FOOTER YEAR
const currentYear = document.getElementById("current-year