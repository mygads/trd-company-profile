import type React from "react"
import LogoIcon from "../../assets/images/logo_trd_bg.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer: React.FC = () => {
    return (
        <footer className="w-full" style={{ background: 'linear-gradient(180deg, #262626 44.51%, #7D0202 100%)' }}>
        {/* Map Section */}
            <div className="container h-[300px] mx-auto mt-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4899.86725965252!2d98.57188677581314!3d3.5611079504804466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f4a8158353f%3A0x49a0ac52c048fa8b!2sTRD%20SERVICE!5e1!3m2!1sid!2sid!4v1740234720652!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            {/* Footer Content */}
            <div className="text-white py-12 mt-12 container mx-auto">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Logo & Address */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img src={LogoIcon} alt="TRD Elite Services" className="h-20 w-auto mr-5" />
                            <div className="space-y-2 ">
                                <h3 className="text-xl">Office</h3>
                                <p className="text-sm font-light text-white ">
                                    157 Braidwood DR
                                </p>
                                <p className="text-sm font-light text-white ">
                                    Australind WA 6233
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-2">
                        <h3 className="text-xl">Services</h3>
                        <ul className="text-sm font-light text-white space-y-2">
                            <li><a className="underline underline-offset-2 hover:text-gray-300" href="#">Handyman</a></li>
                            <li><a className="underline underline-offset-2 hover:text-gray-300" href="#">Home Camera</a></li>
                            <li><a className="underline underline-offset-2 hover:text-gray-300" href="#">Window Tinting</a></li>
                            <li><a className="underline underline-offset-2 hover:text-gray-300" href="#">Pressure Cleaning</a></li>
                            <li><a className="underline underline-offset-2 hover:text-gray-300" href="#">Painting</a></li>
                        </ul>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <h3 className="text-xl">Email US</h3>
                        <a href="mailto:trdeservices@outlook.com" className="text-sm font-light text-white hover:text-gray-300 ">
                        trdeservices@outlook.com
                        </a>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl">Social Media</h3>
                        <div className="space-y-2">
                            <a
                                href="https://instagram.com/trd.services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white hover:text-gray-300"
                            >
                                <FaInstagram className="mr-2" />
                                <span className="text-sm font-light text-white hover:text-gray-300">@trd.services</span>
                            </a>
                            <a
                                href="https://facebook.com/TRD-Elite-Services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white hover:text-gray-300"
                            >
                                <FaFacebookF className="mr-2" />
                                <span className="text-sm font-light text-white hover:text-gray-300">TRD Elite Services</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                        <h3 className="text-xl">Call US</h3>
                        <a href="tel:+61234567890" className="text-sm font-light text-white hover:text-gray-300">
                        Tel: 0401 947 050
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="container mx-auto px-4 mt-8 pt-8 border-t border-red-700">
                <p className="text-sm text-center text-white">© 2025 by TRD Elite Services. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

