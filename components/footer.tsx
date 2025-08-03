import Link from "next/link"
import {Mail, Phone, MapPin, Linkedin, Twitter, Facebook} from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    {/*<div>*/}
                    {/*    <div className="flex items-center space-x-2 mb-6">*/}
                    {/*        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">*/}
                    {/*            <span className="text-white font-bold text-sm">SC</span>*/}
                    {/*        </div>*/}
                    {/*        <span className="font-bold text-xl">SpringConsult</span>*/}
                    {/*    </div>*/}
                    {/*    <p className="text-gray-300 mb-6 leading-relaxed">*/}
                    {/*        Empowering organizations to navigate complex business challenges with confidence and*/}
                    {/*        strategic insight*/}
                    {/*        through our proven SPRINGERD framework.*/}
                    {/*    </p>*/}
                    {/*    <div className="flex space-x-4">*/}
                    {/*        <Link href="#" className="text-gray-400 hover:text-white transition-colors">*/}
                    {/*            <Linkedin className="h-5 w-5"/>*/}
                    {/*        </Link>*/}
                    {/*        <Link href="#" className="text-gray-400 hover:text-white transition-colors">*/}
                    {/*            <Twitter className="h-5 w-5"/>*/}
                    {/*        </Link>*/}
                    {/*        <Link href="#" className="text-gray-400 hover:text-white transition-colors">*/}
                    {/*            <Facebook className="h-5 w-5"/>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link href="#story" className="hover:text-white transition-colors">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="#expertise" className="hover:text-white transition-colors">
                                    Expertise & Approach
                                </Link>
                            </li>
                            <li>
                                <Link href="#panel-of-experts" className="hover:text-white transition-colors">
                                    Subject Matter Experts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">What We Do</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link href="#whatWeDoNow" className="hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#pearl" className="hover:text-white transition-colors">
                                    PEARL$
                                </Link>
                            </li>
                            <li>
                                <Link href="#risks" className="hover:text-white transition-colors">
                                    SPRINGERED
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-6">Engage with Us</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link href="#maturity-check" className="hover:text-white transition-colors">
                                    Maturity Check
                                </Link>
                            </li>
                            <li>
                                <Link href="#joinUsAs" className="hover:text-white transition-colors">
                                    Join us
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Contact</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400"/>
                                <span>info@springconsult.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400"/>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-400 mt-0.5"/>
                                <span>
                  123 Business District
                  <br/>
                  New York, NY 10001
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SpringConsult. All rights
                            reserved.</p>
                        {/*<div className="flex space-x-6 mt-4 md:mt-0">*/}
                        {/*    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">*/}
                        {/*        Privacy Policy*/}
                        {/*    </Link>*/}
                        {/*    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">*/}
                        {/*        Terms of Service*/}
                        {/*    </Link>*/}
                        {/*    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">*/}
                        {/*        Cookie Policy*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </footer>
    )
}
