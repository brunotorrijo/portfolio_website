document.addEventListener('DOMContentLoaded', () => {
    const contactCard = document.querySelector('.contact-card');
    const contactItems = document.querySelectorAll('.contact-item');

    // Initial animation for the main card
    gsap.fromTo(contactCard, 
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }
    );

    // Stagger animation for contact items
    gsap.fromTo(contactItems,
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out"
        }
    );
});
