import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { X } from 'lucide-react';
import after1 from '../assets/images/galleries/after-image1.jpeg';
import before1 from '../assets/images/galleries/before-image1.jpeg';
import after2 from '../assets/images/galleries/after-image2.jpeg';
import before2 from '../assets/images/galleries/before-image2.jpeg';
import gallery1 from '../assets/images/galleries/gallery1.png';
import gallery2 from '../assets/images/galleries/gallery2.png';
import gallery3 from '../assets/images/galleries/gallery3.png';
import gallery4 from '../assets/images/galleries/gallery4.png';
import gallery5 from '../assets/images/galleries/gallery5.png';
import gallery6 from '../assets/images/galleries/gallery6.png';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

const Galleries: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const beforeAfterImages = [
        {
            before: before1,
            after: after1,
            alt: "Ceiling repair transformation"
        },
        {
            before: before2,
            after: after2,
            alt: "Bench restoration transformation"
        }
    ];

    const galleryImages: GalleryImage[] = [
        { id: 1, src: gallery1, alt: "Carpet cleaning" },
        { id: 2, src: gallery2, alt: "Car interior detailing" },
        { id: 3, src: gallery3, alt: "Exterior fixtures" },
        { id: 4, src: gallery4, alt: "Concrete patio work" },
        { id: 5, src: gallery5, alt: "Vehicle interior cleaning" },
        { id: 6, src: gallery6, alt: "Outdoor structure installation" }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#8B0000] mb-8">
                    Swipe to Reveal! – See the Transformation
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Side - Before/After Sliders */}
                    <div className="w-full md:w-1/3">
                        <div className="space-y-8">
                            {beforeAfterImages.map((image, index) => (
                                <div key={index} className="shadow-xl rounded-lg overflow-hidden max-h-[250px]">
                                    <ReactCompareImage
                                        leftImage={image.before}
                                        rightImage={image.after}
                                        sliderPositionPercentage={0.5}
                                        handle={
                                            <div key={`handle-${index}`} className="w-4 h-4 bg-red-600 rounded-full border-2 border-white" style={{ zIndex: 2 }} />
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Gallery Grid */}
                    <div className="w-full md:w-2/3 my-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Click to enlarge
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage.src || "/placeholder.svg"}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-[90vh] object-contain"
                    />
                </div>
            )}
        </section>
    );
};

export default Galleries;