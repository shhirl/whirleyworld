// Whirley World — interactions

// ---- scroll reveal ----
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---- copy email + toast ----
const copyBtn = document.getElementById("copy-email");
const toast = document.getElementById("toast");
let toastTimer;

copyBtn?.addEventListener("click", async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    // clipboard API unavailable (e.g. non-HTTPS) — fall back to a prompt
    window.prompt("Copy my e-mail:", email);
    return;
  }
  toast.classList.add("show");
  copyBtn.textContent = "✅ Copied!";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    copyBtn.textContent = "📋 Copy my e-mail";
  }, 2200);
});
