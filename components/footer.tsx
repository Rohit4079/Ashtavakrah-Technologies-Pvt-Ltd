import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative overflow-hidden rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/ashtavakrah-logo.png"
                  alt="Ashtavakrah Technologies Pvt Ltd"
                  className="h-10 w-auto transition-all duration-300 hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ashtavakrah Technologies</h3>
                <p className="text-sm text-gray-400 -mt-1">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Making science and technology engaging and career-ready through interactive learning experiences for
              school students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["About Us", /*"Services",*/ "Services", "Events", /*"Blog",*/ "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Quantum Computing</p>
              <p>AI/ML Training</p>
              <p>Embedded Microcontroller Workshops</p>            
              <p>Robotics Programs</p>
              <p>Scientific DIWI </p>
              <p>Active Science Experiments</p>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Vande Matram Apartment, Pocket-2 Sector 6 Dwarka, Delhi</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91-8090971821</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@ashtavakrah.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-md hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Ashtavakrah Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
