import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative w-full">
            <Image
                // Start of Selection
                src="/images/gallery/main-banner.png"
                alt="Banner Image"
                width={1920}
                height={600}
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl sm:text-6xl font-semibold">Happy Birthday Christine</h1>
                </div>
            </div>
            {/* Wave Edge 물결무늬 - 애니메이션 */}
            {/* <svg
                className="absolute bottom-0 w-full h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,240C672,256,768,256,864,245.3C960,235,1056,213,1152,218.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg> */}
        </section>
    );
}