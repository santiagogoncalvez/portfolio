const isMobile = window.matchMedia("(max-width: 768px)").matches;
const prefersReducedMotion = window.matchMedia(
   "(prefers-reduced-motion: reduce)",
).matches;

async function initAnimations() {
   if (isMobile || prefersReducedMotion) {
      document.querySelectorAll(".section-motion").forEach((section) => {
         section.style.opacity = "1";
         section.style.transform = "none";
      });
      return;
   }

   const { animate, inView } = await import("motion");

   document.querySelectorAll(".section-motion").forEach((section) => {
      const shouldAnimate = section.dataset.animate !== "false";
      const disableOnMobile = section.dataset.disableMobile === "true";

      if (!shouldAnimate || (isMobile && disableOnMobile)) {
         section.style.opacity = "1";
         section.style.transform = "none";
         return;
      }

      inView(
         section,
         () => {
            animate(
               section,
               { opacity: [0, 1], y: [25, 0] },
               { duration: 0.3, easing: "ease-out" },
            );
         },
         { margin: "-80px" },
      );
   });
}

if ("requestIdleCallback" in window) {
   requestIdleCallback(initAnimations);
} else {
   setTimeout(initAnimations, 200);
}
