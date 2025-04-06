
// Navigation Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
// Burger Menu Toggle
const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');
burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal-element');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.classList.add('visible');
            
            // For skill bars, animate the progress
            if (element.classList.contains('skill-item')) {
                const progress = element.querySelector('.skill-progress');
                const skillValue = element.getAttribute('data-skill');
                
                setTimeout(() => {
                    progress.style.width = skillValue + '%';
                }, 300);
            }
        }
    });
    
    // Active menu based on scroll position
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Run on page load
checkReveal();

// Run on scroll
window.addEventListener('scroll', checkReveal);

// Contact form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Message envoyé avec succès !');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}
