document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    const bookingForm = document.getElementById('bookingForm');
    const confirmation = document.getElementById('confirmation');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Input validation
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;
        
        // Handle multiple experts
        const expertElements = document.querySelectorAll('input[name="expert"]:checked');
        const experts = Array.from(expertElements).map(expert => expert.value);

        if (!firstName || !lastName || !email || !phoneNumber || !date || !time || !service || experts.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        // Populate confirmation section
        document.getElementById('confirmFirstName').textContent = firstName;
        document.getElementById('confirmLastName').textContent = lastName;
        document.getElementById('confirmEmail').textContent = email;
        document.getElementById('confirmPhoneNumber').textContent = phoneNumber;
        document.getElementById('confirmDate').textContent = date;
        document.getElementById('confirmTime').textContent = time;
        document.getElementById('confirmService').textContent = service;
        document.getElementById('confirmExpert').textContent = experts.join(', ');

        // Show confirmation section
        confirmation.style.display = 'block';
    });

    // Add blur effect to navbar on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        if (navbarToggler.classList.contains('collapsed')) {
            navbarCollapse.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbarCollapse.style.backdropFilter = 'blur(10px)';
        } else {
            navbarCollapse.style.backgroundColor = 'transparent';
            navbarCollapse.style.backdropFilter = 'none';
        }
    });
});
