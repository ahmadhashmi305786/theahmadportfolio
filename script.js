const roles = ["Frontend Developer", "Responsive UX Developer", "Web Interface Builder","Prompt Engineer"];
const typeTarget = document.getElementById("typewriter");

let roleIndex = 0;
// Important: Initialize with the length of the first word (Frontend Developer = 18)
let charIndex = roles[0].length; 
let isDeleting = true; // Start with deleting the initial HTML text

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        // Mode: TYPING
        typeTarget.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;

        // If finished typing the word
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Wait 1.5s before deleting
            return; // Exit current run to wait for pause
        }
    } else {
        // Mode: DELETING
        typeTarget.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;

        // If finished deleting the word
        if (charIndex === 0) {
            isDeleting = false;
            // Loop to the next word (0 -> 1 -> 2 -> 0...)
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 400); // Brief pause before typing new word
            return;
        }
    }

    // Determine speed based on mode
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

// Start the animation after an initial pause so user sees the first role
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1200);
});
const toggleBtn = document.getElementById("themeToggle");

const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
// Service full descriptions
const serviceDetails = {
  1: {
    title: "Frontend Development",
    keywords: [
      "frontend development",
      "responsive web design",
      "semantic HTML",
      "modern CSS",
      "performance optimization",
      "scalable frontend architecture",
      "user-focused interfaces"
    ],
    description:
      "Frontend development is where intention becomes visible. I build interfaces that respond before users realize they’ve made a choice. Layouts are structured, interactions are restrained, and performance is treated as non-negotiable. Every component exists to serve a specific purpose — nothing decorative, nothing accidental. Using semantic structure, scalable styling systems, and carefully managed client-side logic, I create frontends that remain stable under pressure: different devices, different users, different behaviors. The interface doesn’t argue. It adapts. Nothing unnecessary survives.If it doesn’t serve the user, it doesn’t exist."
  },

  2: {
    title: "AI Assisted Development",
    keywords: [
      "AI assisted development",
      "artificial intelligence in web",
      "AI workflows",
      "intelligent systems",
      "behavioral AI",
      "controlled AI assistance",
      "prompt-guided AI"
    ],
    description:
      "AI is not the feature. It’s the presence behind it. I use AI as an assistant that observes patterns, anticipates intent, and supports decisions without drawing attention to itself. It works quietly in the background — refining logic, reducing friction, and adapting to behavior as it happens. The goal isn’t automation for its own sake. It’s controlled intelligence that knows when to act, when to stay silent, and when to disappear entirely.Used correctly, AI doesn’t show off.It simply makes everything work better."
  },

  3: {
    title: "UI Implementation & Responsive UX",
    keywords: [
      "responsive UX",
      "UI implementation",
      "cross-device design",
      "user experience design",
      "mobile-first interfaces",
      "accessibility-focused UI",
      "interaction design"
    ],
    description:
      "Design loses meaning when it breaks under context. I implement user interfaces with precision, ensuring visual hierarchy, rhythm, and interaction logic survive across all screen sizes. Responsive UX isn’t about flexibility — it’s about discipline. The experience must feel familiar, regardless of where it’s accessed. Spacing, motion, and interaction timing are handled deliberately to maintain flow and reduce cognitive effort. Users shouldn’t pause to understand the interface. They should move through it without resistance.If they don’t notice the effort, it means it was done right."
  }
};


const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

// Open modal
document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const serviceId = btn.getAttribute('data-service');
    modalTitle.textContent = serviceDetails[serviceId].title;
    modalDescription.textContent = serviceDetails[serviceId].description;
    modal.style.display = 'flex';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.style.display = 'none';
  }
});

// Optional enhancement: subtle card glow sync with pointer
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
}

/* Auto-close on link click */
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});
