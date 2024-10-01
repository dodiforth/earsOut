"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ArtSectionProps {
    imageSrc: string;
    altText: string;
    phrase: string;
    reverse?: boolean;
}

export default function ArtSection({ imageSrc, altText, phrase, reverse = false }: ArtSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-center my-16 opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''
                }`}
        >
            <Image
                src={imageSrc}
                alt={altText}
                width={400}
                height={400}
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-4 sm:mt-0 sm:mx-8 text-center sm:text-left text-2xl font-medium">
                {phrase}
            </p>
        </div>
    );
}