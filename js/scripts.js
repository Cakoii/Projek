// Hamburger menu toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-nav');

if (navbarToggler && navLinks) {
    navbarToggler.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navbarToggler.classList.toggle('active');
    });
}

// Contact Form Submission with SweetAlert
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            contactForm.reset();
        });
    });
}

// Donation Form Submission with SweetAlert
const donationForm = document.getElementById('donationForm');

if (donationForm) {
    donationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        Swal.fire({
            title: 'Thank You!',
            text: 'Your donation has been received. We appreciate your generosity!',
            icon: 'success',
            confirmButtonText: 'Done',
        }).then(() => {
            donationForm.reset();
        });
    });
}
