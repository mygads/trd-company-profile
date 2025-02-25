import Background from '../../assets/images/services-corosel-bg.png'

export const ServicesBanner = () => {
    return (
        <section className="relative h-[600px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="w-full absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                }}
            >
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        What We Do: Expert Solutions for Your Home & Property
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                        Providing high-quality handyman and home maintenance services with professional expertise and attention to detail.
                    </p>
                </div>
            </div>
        </section>
    )
}