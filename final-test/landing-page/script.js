document.addEventListener('DOMContentLoaded', () => {
    const enterOverlay = document.getElementById('enter-overlay');
    const enterBtn = document.getElementById('enter-btn');
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const equalizerSpans = document.querySelectorAll('.equalizer span');
    const wrapper = document.querySelector('.horizontal-wrapper');

    // Music State
    let isPlaying = false;

    // Enter Site
    enterBtn.addEventListener('click', () => {
        enterOverlay.style.opacity = '0';
        setTimeout(() => {
            enterOverlay.style.display = 'none';
        }, 800);

        // Play Music
        bgMusic.volume = 0.6;
        const playPromise = bgMusic.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updateEqualizer();
            }).catch(error => {
                console.log("Auto-play prevented.");
                isPlaying = false;
                updateEqualizer();
            });
        }

        // Trigger initial animations
        animateHero();
    });

    // Music Toggle
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
        } else {
            bgMusic.play();
            isPlaying = true;
        }
        updateEqualizer();
    });

    function updateEqualizer() {
        if (isPlaying) {
            equalizerSpans.forEach(span => {
                span.style.animationPlayState = 'running';
                span.style.height = '20px'; // Reset to moving
            });
            musicToggle.style.borderColor = 'var(--primary-color)';
        } else {
            equalizerSpans.forEach(span => {
                span.style.animationPlayState = 'paused';
                span.style.height = '2px'; // Flat line
            });
            musicToggle.style.borderColor = 'rgba(255,255,255,0.2)';
        }
    }

    // Horizontal Scroll Navigation
    window.scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

            // Update active nav
            document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active'));
            const navBtn = document.querySelector(`.nav-links button[onclick="scrollToSection('${id}')"]`);
            if (navBtn) navBtn.classList.add('active');
        }
    };

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        root: wrapper
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Special animation for progress bars
                if (entry.target.classList.contains('rubric-panel')) {
                    animateProgressBars();
                }
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.glass-card, .hero-content, .bento-item, .req-item, .idea-tag');

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s`;
        observer.observe(el);
    });

    // Add visible class styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    function animateHero() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('visible');
        }
    }

    function animateProgressBars() {
        const bars = document.querySelectorAll('.progress .fill');
        bars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = width;
            }, 300);
        });
    }
});
