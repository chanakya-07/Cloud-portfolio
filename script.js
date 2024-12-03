document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    
    setupSmoothScrolling();

    
    setupScrollAnimations();

    
    setupProjectInteractions();
});


async function handleFormSubmission(event) {
    event.preventDefault();  

    const formData = new FormData(event.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!validateForm(name, email, message)) return;

    
    showSubmissionFeedback(name);
    event.target.reset(); 
}


function validateForm(name, email, message) {
  
    if (name.length < 2) {
        showError('Please enter a valid name.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
        return false;
    }

    if (message.length < 10) {
        showError('Your message must be at least 10 characters.');
        return false;
    }

    return true;
}

function showError(message) {
    const errorDiv = createFeedbackElement(message, 'error-message');
    document.querySelector('#contact-form').prepend(errorDiv);


    setTimeout(() => errorDiv.remove(), 3000);
}


function showSubmissionFeedback(name) {
    const feedbackMessage = `Thank you, ${name}! Your message has been received.`;
    const feedbackDiv = createFeedbackElement(feedbackMessage, 'submission-feedback');
    document.querySelector('#contact-form').prepend(feedbackDiv);

   
    setTimeout(() => feedbackDiv.remove(), 3000);
}


function createFeedbackElement(message, className) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = className;
    feedbackDiv.textContent = message;
    feedbackDiv.style.marginBottom = '10px';
    return feedbackDiv;
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: 'smooth',
                });
            }
        });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,  
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('section, .project-card, .skill-card');
    animatedElements.forEach(el => {
        el.classList.add('hidden');  
        observer.observe(el); 
    });
}


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
    setupSmoothScrolling(); 
});


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
