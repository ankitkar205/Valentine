// 1. Floating Hearts Background Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.getElementById('hearts-bg').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 500);

// 2. Scroll Animation (The "Reveal" effect)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Music Player Logic
let isPlaying = false;
const audio = document.getElementById('bg-music');
const playerBtn = document.querySelector('.music-player');

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        playerBtn.querySelector('.text').innerText = "Play Our Song";
        playerBtn.querySelector('.icon').innerText = "🎵";
    } else {
        audio.play();
        playerBtn.querySelector('.text').innerText = "Pause";
        playerBtn.querySelector('.icon').innerText = "⏸️";
    }
    isPlaying = !isPlaying;
}

// 4. Envelope Opening Logic
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    // Hide envelope, show letter
    envelope.style.display = 'none';
    letter.classList.remove('hidden');
    
    // Play sound effect (optional) or just trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// 5. Final Celebration
function bigCelebration(e) {
    e.stopPropagation(); // Prevent bubbling
    const btn = document.querySelector('.final-btn');
    btn.innerText = "LAAMMUU PAGLI!! 💖";
    btn.style.backgroundColor = "#2ecc71";
    
    // Massive Confetti Explosion
    var end = Date.now() + 5 * 1000;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

}
