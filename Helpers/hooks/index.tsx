import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export const useScrollTop = () => {
  const pathname = usePathname();
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
  return { scrollTop, scrollBtn, pathname };
};
export const useStickyNav = (isStickyClass: string) => {
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (headerRef.current) {
      let number = headerRef.current.style.display === "" ? 120 : 175;
      const stickyClass = scrollTop >= number ? isStickyClass : "";
      setSticky(stickyClass);
    }
  };
  return { sticky, headerRef };
};
export const useSideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef<HTMLDivElement | null>(null);

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "70%";
        sideContent.current.style.visibility = "visible";
      }
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "0%";
        sideContent.current.style.visibility = "hidden";
      }
    }, 400);
  };
  return { show, hide, sidebar, sideContent };
};
export const useValidRoute = (pathname: string): boolean => {
  const params = usePathname();
  const validRoutes: string[] = [
    "/localhost:3000",
    "/contact",
    "/",
    "/about",
    "/works/[id]",
    '/blog',
    "/blog" + params.slice(5, params.length),
    "/works" + params.slice(6, params.length),
  ];
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return checkValid(pathname);
};
export const useReveal = (useInView: any) => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  const { push } = useRouter()
  return { push, visible, ref }
}