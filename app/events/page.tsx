import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, Bell, ArrowRight, Zap, Star, CheckCircle } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Pre-Launch Information Session",
      description: "Learn about our upcoming STEM programs and get exclusive early access",
      date: "January 15, 2025",
      time: "6:00 PM - 7:30 PM",
      location: "Online Webinar",
      type: "Webinar",
      status: "Registration Opening Soon",
      capacity: "Unlimited",
      price: "Free",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center",
      highlights: [
        "Overview of all upcoming programs",
        "Meet our expert instructors",
        "Q&A session with founders",
        "Early bird discount announcements",
      ],
    },
    {
      id: 2,
      title: "Arduino Workshop - Beta Testing",
      description: "Exclusive beta testing session for our Arduino programming workshop",
      date: "February 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "New Delhi (Venue TBA)",
      type: "Workshop",
      status: "Beta Testing",
      capacity: "15 students",
      price: "₹500 (Refundable)",
      image: "/ar.webp",
      highlights: [
        "Hands-on Arduino programming",
        "Build your first IoT project",
        "Take home Arduino kit",
        "Certificate of participation",
      ],
    },
    {
      id: 3,
      title: "AI/ML Career Guidance Seminar",
      description: "Career opportunities in AI and Machine Learning for students",
      date: "March 10, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Hybrid (Online + Delhi)",
      type: "Seminar",
      status: "Planning Phase",
      capacity: "100 students",
      price: "Free",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
      highlights: [
        "Industry expert speakers",
        "Career roadmap guidance",
        "Scholarship opportunities",
        "Networking with professionals",
      ],
    },
    {
      id: 4,
      title: "Grand Opening Celebration",
      description: "Official launch event with demonstrations and special offers",
      date: "April 5, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "New Delhi (Main Campus)",
      type: "Launch Event",
      status: "Save the Date",
      capacity: "200 attendees",
      price: "Free",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center",
      highlights: [
        "Live demonstrations of all programs",
        "Special launch discounts",
        "Meet the entire team",
        "Refreshments and prizes",
      ],
    },
  ]

  const eventTypes = ["All", "Webinar", "Workshop", "Seminar", "Launch Event"]

  const pastEvents = [
    {
      title: "Company Foundation Announcement",
      date: "December 2024",
      description: "Official announcement of Ashtavakrah Technologies founding",
      attendees: "Online Community",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4">Events & Workshops</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Join Our
              <span className="text-purple-600"> Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of our exciting launch journey! Attend our pre-launch events, beta testing sessions, and exclusive
              workshops as we prepare to revolutionize STEM education.
            </p>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Event Types:</span>
              {eventTypes.map((type) => (
                <Badge key={type} variant="outline" className="cursor-pointer hover:bg-purple-50">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Upcoming Events</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Don't Miss Our Launch Events</h2>
            <p className="text-xl text-gray-600">
              Be among the first to experience our innovative STEM education programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                <div className="relative">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">{event.type}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white">
                      {event.price}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className={
                        event.status === "Registration Opening Soon"
                          ? "text-blue-600 border-blue-600"
                          : event.status === "Beta Testing"
                            ? "text-orange-600 border-orange-600"
                            : event.status === "Planning Phase"
                              ? "text-yellow-600 border-yellow-600"
                              : "text-green-600 border-green-600"
                      }
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Event Highlights:</h4>
                    <div className="space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-xs text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={event.status === "Planning Phase" || event.status === "Save the Date"}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    {event.status === "Registration Opening Soon"
                      ? "Notify Me"
                      : event.status === "Beta Testing"
                        ? "Apply for Beta"
                        : event.status === "Planning Phase"
                          ? "Coming Soon"
                          : "Save the Date"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Stay Updated</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Event Notifications</h2>
              <p className="text-lg text-gray-600">
                Be the first to know about our events and get exclusive early access to registrations
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Bell className="mr-3 h-6 w-6 text-purple-600" />
                  Event Notification Signup
                </CardTitle>
                <CardDescription>Subscribe to get notified about all our upcoming events and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interests">Interested Event Types</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Workshops", "Webinars", "Seminars", "Launch Events"].map((interest) => (
                        <Badge key={interest} variant="outline" className="cursor-pointer hover:bg-purple-50">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Zap className="mr-2 h-4 w-4" />
                    Subscribe to Notifications
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Journey So Far</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Milestones</h2>
            <p className="text-xl text-gray-600">Key moments in our journey to launch</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index} className="mb-6 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                      <p className="text-gray-600">{event.description}</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Completed
                        </Badge>
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-xl text-blue-100">
              Be part of the future of STEM education. Join our events, connect with like-minded learners, and be among
              the first to experience our innovative programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  <Star className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/courses">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
