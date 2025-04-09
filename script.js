const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye");

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    eyeIcon.textContent = "👁️";
  }
}

function checkStrength() {
  const pass = passwordInput.value;
  const fill = document.getElementById('strength-fill');
  const text = document.getElementById('strength-text');

  let strength = 0;
  if (pass.length >= 6) strength++;
  if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
  if (/\d/.test(pass)) strength++;
  if (/[\W_]/.test(pass)) strength++;

  if (pass.length === 0) {
    fill.style.width = "0%";
    text.textContent = "Strength: —";
    text.className = "strength-text";
  } else if (strength <= 1) {
    fill.style.width = "33%";
    fill.style.background = "red";
    text.textContent = "Strength: Weak";
    text.className = "strength-text weak";
  } else if (strength === 2 || strength === 3) {
    fill.style.width = "66%";
    fill.style.background = "orange";
    text.textContent = "Strength: Medium";
    text.className = "strength-text medium";
  } else {
    fill.style.width = "100%";
    fill.style.background = "limegreen";
    text.textContent = "Strength: Strong";
    text.className = "strength-text strong";
  }
}

// Simple animated particles for futuristic background
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffffaa";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
drawParticles();
