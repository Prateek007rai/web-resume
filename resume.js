/**
 * resume.js - Interactive Scripts for Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
      });
  });

  // --- Sticky Transparent Nav on Scroll ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              return;
          } else {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
          }
      });
  }, revealOptions);

  revealElements.forEach(el => {
      revealOnScroll.observe(el);
  });

  // --- Canvas Background Particle Effect (Starfield/Cyber grid) ---
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];

  function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
      constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.radius = Math.random() * 2;
      }

      update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > width) this.vx = -this.vx;
          if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
          ctx.fill();
      }
  }

  function initParticles() {
      particles = [];
      let numParticles = (width * height) / 15000;
      for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle());
      }
  }

  function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
          p.update();
          p.draw();
      });

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
              let dx = particles[i].x - particles[j].x;
              let dy = particles[i].y - particles[j].y;
              let dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 100) {
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(0, 242, 254, ${0.1 - dist/1000})`;
                  ctx.lineWidth = 1;
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.stroke();
              }
          }
      }

      requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

});