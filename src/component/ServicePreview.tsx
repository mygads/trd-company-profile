import type React from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import tooltip from '../assets/desain/Tooltip.png'
import handyman from '../assets/images/galleries/handyman.jpeg'
import cameraInstalation from '../assets/images/galleries/camera-instalation.jpeg'
import windowsTinting from '../assets/images/galleries/windows.png'


interface Service {
    id: string
    title: string
    image: string
    link: string
}

const services: Service[] = [
    {
        id: "handyman",
        title: "Handyman Services",
        image: handyman,
        link: "/services/handyman",
    },
    {
        id: "camera",
        title: "Home Camera Installation",
        image: cameraInstalation,
        link: "/services/camera-installation",
    },
    {
        id: "window",
        title: "Window Tinting",
        image: windowsTinting,
        link: "/services/window-tinting",
    },
    {
        id: "pressure",
        title: "Pressure Cleaning",
        image: windowsTinting,
        link: "/services/pressure-cleaning",
    },
    {
        id: "painting",
        title: "Painting",
        image: windowsTinting,
        link: "/services/painting",
    },
]

const ServicePreview: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // const scroll = (direction: "left" | "right") => {
    //     if (scrollContainerRef.current) {
    //     const scrollAmount = 400 // Adjust scroll amount as needed
    //     const newScrollPosition =
    //         scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

    //     scrollContainerRef.current.scrollTo({
    //         left: newScrollPosition,
    //         behavior: "smooth",
    //     })
    //     }
    // }

    return (
        <section
            className="py-12 md:py-16 lg:py-24"
            style={{
                background: `url(${tooltip}) white 50px 50px repeat`,
            }}
        >
            <div className="container mx-4 md:mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#7D0202] leading-tight flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4">
                    <span className="w-0 md:w-20 h-2 bg-amber-400 self-center"></span>
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#7D0202]text-center md:text-left">
                        From Repairs to Renovations - We've Got You Covered!
                    </h2>
                </div>

                {/* Services Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="md:w-3/4 overflow-x-auto scrollbar-hide scroll-smooth p-4"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    <div className="flex gap-6">
                    {services.map((service) => (
                        <Link
                        key={service.id}
                        to={service.link}
                        className="relative flex-none w-full sm:w-[300px] md:w-[350px] h-[200px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
                        style={{ scrollSnapAlign: "start" }}
                        >
                        <img
                            src={service.image || handyman}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black/75 flex items-center justify-center">
                            <h3 className="text-lg sm:text-xl font-semibold text-white">
                            {service.title}
                            </h3>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicePreview

