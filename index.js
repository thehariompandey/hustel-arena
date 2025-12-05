// XYZ Solutions - JavaScript Enhancements
// Add interactive features and smooth scrolling

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation to service cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observe posters
    const posters = document.querySelectorAll('.poster');
    posters.forEach(poster => {
        poster.style.opacity = '0';
        poster.style.transform = 'translateY(30px)';
        poster.style.transition = 'all 0.8s ease-out';
        observer.observe(poster);
    });

    // Add active state to navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Console message
    console.log('%cXYZ Solutions', 'color: #00ffaa; font-size: 24px; font-weight: bold;');
    console.log('%cSmart • Modern • Secure • Reliable • Tech-First', 'color: #00d4ff; font-size: 14px;');
    
});

// Optional: Add particle effect on mouse move (Advanced feature)
document.addEventListener('mousemove', function(e) {
    const bgAnimation = document.querySelector('.bg-animation');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    bgAnimation.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});