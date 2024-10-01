import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    const youtubeUrl = "https://youtu.be/HFbDz3OTdz8";
    const thumbnailUrl = "/images/gallery/paris.png"; // Replace with your actual thumbnail image path

    return (
        <footer className="py-8 text-center">
            <p className="text-2xl mb-4 font-caveat">Remember how I kept asking if I ever sent you another video of Paris? Well, I thought I’d take you on a virtual tour! So, I made a new video just for you ☺️</p>
            <div className="video-link-container">
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-2 inline-block">
                    Click here or the image to watch the video!
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={thumbnailUrl}
                        alt="Birthday video thumbnail"
                        width={560}
                        height={315}
                        className="mx-auto cursor-pointer"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;