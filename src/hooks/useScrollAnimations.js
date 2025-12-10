import { useEffect } from "react";

export function useScrollAnimations() {

    useEffect(() => {
        const animatedElements = document.querySelectorAll(
            ".animate-slide-up, .animate-slide-in-left, .animate-slide-in-right, .animate-fade-in"
        );

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px",
        };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    const delay = Number(el.getAttribute("data-delay")) || 0;

                    if (entry.isIntersecting) {
                        const runIn = () => {
                            el.style.visibility = "visible";
                            el.style.opacity = "1";
                            el.style.transform = "translateY(0) translateX(0)";
                        };

                        if (reduceMotion || delay === 0) {
                            runIn();
                        } else {
                            // Use a dataset flag to avoid stacking timeouts across repeated enters
                            if (!el.dataset.animating) {
                                el.dataset.animating = "true";
                                setTimeout(() => {
                                    runIn();
                                    el.dataset.animating = "";
                                }, delay);
                            } else {
                                runIn();
                            }
                        }
                    } else {
                        // Reset when leaving viewport to allow re-animate
                        el.style.visibility = "hidden";
                        el.style.opacity = "0";
                        if (el.classList.contains("animate-slide-up")) {
                            el.style.transform = "translateY(30px)";
                        } else if (el.classList.contains("animate-slide-in-left")) {
                            el.style.transform = "translateX(-30px)";
                        } else if (el.classList.contains("animate-slide-in-right")) {
                            el.style.transform = "translateX(30px)";
                        } else if (el.classList.contains("animate-fade-in")) {
                            el.style.transform = "translateY(0)";
                        }
                    }
                });
            }, observerOptions);

        animatedElements.forEach((element) => {
            element.style.visibility = "hidden";
            element.style.opacity = "0";

            if (element.classList.contains("animate-slide-up")) {
                element.style.transform = "translateY(30px)";
            } else if (element.classList.contains("animate-slide-in-left")) {
                element.style.transform = "translateX(-30px)";
            } else if (element.classList.contains("animate-slide-in-right")) {
                element.style.transform = "translateX(30px)";
            }

            element.style.transition = reduceMotion ? "none" : "opacity 0.6s ease-out, transform 0.6s ease-out";

            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);
}
