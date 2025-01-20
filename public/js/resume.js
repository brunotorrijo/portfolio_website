document.addEventListener('DOMContentLoaded', () => {
    const resumeCard = document.querySelector('.resume-card');
    const resumeItems = document.querySelectorAll('.resume-item, .skill-category');

    gsap.fromTo(resumeCard,
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

    gsap.fromTo(resumeItems,
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
