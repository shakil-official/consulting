"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";

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
    {
      name: "Our Story",
      href: "#", // Parent link can be a placeholder or first sub-item
      subItems: [
        { name: "Group Resilience", href: "#story" },
        { name: "Expertise & Approach", href: "#expertise" },
        { name: "Subject Matter Experts", href: "#panel-of-experts" },
        { name: "Strategic Pillars", href: "#strategic-pillars" },
      ],
    },

    {
      name: "What We Do",
      href: "#", // Parent link can be a placeholder or first sub-item
      subItems: [
        { name: "Services", href: "#whatWeDoNow" },
        { name: "PEARL$", href: "#pearl" },
        { name: "SPRINGERED", href: "#risks" },
        { name: "Reach and Sectors", href: "#reach-and-sectors" },
      ],
    },
    { name: "Maturity Check", href: "#maturity-check" },
    { name: "Join us", href: "#joinUsAs" },
  ]

  return (
      <header
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg "
                  : "bg-transparent bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60"
          }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {/*<span className="text-white font-bold text-lg">G</span>*/}
                  <Image
                      src={"/logo_tp.png"}
                      alt={"logo_"}
                      width={120}
                      height={220}
                      className="shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
              <span className={`font-bold text-base transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
                GROUP RESILIENCE
              </span>
                <div
                    className={`text-sm font-medium transition-colors ${isScrolled ? "text-blue-600" : "text-blue-200"}`}
                >
                  {/* Resilience as your Competitive Advantage */}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) =>
                  item.subItems ? (
                      <DropdownMenu key={item.name}>
                        <DropdownMenuTrigger
                            className={`font-medium transition-all duration-200 hover:scale-105 ${
                                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                            }`}
                        >
                          {item.name}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className={`mt-2 p-2 rounded-lg shadow-lg ${
                                isScrolled ? "bg-white border border-gray-200" : "bg-blue-900/90 border border-blue-800"
                            }`}
                        >
                          {item.subItems.map((subItem) => (
                              <DropdownMenuItem key={subItem.name} asChild>
                                <Link
                                    href={subItem.href}
                                    className={`block px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                                        isScrolled
                                            ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            : "text-white/90 hover:bg-blue-800 hover:text-white"
                                    }`}
                                >
                                  {subItem.name}
                                </Link>
                              </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                  ) : (
                      <Link
                          key={item.name}
                          href={item.href}
                          className={`font-medium transition-all duration-200 hover:scale-105 ${
                              isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                          }`}
                      >
                        {item.name}
                      </Link>
                  ),
              )}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              {/*<Button*/}
              {/*    variant="outline"*/}
              {/*    className={`border-2 font-medium transition-all duration-300 hover:scale-105 ${*/}
              {/*        isScrolled*/}
              {/*            ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"*/}
              {/*            : "border-white text-blue-500 hover:bg-white hover:text-blue-600"*/}
              {/*    }`}*/}
              {/*>*/}
              {/*  Get Started*/}
              {/*</Button>*/}
              <Button className="bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-700 hover:to-indigo-800 font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Reach out
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
                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item) =>
                        item.subItems ? (
                            <AccordionItem value={item.name} key={item.name} className="border-none">
                              <AccordionTrigger className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-50">
                                {item.name}
                              </AccordionTrigger>
                              <AccordionContent className="pl-8 pr-4 py-2 space-y-2">
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium py-1 rounded-md hover:bg-blue-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                        ),
                    )}
                  </Accordion>
                  <div className="flex flex-col space-y-3 pt-4 px-4">
                    {/*<Button*/}
                    {/*    variant="outline"*/}
                    {/*    className="w-full border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"*/}
                    {/*>*/}
                    {/*  Get Started*/}
                    {/*</Button>*/}
                    <Button className="w-full bg-gradient-to-r from-blue-900 to-indigo-900">Reach out</Button>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}
