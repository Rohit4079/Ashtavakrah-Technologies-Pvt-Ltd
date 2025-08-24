import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Users, Award, Star, CheckCircle, Play, Download, BookOpen } from "lucide-react"
import Image from 'next/image';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Arduino Programming Fundamentals",
      description: "Learn the basics of microcontroller programming with hands-on Arduino projects",
      category: "Microcontrollers",
      level: "Beginner",
      duration: "4 weeks",
      students: 150,
      rating: 4.8,
      // price: 5000,
      image:  "/arduino-teaching-1.jpg",

      features: [
        "Basic electronics concepts",
        "Arduino IDE setup and usage",
        "Sensor integration projects",
        "LED and motor control",
        "Final project: Smart home system",
      ],
      instructor: "Amit Patel",
      popular: false,
    },
    {
      id: 2,
      title: "Machine Learning for Beginners",
      description: "Introduction to AI and ML concepts with Python programming",
      category: "AI/ML",
      level: "Intermediate",
      duration: "8 weeks",
      students: 200,
      rating: 4.9,
      // price: 12000,
      image: "/mi.png",
      features: [
        "Python programming basics",
        "Data analysis with pandas",
        "Machine learning algorithms",
        "Model training and evaluation",
        "Final project: Prediction system",
      ],
      instructor: "Sneha Gupta",
      popular: true,
    },
    {
      id: 3,
      title: "Robotics Engineering",
      description: "Build and program autonomous robots from scratch",
      category: "Robotics",
      level: "Intermediate",
      duration: "10 weeks",
      students: 120,
      rating: 4.7,
      // price: 15000,
      image: "/ro.jpg",
      features: [
        "Robot design principles",
        "Motor control and sensors",
        "Navigation algorithms",
        "Computer vision integration",
        "Final project: Autonomous robot",
      ],
      instructor: "Rajesh Kumar",
      popular: false,
    },
    {
      id: 4,
      title: "Quantum Computing Basics",
      description: "Explore the fundamentals of quantum computing and quantum algorithms",
      category: "Quantum",
      level: "Advanced",
      duration: "6 weeks",
      students: 80,
      rating: 4.6,
      // price: 18000,
      image: "/qu.jpg",
      features: [
        "Quantum mechanics principles",
        "Quantum gates and circuits",
        "Qiskit programming",
        "Quantum algorithms",
        "Final project: Quantum application",
      ],
      instructor: "Dr. Priya Sharma",
      popular: false,
    },
    {
      id: 5,
      title: "IoT Development Workshop",
      description: "Create connected devices and IoT applications",
      category: "IoT",
      level: "Intermediate",
      duration: "6 weeks",
      students: 100,
      rating: 4.8,
      // price: 10000,
      image: "/iot.png",
      features: [
        "IoT architecture and protocols",
        "ESP32 and WiFi connectivity",
        "Cloud integration",
        "Mobile app development",
        "Final project: Smart monitoring system",
      ],
      instructor: "Amit Patel",
      popular: false,
    },
    {
      id: 6,
      title: "3D Printing & Design",
      description: "Learn 3D modeling and printing for prototyping",
      category: "Design",
      level: "Beginner",
      duration: "4 weeks",
      students: 90,
      rating: 4.5,
      // price: 8000,
      image: "/3d.webp",
      features: [
        "3D modeling with Fusion 360",
        "3D printing technologies",
        "Material selection",
        "Post-processing techniques",
        "Final project: Custom prototype",
      ],
      instructor: "Sneha Gupta",
      popular: false,
    },
  ]

  const categories = ["All", "Microcontrollers", "AI/ML", "Robotics", "Quantum", "IoT", "Design"]
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Master Tomorrow's
              <span className="text-purple-600"> Technologies</span> Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed to take you from beginner to expert in cutting-edge technologies. Learn
              through hands-on projects and real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-purple-50">
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Levels:</span>
              {levels.map((level) => (
                <Badge key={level} variant="outline" className="cursor-pointer hover:bg-blue-50">
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                {course.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Most Popular</Badge>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Play className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">What you'll learn:</h4>
                    <div className="space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {course.features.length > 3 && (
                        <p className="text-xs text-gray-500">+{course.features.length - 3} more topics</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Instructor</p>
                      <p className="font-medium text-gray-900">{course.instructor}</p>
                    </div>
                    {/* <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">₹{course.price.toLocaleString()}</p>
                    </div> */}
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <BookOpen className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Learning Paths</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Structured Learning Journeys</h2>
            <p className="text-xl text-gray-600">
              Follow our curated learning paths to master specific technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete AI/ML Developer",
                description: "From Python basics to advanced machine learning",
                courses: ["Python Fundamentals", "Data Science", "Machine Learning", "Deep Learning"],
                duration: "16 weeks",
                price: "₹25,000",
              },
              {
                title: "IoT Engineer Track",
                description: "Build connected devices and smart systems",
                courses: ["Arduino Basics", "IoT Development", "Cloud Integration", "Mobile Apps"],
                duration: "14 weeks",
                price: "₹22,000",
              },
              {
                title: "Robotics Specialist",
                description: "Design and program autonomous robots",
                courses: ["Electronics Basics", "Programming", "Robotics Engineering", "AI Integration"],
                duration: "18 weeks",
                price: "₹28,000",
              },
            ].map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {path.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">
                          {courseIndex + 1}
                        </div>
                        <span className="text-sm text-gray-600">{course}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{path.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total Price</p>
                      <p className="text-xl font-bold text-purple-600">{path.price}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Start Learning Path</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Start Learning Today</h2>
            <p className="text-xl text-blue-100">
              Join thousands of students who have already transformed their careers through our comprehensive STEM
              education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  <Award className="mr-2 h-5 w-5" />
                  Enroll Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/contact">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
