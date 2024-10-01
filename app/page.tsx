import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import ArtSection from "./components/ArtSection";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <main className="font-caveat flex flex-col items-center justify-center px-4 sm:px-20">
        <ArtSection
          imageSrc="/images/drawing/ex1.png"
          altText="Art Work 1"
          phrase="Art speaks where words are unable to explain."
        />
        <ArtSection
          imageSrc="/images/drawing/ex2.png"
          altText="Art Work 2"
          phrase="Every artist was first an amateur."
          reverse
        />
        <ArtSection
          imageSrc="/images/drawing/ex3.png"
          altText="Art Work 3"
          phrase="Creativity takes courage."
        />
        <ArtSection
          imageSrc="/images/drawing/ex04.png"
          altText="Art Work 4"
          phrase="Creativity takes courage."
          reverse
        />
        <ArtSection
          imageSrc="/images/drawing/ex05.png"
          altText="Art Work 5"
          phrase="Creativity takes courage."
        />
        <ArtSection
          imageSrc="/images/drawing/ex06.png"
          altText="Art Work 5"
          phrase="Creativity takes courage."
          reverse
        />
        <ArtSection
          imageSrc="/images/drawing/ex07.png"
          altText="Art Work 5"
          phrase="Creativity takes courage."
        />
        <ArtSection
          imageSrc="/images/drawing/ex08.png"
          altText="Art Work 5"
          phrase="Creativity takes courage."
          reverse
        />
        <ImageCarousel
          images={[
            { src: "/images/gallery/c0withFrame.png", alt: "Art Work 1" },
            { src: "/images/gallery/c2withFrame.png", alt: "Art Work 2" },
            { src: "/images/gallery/c4withFrame.png", alt: "Art Work 3" },
            { src: "/images/gallery/c5withFrame.png", alt: "Art Work 4" },
          ]}
        />
      </main>
    </div>
  );
}