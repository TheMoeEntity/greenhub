import { useEffect, useRef } from "react";

export const useScrollTop = () => {
    const scrollBtn = useRef<HTMLDivElement | null>(null);
    const isBrowser = () => typeof window !== "undefined";
    useEffect(() => {
        window.addEventListener("scroll", animateIn);
        return () => {
            window.removeEventListener("scroll", animateIn);
        };
    }, []);
    const animateIn = () => {
        if (!isBrowser()) return;
        if (scrollBtn.current) {
            if (
                document.body.scrollTop > 120 ||
                document.documentElement.scrollTop > 120
            ) {
                scrollBtn.current.style.bottom = "30px";
                scrollBtn.current.style.opacity = "1";
            } else {
                scrollBtn.current.style.bottom = "-20px";
                scrollBtn.current.style.opacity = "0";
            }
        }
    };
    const scrollTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const ScrollTopElement = (): JSX.Element => (
        <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
            <i className="text-3xl fas fa-angle-up"></i>
        </div>
    )
    return { ScrollTopElement };
};