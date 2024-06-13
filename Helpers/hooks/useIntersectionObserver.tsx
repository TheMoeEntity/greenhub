import { useEffect, useRef, MutableRefObject } from 'react';

export const useIntersectionObserver = (callback: () => void): MutableRefObject<HTMLDivElement | null> => {
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    callback();
                    observer.disconnect();
                }
            },
            { rootMargin: '120px' } // Adjust the threshold as needed
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [callback]);

    return elementRef;
};

