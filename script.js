/*
  Green Horizon Landscaping
  Editable areas:
  - Phone/email/social links are in the HTML footer and contact page.
  - Form service: contact.html sends to Formspree.
  - Analytics: paste your Vercel Web Analytics script path below.
  - Speed Insights: paste your Vercel Speed Insights script path below.
*/
const VERCEL_ANALYTICS_SCRIPT_PATH = "";
const VERCEL_SPEED_INSIGHTS_SCRIPT_PATH = "";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const backToTop = document.querySelector(".back-to-top");
const revealItems = document.querySelectorAll(".reveal");
const estimateForm = document.querySelector(".contact-form");

if (!document.querySelector(".mobile-actions")) {
  const mobileActions = document.createElement("div");
  mobileActions.className = "mobile-actions";
  mobileActions.setAttribute("aria-label", "Quick contact");
  mobileActions.innerHTML = '<a href="tel:+15550148300">Call Now</a><a class="estimate-action" href="contact.html">Free Estimate</a>';
  document.body.appendChild(mobileActions);
}

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    if (!image.src.includes("clean-south-shore-garden.jpg")) {
      image.src = "assets/images/clean-south-shore-garden.jpg";
      image.alt = image.alt || "Clean professionally landscaped garden";
    }
  }, { once: true });
});

if (VERCEL_ANALYTICS_SCRIPT_PATH) {
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };
  const analyticsScript = document.createElement("script");
  analyticsScript.defer = true;
  analyticsScript.src = VERCEL_ANALYTICS_SCRIPT_PATH;
  document.head.appendChild(analyticsScript);
}

if (VERCEL_SPEED_INSIGHTS_SCRIPT_PATH) {
  window.si = window.si || function () {
    (window.siq = window.siq || []).push(arguments);
  };
  const speedInsightsScript = document.createElement("script");
  speedInsightsScript.defer = true;
  speedInsightsScript.src = VERCEL_SPEED_INSIGHTS_SCRIPT_PATH;
  document.head.appendChild(speedInsightsScript);
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 520);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const requestedService = new URLSearchParams(window.location.search).get("service");
const serviceSelect = document.querySelector("#service");
if (requestedService && serviceSelect) {
  const matchingOption = Array.from(serviceSelect.options).find((option) => option.value === requestedService);
  if (matchingOption) serviceSelect.value = requestedService;
}

if (estimateForm) {
  estimateForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = estimateForm.querySelector(".submit-button");
    const formStatus = estimateForm.querySelector(".form-status");
    const originalLabel = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending Request...";
    formStatus.className = "form-status";
    formStatus.textContent = "";

    try {
      const response = await fetch(estimateForm.action, {
        method: "POST",
        body: new FormData(estimateForm),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Submission failed");

      estimateForm.reset();
      formStatus.className = "form-status is-success";
      formStatus.textContent = "Thank you. Your estimate request has been sent. We will contact you within one business day.";
      formStatus.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
      formStatus.className = "form-status is-error";
      formStatus.textContent = "We could not send your request. Please try again or call us directly.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
