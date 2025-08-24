import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Target, Eye, Heart, Users, Award, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We're developing cutting-edge teaching methods that incorporate the latest technologies and pedagogical approaches.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our team is passionate about making science and technology accessible and exciting for every student.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We're building a supportive learning community where students, educators, and parents collaborate for success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in our curriculum, instruction, and student outcomes.",
    },
  ]

  const milestones = [
    { year: "2025", event: "Company Launch", description: "Official launch of Ashtavakrah Technologies" },
    { year: "2025", event: "First Workshop", description: "Conducting our first Arduino workshop" },
    {
      year: "2025",
      event: "Curriculum Development",
      description: "Development of comprehensive AI and Machine Learning curriculum",
    },
    {
      year: "2025",
      event: "Partnerships",
      description: "Establishing partnerships with schools and educational institutions",
    },
    {
      year: "2026",
      event: "Expansion",
      description: "Expanding to serve more students across multiple programs",
    },
  ]

  const teamMembers = [
    {
      name: "Nisha Gupta",
      role: "Executive Director",
      // expertise: "PhD in Computer Science, 15+ years in STEM education",
      image: "/n.jpg",
    },
    {
      name: "Sadanand Mandal",
      role: "Administrative Officer",
      // expertise: "Data Scientist, Microsoft Certified",
      image: "/s.jpg",
    },
    {
      name: "Rohit Maurya",
      role: "Lead Instructor",
      // expertise: "M.Tech in Electronics, Former Google Engineer",
      image: "/r.jpg",
    },
    // {
    //   name: "Bharti Sighal",
    //   role: "Lead Instructor",
    //   // expertise: "Robotics Expert, IIT Graduate",
    //   image: "/b.jpg",
    // },
    {
      name: "Yanmila Shadang",
      role: "Specialist",
      // expertise: "Data Scientist, Microsoft Certified",
      image: "/y.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4">About Ashtavakrah Technologies</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Pioneering the Future of
              <span className="text-purple-600"> STEM Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in New Delhi, we are preparing to launch in 2025, dedicated to making science and technology
              engaging, accessible, and career-ready through innovative learning experiences that inspire the next
              generation of innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  To make science and technology engaging and career-ready through interactive learning experiences that
                  bridge the gap between theoretical knowledge and practical application, preparing students for the
                  challenges of tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be India's leading STEM education provider, creating a generation of innovative thinkers and
                  problem solvers who will drive technological advancement and contribute to building a better future
                  for society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Journey</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Roadmap</h2>
              <p className="text-xl text-gray-600">Our vision for transforming STEM education in India</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{milestone.event}</h3>
                        <Badge variant="outline">{milestone.year}</Badge>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600">The core principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Educators & Innovators</h2>
            <p className="text-xl text-gray-600">Our passionate team of educators and industry experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <div className="w-38 h-32 mx-auto rounded-full border-2 border-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-purple-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4">Why Choose Us</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Will Make Us Different</h2>
                <p className="text-xl text-gray-600">
                  We're combining cutting-edge technology with proven educational methods to deliver exceptional
                  learning experiences.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Industry-experienced instructors with real-world expertise",
                  "Hands-on, project-based learning approach",
                  "Small batch sizes for personalized attention",
                  "Comprehensive curriculum covering latest technologies",
                  "Strong focus on practical application and career readiness",
                  "Continuous support and mentorship throughout the journey",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2025</div>
                    <div className="text-sm text-gray-600">Launch Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">Planned Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">Expert</div>
                    <div className="text-sm text-gray-600">Instructors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">Future</div>
                    <div className="text-sm text-gray-600">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
