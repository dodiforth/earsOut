import Banner from "./components/Banner";
import ArtSection from "./components/ArtSection";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";

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
          phrase="Your creativity and courage in everything you do have been a constant source of inspiration."
          reverse
        />
        <ArtSection
          imageSrc="/images/drawing/ex3.png"
          altText="Art Work 3"
          phrase=" I appreciate so many things about you, especially the way you share your art and your thoughts so openly. "
        />
        <ArtSection
          imageSrc="/images/drawing/ex04.png"
          altText="Art Work 4"
          phrase="So, I thought, why not create something for you in return?"
          reverse
        />
        <ArtSection
          imageSrc="/images/drawing/ex05.png"
          altText="Art Work 5"
          phrase="Consider this a small tribute to your artistry and the impact you’ve had on others, myself included."
        />
        <ArtSection
          imageSrc="/images/drawing/ex06.png"
          altText="Art Work 5"
          phrase="May your birthday be filled with as much creativity and beauty as you bring to the world."
          reverse
        />
        <ArtSection
          imageSrc="/images/drawing/ex07.png"
          altText="Art Work 5"
          phrase="Enjoy every moment, and keep inspiring us all."
        />
        <ArtSection
          imageSrc="/images/drawing/ex08.png"
          altText="Art Work 5"
          phrase="Like you always have been. - from your biggest fan in the world"
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
      <Footer />
    </div>
  );
}