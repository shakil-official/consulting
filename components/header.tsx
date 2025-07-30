"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Risks", href: "#risks" },
    { name: "Expertise", href: "#expertise" },
    { name: "Services", href: "#services" },
    { name: "Pillars", href: "#pillars" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg " : "bg-transparent bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
            </div>
            <div>
              <span className={`font-bold text-2xl transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
                SpringerD
              </span>
              <div
                className={`text-sm font-medium transition-colors ${isScrolled ? "text-blue-600" : "text-blue-200"}`}
              >
                Consultancy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className={`border-2 font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border-white text-gray-800 hover:bg-white hover:text-blue-600"
              }`}
            >
              Get Started
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/20 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button
                  variant="outline"
                  className="w-full border-blue-400 text-blue-600- hover:bg-blue-600 hover:text-white !bg-gray-800"
                >
                  Get Started
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700">Contact Us</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60"/>*/}
    </header>
  )
}
