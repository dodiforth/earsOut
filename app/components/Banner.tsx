import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative w-full">
            {/* Image Wrapper */}
            <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 relative rounded-lg overflow-hidden">
                <Image
                    src="/images/gallery/main-banner.png"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="contain"
                    className="object-contain rounded-lg"
                />
            </div>
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="font-chakra-petch text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold
                        text-shadow-3d transition-all duration-300 hover:transform hover:scale-105">
                        Happy Birthday Christine
                    </h1>
                </div>
            </div>
            {/* Cloud Animation */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
                {/* First Cloud */}
                <div className="absolute top-0 w-[200%] h-20 sm:h-24 md:h-28 lg:h-32 animate-moveClouds">
                    <svg
                        className="relative w-[100%] h-full text-gray-300 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 60"
                    >
                        <path
                            fill="currentColor"
                            d="M50 30 a20 20 0 1 1-40 0 a15 15 0 1 1 30 0"
                        ></path>
                    </svg>
                </div>
                {/* Second Cloud */}
                <div className="absolute top-10 sm:top-14 md:top-16 lg:top-20 w-[200%] h-20 sm:h-24 md:h-28 lg:h-32 animate-moveClouds animation-delay-30">
                    <svg
                        className="relative w-[100%] h-full text-gray-400 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 60"
                    >
                        <path
                            fill="currentColor"
                            d="M50 30 a20 20 0 1 1-40 0 a15 15 0 1 1 30 0"
                        ></path>
                    </svg>
                </div>
                {/* Third Cloud */}
                <div className="absolute top-20 sm:top-24 md:top-28 lg:top-32 w-[200%] h-20 sm:h-24 md:h-28 lg:h-32 animate-moveClouds animation-delay-15">
                    <svg
                        className="relative w-[100%] h-full text-gray-200 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 60"
                    >
                        <path
                            fill="currentColor"
                            d="M60 35 a25 25 0 1 1-50 0 a20 20 0 1 1 35 0"
                        ></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}