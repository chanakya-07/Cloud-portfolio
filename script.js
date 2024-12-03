document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Smooth Scrolling for Navigation Links
    setupSmoothScrolling();

    // Scroll Animations for Section Visibility
    setupScrollAnimations();

    // Project Hover Effects
    setupProjectInteractions();
});

// Form Submission Handler
async function handleFormSubmission(event) {
    event.preventDefault();  // Prevent default form submission behavior

    const formData = new FormData(event.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Validate the form
    if (!validateForm(name, email, message)) return;

    // Simulate form submission with feedback (as a mock for backend interaction)
    showSubmissionFeedback(name);
    event.target.reset();  // Clear form inputs after submission
}

// Form Validation Function
function validateForm(name, email, message) {
    // Validate Name (at least 2 characters)
    if (name.length < 2) {
        showError('Please enter a valid name.');
        return false;
    }

    // Validate Email with Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
        return false;
    }

    // Validate Message (at least 10 characters)
    if (message.length < 10) {
        showError('Your message must be at least 10 characters.');
        return false;
    }

    return true;
}

// Error Message Display
function showError(message) {
    const errorDiv = createFeedbackElement(message, 'error-message');
    document.querySelector('#contact-form').prepend(errorDiv);

    // Remove error after 3 seconds
    setTimeout(() => errorDiv.remove(), 3000);
}

// Success Message Display
function showSubmissionFeedback(name) {
    const feedbackMessage = `Thank you, ${name}! Your message has been received.`;
    const feedbackDiv = createFeedbackElement(feedbackMessage, 'submission-feedback');
    document.querySelector('#contact-form').prepend(feedbackDiv);

    // Remove feedback after 3 seconds
    setTimeout(() => feedbackDiv.remove(), 3000);
}

// Utility to create Feedback Elements (Error/Success)
function createFeedbackElement(message, className) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = className;
    feedbackDiv.textContent = message;
    feedbackDiv.style.marginBottom = '10px';
    return feedbackDiv;
}

// Smooth Scrolling Function
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset to account for fixed header
                    behavior: 'smooth',
                });
            }
        });
    });
}

// Scroll Animations (Intersection Observer for lazy loading/animation)
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,  // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Select all elements that should be animated (sections, project cards, skill cards)
    const animatedElements = document.querySelectorAll('section, .project-card, .skill-card');
    animatedElements.forEach(el => {
        el.classList.add('hidden');  // Hide the element by default
        observer.observe(el);  // Observe each element for visibility
    });
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScrolling(); // Apply smooth scrolling on page load
});

// Project Hover Interactions (for Dynamic Effects)
function setupProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });
}
