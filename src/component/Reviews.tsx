import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import bgReview from '../assets/images/bg-review.png';

interface Review {
    id: number;
    name: string;
    position: string;
    comment: string;
    rating: number;
    avatarColor: string;
}

const Reviews = () => {
    const reviews: Review[] = [
        {
            id: 1,
            name: "Sophia Anderson",
            position: "Internal Implementation Officer",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 2,
            name: "Michael Roberts",
            position: "Property Manager",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 3,
            name: "Emma Thompson",
            position: "Home Owner",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 4,
            name: "David Chen",
            position: "Business Owner",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 5,
            name: "Sarah Williams",
            position: "Interior Designer",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-pink-100"
        },
        {
            id: 6,
            name: "James Patterson",
            position: "Real Estate Agent",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 7,
            name: "Lisa Johnson",
            position: "Office Manager",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 8,
            name: "Robert Wilson",
            position: "Facility Manager",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        },
        {
            id: 9,
            name: "Emily Davis",
            position: "Property Owner",
            comment: "Top-notch service! The team was professional, efficient, and the results were beyond my expectations. Highly recommended!",
            rating: 5,
            avatarColor: "bg-green-100"
        }
    ];

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgReview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }}
            />

            {/* Checkered Pattern Overlay */}
            <div className="absolute top-0 right-0 w-1/3 h-full">
                <div className="w-full h-full" style={{
                    background: `
                        repeating-conic-gradient(
                            from 45deg,
                            #000 0deg 90deg,
                            #222 90deg 180deg
                        )
                    `,
                    backgroundSize: '40px 40px',
                    opacity: 0.3
                }}></div>
            </div>

            <div className="relative container mx-auto px-4 z-10">
                {/* Title */}
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Your satisfaction is our priority!
                </h2>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div 
                            key={review.id}
                            className="transform transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-white rounded-lg shadow-xl p-6 h-full flex flex-col">
                                {/* Avatar */}
                                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${review.avatarColor}`}>
                                    <FaUser className="w-6 h-6 text-red-600" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 mb-4 flex-grow">
                                    {review.comment}
                                </p>

                                {/* Reviewer Info */}
                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {review.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {review.position}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full">
                                        <MessageCircle className="w-4 h-4 text-red-600" />
                                        <span className="text-sm text-red-600">Testimonial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;