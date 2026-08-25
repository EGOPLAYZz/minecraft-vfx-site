// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = (e.clientX - 200) + 'px';
    glow.style.top = (e.clientY - 200) + 'px';
});

// Smooth Scroll Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Canvas Animation for Showcase
function initCanvas() {
    const canvas = document.getElementById('canvas-showcase');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Particle system
    const particles = [];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 3;
            this.speedY = (Math.random() - 0.5) * 3;
            this.opacity = Math.random() * 0.5 + 0.5;
            this.color = Math.random() > 0.5 ? '#00d4ff' : '#64ff8f';
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.01;
            
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    // Create particles
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Add new particles
        if (particles.length < 100) {
            particles.push(new Particle());
        }
        
        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            
            if (particles[i].opacity <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// Effect Cards Interaction
document.querySelectorAll('.effect-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(0, 212, 255, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.05)';
    });
});

// Contact Form
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('.submit-btn');
    const originalText = button.textContent;
    
    button.textContent = 'Message Sent!';
    button.style.background = 'linear-gradient(135deg, #64ff8f, #00d4ff)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        e.target.reset();
    }, 2000);
});

// CTA Button
document.querySelector('.cta-button')?.addEventListener('click', () => {
    document.querySelector('#effects').scrollIntoView({ behavior: 'smooth' });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
});

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.effect-card, .stat, .showcase-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});