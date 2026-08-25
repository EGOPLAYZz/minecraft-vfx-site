// Import Google Font for Minecraft-like style
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap';
document.head.appendChild(link);

// Create Click VFX - Block Breaking Effect
function createBlockBreakEffect(x, y) {
    const container = document.createElement('div');
    container.className = 'click-vfx';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);

    // Create cube/block particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'block-particle';
        
        // Random direction
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        // Random colors - purple/blue theme
        const colors = ['#7c3aed', '#3b82f6', '#a78bfa', '#60a5fa'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.background = color;
        particle.style.width = '12px';
        particle.style.height = '12px';
        particle.style.borderRadius = '2px';
        particle.style.position = 'absolute';
        particle.style.left = '0';
        particle.style.top = '0';
        particle.style.animation = `burstOut ${0.5 + Math.random() * 0.3}s ease-out forwards`;
        
        container.appendChild(particle);
    }

    // Add pulse ring
    const ring = document.createElement('div');
    ring.className = 'pulse-ring';
    ring.style.left = '-50px';
    ring.style.top = '-50px';
    ring.style.borderColor = '#7c3aed';
    container.appendChild(ring);

    setTimeout(() => container.remove(), 800);
}

// Create Hit Particle Effect (like Minecraft damage particles)
function createHitParticles(x, y) {
    const container = document.createElement('div');
    container.className = 'click-vfx';
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    document.body.appendChild(container);

    // Create small number particles (like damage numbers)
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 30 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 20;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.position = 'absolute';
        particle.style.left = '0';
        particle.style.top = '0';
        particle.style.width = '20px';
        particle.style.height = '20px';
        particle.style.display = 'flex';
        particle.style.alignItems = 'center';
        particle.style.justifyContent = 'center';
        particle.style.fontSize = '12px';
        particle.style.fontWeight = 'bold';
        particle.style.color = '#ff6b9d';
        particle.style.textShadow = '0 0 5px #7c3aed';
        particle.style.animation = `floatUp ${0.8 + Math.random() * 0.4}s ease-out forwards`;
        particle.textContent = '✦';
        
        container.appendChild(particle);
    }

    setTimeout(() => container.remove(), 1200);
}

@keyframes floatUp {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(var(--tx), var(--ty)) scale(0.3);
    }
}

// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = (e.clientX - 200) + 'px';
    glow.style.top = (e.clientY - 200) + 'px';
});

// Global click handler for VFX
document.addEventListener('click', (e) => {
    // Create block break effect
    createBlockBreakEffect(e.clientX, e.clientY);
    
    // Randomly create hit particles
    if (Math.random() > 0.5) {
        setTimeout(() => createHitParticles(e.clientX, e.clientY), 100);
    }
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

// Canvas Animation for Showcase with Minecraft-like particles
function initCanvas() {
    const canvas = document.getElementById('canvas-showcase');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Minecraft-themed particle system
    const particles = [];
    
    class MinecraftParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 2;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 3 - 1; // Gravity effect
            this.opacity = Math.random() * 0.7 + 0.3;
            this.gravity = 0.05;
            this.friction = 0.98;
            
            // Minecraft purple/blue color palette
            const colors = ['#7c3aed', '#3b82f6', '#a78bfa', '#60a5fa', '#6366f1'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Block-like shape indicator
            this.isBlock = Math.random() > 0.6;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY += this.gravity;
            this.speedX *= this.friction;
            this.opacity -= 0.015;
            
            // Wrap around
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y > canvas.height) this.y = -10;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            
            if (this.isBlock) {
                // Draw as small cube/block
                ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 0.5;
                ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            } else {
                // Draw as circular particle with glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Add glow
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = this.opacity * 0.5;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size + 2, 0, Math.PI * 2);
                ctx.stroke();
            }
            
            ctx.globalAlpha = 1;
        }
    }
    
    // Create initial particles
    for (let i = 0; i < 80; i++) {
        particles.push(new MinecraftParticle());
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(15, 10, 26, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add new particles
        if (particles.length < 100) {
            particles.push(new MinecraftParticle());
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

// Effect Cards Interaction with VFX
document.querySelectorAll('.effect-card').forEach(card => {
    card.addEventListener('click', (e) => {
        createBlockBreakEffect(e.clientX, e.clientY);
        createHitParticles(e.clientX, e.clientY);
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(124, 58, 237, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(124, 58, 237, 0.05)';
    });
});

// Contact Form with VFX
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('.submit-btn');
    const originalText = button.textContent;
    
    // Create success particles
    createBlockBreakEffect(button.getBoundingClientRect().left + 50, button.getBoundingClientRect().top + 25);
    
    button.textContent = '✓ Message Sent!';
    button.style.background = 'linear-gradient(135deg, #10b981, #6366f1)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        e.target.reset();
    }, 2000);
});

// CTA Button
document.querySelector('.cta-button')?.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    setTimeout(() => {
        document.querySelector('#effects').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// Hero Title Click Effect
document.querySelectorAll('.word').forEach(word => {
    word.addEventListener('click', (e) => {
        createBlockBreakEffect(e.clientX, e.clientY);
        createHitParticles(e.clientX, e.clientY);
    });
});

// Stat Cards Click Effect
document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('click', (e) => {
        createBlockBreakEffect(e.clientX, e.clientY);
    });
});

// Tags Click Effect
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
        createBlockBreakEffect(e.clientX, e.clientY);
    });
});

// Logo Click Effect
document.querySelector('.logo')?.addEventListener('click', (e) => {
    createBlockBreakEffect(e.clientX, e.clientY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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