document.addEventListener('DOMContentLoaded', () => {
    const aboutCard = document.querySelector('.about-card');
    const profilePic = document.querySelector('.profile-pic');
    const textElements = document.querySelectorAll('.about-text-container p');

    // Animate the card
    gsap.fromTo(aboutCard,
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

    // Animate the profile picture
    gsap.fromTo(profilePic,
        {
            opacity: 0,
            scale: 0.8
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "back.out(1.7)"
        }
    );

    // Animate text elements
    gsap.fromTo(textElements,
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.4,
            ease: "power2.out"
        }
    );
});
