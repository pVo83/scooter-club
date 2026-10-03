import { throttle } from "../functions/throttle";

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    animItems.forEach((item) => item.classList.add("_active"));
  } else {
    const animOnScroll = () => {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          window.scrollY > animItemOffset - animItemPoint &&
          window.scrollY < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    };

    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    window.addEventListener("scroll", throttle(animOnScroll, 100), { passive: true });
    setTimeout(animOnScroll, 300);
  }
}
