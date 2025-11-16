document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Smooth scroll for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Basic contact form handling (front-end only)
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Simple fake submission handler
      statusEl.hidden = false;
      statusEl.textContent = "Thank you for reaching out! Well be in touch soon.";

      // Reset form fields after a short delay
      setTimeout(() => {
        form.reset();
      }, 500);
    });
  }
});
