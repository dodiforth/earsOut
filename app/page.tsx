import Banner from "./components/Banner";
import ArtSection from "./components/ArtSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <main className="flex flex-col items-center justify-center px-4 sm:px-20">
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
      </main>
    </div>
  );
}