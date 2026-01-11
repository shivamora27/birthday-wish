// Smooth scroll to gallery
function scrollToGallery() {
    const gallery = document.getElementById('gallery');
    gallery.scrollIntoView({ behavior: 'smooth' });
}

// Cut the Cake Function
let cakeHasBeenCut = false;

function cutTheCake() {
    if (cakeHasBeenCut) return; // Prevent multiple clicks
    
    cakeHasBeenCut = true;
    const cake = document.getElementById('birthday-cake');
    const button = document.getElementById('cut-cake-btn');
    const candles = document.getElementById('candles');
    const audio = document.getElementById('birthday-audio');
    const knife = document.getElementById('cutting-knife');
    
    console.log('🎂 Cutting cake started!');
    
    // Update button
    button.classList.add('clicked');
    button.innerHTML = '🎉 Happy Birthday! 🎉';
    button.style.pointerEvents = 'none';
    
    // Start knife cutting animation
    if (knife) {
        knife.classList.add('cutting');
        console.log('Knife animation started');
    }
    
    // Create cake crumbs effect
    setTimeout(() => {
        createCakeCrumbs(cake);
    }, 1000);
    
    // Blow out candles after knife starts moving
    setTimeout(() => {
        if (candles) {
            candles.style.animation = 'fadeOut 0.5s ease-out forwards';
        }
    }, 800);
    
    setTimeout(() => {
        // Cut the cake
        if (cake) {
            cake.classList.add('cutting');
            console.log('Cake cutting animation started');
        }
        
        // Play happy birthday audio (optional - won't break if missing)
        if (audio) {
            audio.play().catch(err => {
                console.log('Audio not available or autoplay prevented:', err);
            });
        }
        
        // Launch fireworks after a short delay
        setTimeout(() => {
            launchFireworks();
        }, 500);
        
    }, 1800);
}

// Create cake crumbs falling effect
function createCakeCrumbs(cakeElement) {
    const colors = ['#ff69b4', '#ffd700', '#87ceeb'];
    const numCrumbs = 30;
    
    for (let i = 0; i < numCrumbs; i++) {
        setTimeout(() => {
            const crumb = document.createElement('div');
            crumb.className = 'crumb';
            crumb.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Position at cake center
            const rect = cakeElement.getBoundingClientRect();
            crumb.style.left = (rect.left + rect.width / 2) + 'px';
            crumb.style.top = (rect.top + rect.height / 2) + 'px';
            crumb.style.position = 'fixed';
            
            // Random horizontal spread
            const spreadX = (Math.random() - 0.5) * 200;
            crumb.style.setProperty('--crumb-x', spreadX + 'px');
            
            document.body.appendChild(crumb);
            
            setTimeout(() => {
                crumb.remove();
            }, 1500);
        }, i * 30);
    }
}

// Fireworks Animation
function launchFireworks() {
    const container = document.getElementById('fireworks-container');
    const colors = ['#ff0000', '#ff6b6b', '#ffd700', '#00ff00', '#00ffff', '#0080ff', '#ff00ff', '#ff69b4', '#fff'];
    const numberOfRounds = 12;
    
    for (let round = 0; round < numberOfRounds; round++) {
        setTimeout(() => {
            // Launch 3-5 rockets per round
            const rocketsInRound = 3 + Math.floor(Math.random() * 3);
            
            for (let i = 0; i < rocketsInRound; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = window.innerHeight;
                    createFirework(container, x, y, colors);
                }, i * 200);
            }
        }, round * 800);
    }
}

function createFirework(container, x, y, colors) {
    // Create rocket
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocket.style.left = x + 'px';
    rocket.style.top = y + 'px';
    container.appendChild(rocket);
    
    // Explode at the top
    setTimeout(() => {
        rocket.remove();
        explodeFirework(container, x, y - 400, colors);
    }, 1000);
}

function explodeFirework(container, x, y, colors) {
    const particles = 40 + Math.floor(Math.random() * 30);
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = color;
        
        // Random explosion direction
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 100 + Math.random() * 150;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Add fadeOut animation for candles
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;
document.head.appendChild(fadeOutStyle);

// Confetti Animation
class Confetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.pieces = [];
        this.numberOfPieces = 150;
        this.colors = ['#ff69b4', '#ffd700', '#87ceeb', '#98fb98', '#dda0dd', '#ff1493'];
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        this.createPieces();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createPieces() {
        for (let i = 0; i < this.numberOfPieces; i++) {
            this.pieces.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 10 - 5,
                speed: Math.random() * 3 + 2,
                size: Math.random() * 10 + 5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                swing: Math.random() * 2 - 1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.pieces.forEach(piece => {
            // Update position
            piece.y += piece.speed;
            piece.x += piece.swing;
            piece.rotation += piece.rotationSpeed;
            
            // Reset if out of bounds
            if (piece.y > this.canvas.height) {
                piece.y = -20;
                piece.x = Math.random() * this.canvas.width;
            }
            
            // Draw confetti piece
            this.ctx.save();
            this.ctx.translate(piece.x, piece.y);
            this.ctx.rotate(piece.rotation * Math.PI / 180);
            this.ctx.fillStyle = piece.color;
            this.ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            this.ctx.restore();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize confetti when page loads
window.addEventListener('load', () => {
    new Confetti();
    
    // Add entrance animations to elements
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
    
    // Observe all photo cards and wish cards
    document.querySelectorAll('.photo-card, .wish-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'radial-gradient(circle, #ffd700, transparent)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9998';
    sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add click effect to hearts in final section
document.querySelectorAll('.heart').forEach(heart => {
    heart.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
        
        // Create floating heart
        const floatingHeart = document.createElement('div');
        floatingHeart.textContent = this.textContent;
        floatingHeart.style.position = 'fixed';
        floatingHeart.style.left = event.clientX + 'px';
        floatingHeart.style.top = event.clientY + 'px';
        floatingHeart.style.fontSize = '2em';
        floatingHeart.style.pointerEvents = 'none';
        floatingHeart.style.zIndex = '9999';
        floatingHeart.style.animation = 'floatHeart 2s ease-out forwards';
        
        document.body.appendChild(floatingHeart);
        
        setTimeout(() => {
            floatingHeart.remove();
        }, 2000);
    });
});

// Add CSS for floating heart animation
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes floatHeart {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Auto-scroll reveal effect
let hasScrolled = false;
window.addEventListener('scroll', () => {
    if (!hasScrolled) {
        hasScrolled = true;
        // Trigger additional animations on first scroll
    }
});

// Add click event to cake for surprise
document.querySelector('.cake')?.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'bounce 2s ease-in-out infinite';
    }, 10);
    
    // Create burst of hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createBurstHeart(event.clientX, event.clientY);
        }, i * 50);
    }
});

function createBurstHeart(x, y) {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '1.5em';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 100;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    
    heart.style.animation = `burstHeart 1.5s ease-out forwards`;
    heart.style.setProperty('--endX', endX + 'px');
    heart.style.setProperty('--endY', endY + 'px');
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

// Add CSS for burst heart animation
const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes burstHeart {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(var(--endX) - 50vw), calc(var(--endY) - 50vh)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

console.log('🎉 Happy Birthday! 🎂');
console.log('💕 Made with love 💕');
