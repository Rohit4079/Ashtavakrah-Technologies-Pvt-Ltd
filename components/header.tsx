"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Services", href: "/services" },
    { name: "Services", href: "/courses" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-md transition-all duration-300 group-hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/ashtavakrah-logo.png"
                alt="Ashtavakrah Technologies Pvt Ltd"
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                Ashtavakrah Technologies
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Pvt Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-purple-50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              {/* Mobile Logo */}
              <div className="flex justify-center mb-8 mt-4">
                <div className="relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                  <img src="/ashtavakrah-logo.png" alt="Ashtavakrah Technologies Pvt Ltd" className="h-12 w-auto" />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 py-3 px-4 rounded-md hover:bg-purple-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
