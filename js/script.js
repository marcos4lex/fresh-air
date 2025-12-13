console.log('Wagner Ar-Condicionado site loaded');

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.glass-card, .section-title, .hero-text, .hero-image, .service-text, .service-image');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active', 'reveal');
            } else {
                // Optional: remove class to re-animate when scrolling up
                // reveal.classList.remove('active'); 
                // Better to add 'reveal' class initially in HTML or JS
                reveal.classList.add('reveal'); // Ensure base class is there
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
});
