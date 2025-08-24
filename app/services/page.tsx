import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Cpu,
  Brain,
  Atom,
  Rocket,
  Package,
  BookOpen,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Cpu,
      title: "Microcontroller-Based Workshops",
      description: "Hands-on programming with Arduino, Raspberry Pi, and embedded systems",
      features: [
        "Arduino programming fundamentals",
        "Sensor integration and IoT projects",
        "Raspberry Pi development",
        "Real-world project implementation",
      ],
      duration: "4-8 weeks",
      level: "Beginner to Advanced",
      price: "₹5,000 - ₹12,000",
      color: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      icon: Brain,
      title: "AI/ML Training Programs",
      description: "Comprehensive artificial intelligence and machine learning courses",
      features: [
        "Python programming for AI",
        "Machine learning algorithms",
        "Deep learning with TensorFlow",
        "Computer vision projects",
      ],
      duration: "6-12 weeks",
      level: "Intermediate to Advanced",
      price: "₹8,000 - ₹18,000",
      color: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Introduction to quantum computing principles and applications",
      features: ["Quantum mechanics basics", "Quantum algorithms", "Qiskit programming", "Quantum circuit design"],
      duration: "8-10 weeks",
      level: "Advanced",
      price: "₹10,000 - ₹20,000",
      color: "from-green-500 to-teal-500",
      popular: false,
    },
    {
      icon: Rocket,
      title: "Robotics Programs",
      description: "Build, program, and control various types of robots",
      features: [
        "Robot design and assembly",
        "Programming robot movements",
        "Sensor-based navigation",
        "Autonomous robot projects",
      ],
      duration: "6-10 weeks",
      level: "Beginner to Advanced",
      price: "₹7,000 - ₹15,000",
      color: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      icon: Package,
      title: "Scientific DIY Kits",
      description: "Take-home kits for independent learning and experimentation",
      features: [
        "Complete project components",
        "Step-by-step instructions",
        "Video tutorials included",
        "Online support community",
      ],
      duration: "Self-paced",
      level: "All Levels",
      price: "₹1,500 - ₹5,000",
      color: "from-indigo-500 to-purple-500",
      popular: false,
    },
    {
      icon: BookOpen,
      title: "Custom STEM Curriculum",
      description: "Tailored educational programs for schools and institutions",
      features: [
        "Curriculum design consultation",
        "Teacher training programs",
        "Assessment and evaluation tools",
        "Ongoing support and updates",
      ],
      duration: "Customized",
      level: "Institutional",
      price: "Contact for Quote",
      color: "from-yellow-500 to-orange-500",
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Small Batch Sizes",
      description: "Maximum 12 students per batch for personalized attention",
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive certificates recognized by leading tech companies",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekend and evening batches available for working professionals",
    },
    {
      icon: Star,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Comprehensive
              <span className="text-purple-600"> STEM Learning</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From microcontroller programming to quantum computing, we offer a complete range of hands-on educational
              services designed to prepare students for the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{service.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-bold text-purple-600">{service.price}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exceptional Learning Experience</h2>
            <p className="text-xl text-gray-600">We go beyond traditional education to provide comprehensive support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
            <p className="text-xl text-gray-600">A structured approach to ensure maximum learning outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We evaluate your current knowledge and learning goals",
              },
              {
                step: "02",
                title: "Customization",
                description: "Tailor the curriculum to match your specific needs",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Hands-on learning with expert guidance and support",
              },
              {
                step: "04",
                title: "Certification",
                description: "Receive industry-recognized certificates upon completion",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-blue-100">
              Choose from our comprehensive range of STEM programs and take the first step towards mastering tomorrow's
              technologies today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
