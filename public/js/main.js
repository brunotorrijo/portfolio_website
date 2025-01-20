document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.module');
    const moduleContainer = document.querySelector('.module-container');
    
    // Set initial state
    gsap.set(moduleContainer, {
        visibility: 'visible',
        opacity: 0,
        y: 20
    });

    // Animate container
    gsap.to(moduleContainer, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    // Animate modules
    gsap.fromTo(modules,
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

    // Click handlers
    modules.forEach(module => {
        module.addEventListener('click', () => {
            const page = module.dataset.page;
            if (page) {
                window.location.href = `/${page}`;
            }
        });
    });

    // Add contact button click handler
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', () => {
        window.location.href = '/contact';
    });

    // Project cards scroll handling
    const projectsModule = document.querySelector('.projects');
    const projectCards = document.querySelectorAll('.project-card');
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    let currentCardIndex = -1;

    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = `
        <div class="scroll-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
        <span>Scroll to explore</span>
    `;
    projectsModule.appendChild(scrollIndicator);

    // Hide scroll indicator when first project is shown
    const hideScrollIndicator = () => {
        gsap.to(scrollIndicator, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => scrollIndicator.style.display = 'none'
        });
    };

    projectsModule.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (e.deltaY > 0 && currentCardIndex < projectCards.length - 1) {
            if (currentCardIndex === -1) hideScrollIndicator();
            currentCardIndex++;
        } else if (e.deltaY < 0 && currentCardIndex > -1) {
            currentCardIndex--;
        }

        // Animate cards with GSAP
        projectCards.forEach((card, index) => {
            if (index === currentCardIndex) {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            } else {
                gsap.to(card, {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });

        // Update indicators
        indicatorDots.forEach((dot, index) => {
            if (index === currentCardIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
});