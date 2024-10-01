'use client'
import React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
    src: string;
    alt: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-md">
            <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={300}
                height={450}
                className="w-full h-auto"
            />
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
            >
                &lt;
            </button>
            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageCarousel;