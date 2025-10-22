"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react";
import FireworksCanvas from "@/components/FireworksCanvas";


import {
  Atom,
  Brain,
  Cpu,
  Rocket,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Microscope,
  Zap,
  Target,
  Star,
} from "lucide-react"

// export default function WhyChooseUs() {



export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2500); // 2500ms = 2.5 sec

    return () => clearTimeout(timer); // cleanup
  }, []);

  const features = [
    { text: "Importance of STEM Education for Children in India 💥", href: "https://www.cry.org/blog/importance-of-stem-education-for-children-in-india/"},
    { text: "Cyber Security Awareness Month 2025 💥", href: "https://www.linkedin.com/posts/sulekha-kumari-80350691_cybersecurityawarenessmonth-cybersurakshitviksitbharat-activity-7379419029100421120-uaC_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYWf8oBz93je3zpWSjzja2DrBv0feNQfVo" },
    { text: "Pragati AI for Impact", href: "https://www.hindustantimes.com/genesis/pragati-ai-for-impact-supporting-entrepreneurs-to-empower-people-at-the-last-mile-101759293921506.html" },
    { text: "Empowering students with future-focused skills", href: "https://ableducation.com/abl-news/stem-education-equipping-indias-next-generation-for-a-future-ready-workforce-2/" },
    { text: "Prevention of Cyber Crime 💥", href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2053438" },
    { text: "India’s AI Revolution", href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/mar/doc202536513901.pdf" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2500); // scroll every 2.5s
    return () => clearInterval(interval);
  }, [features.length]);

  const videos = ["/v2.mp4", "/v3.mp4", "/v1.mp4", "/v4.mp4"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000); // ⏱️ change video every 5 sec
    return () => clearInterval(interval);
  }, [videos.length]);


  const services = [
    // {
    //   icon: Cpu,
    //   title: "Microcontroller Workshops",
    //   description: "Hands-on Arduino and Raspberry Pi programming sessions",
    //   color: "from-blue-500 to-cyan-500",
    // },
    // {
    //   icon: Brain,
    //   title: "AI/ML Training",
    //   description: "Introduction to artificial intelligence and machine learning",
    //   color: "from-purple-500 to-pink-500",
    // },
    // {
    //   icon: Atom,
    //   title: "Active Sciences",
    //   description: "Explore the Science with Fun",
    //   color: "from-green-500 to-teal-500",
    // },
    // {
    //   icon: Rocket,
    //   title: "Robotics Programs",
    //   description: "Build and program your own robots",
    //   color: "from-orange-500 to-red-500",
    // },
    {
      img: "/Quantum Computing.jpg", // place your image path here
      title: "Quantum Computing",
      description: "Learn the fundamentals of quantum algorithms and computation.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      img: "/AIML.jpg",
      title: "AI/ML",
      description: "Introduction to Artificial Intelligence and its applications.",
      color: "from-purple-500 to-pink-500",
    },
    {
      img: "/Robotics.png",
      title: "Robotics",
      description: "Hands-on training on supervised and unsupervised learning models.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      img: "/Embedded.png",
      title: "Embedded Systems",
      description: "Design and program microcontroller-based embedded projects.",
      color: "from-green-500 to-teal-500",
    },
    {
      img: "/Activescience.jpg",
      title: "Active Science",
      description: "Explore scientific concepts with fun and engaging experiments.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const upcomingEvents = [
    {
      title: "Cyber Security Beginner Course",
      img: "/Cyber.jpg",
      date: "Jan 2025",
      time: "Coming Soon",
      location: "New Delhi",
      spots: "Stay Tuned",
    },
    {
      title: "AI for Beginners",
      img: "/ai.jpg",
      date: "Feb 2025",
      time: "To Be Announced",
      location: "Online",
      spots: "Coming Soon",
    },
    {
      title: "Robotics Challenge",
      img: "/robo.jpg",
      date: "Mar 2025",
      time: "To Be Announced",
      location: "New Delhi",
      spots: "Coming Soon",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity">
          <div className="relative bg-white rounded-xl p-6 w-full max-w-md text-center shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Popup Image */}
            <div className="space-y-4">
              {/* <h2 className="text-3xl font-bold text-yellow-500">10,000+ Young Innovators</h2>
              <p className="text-gray-700">Learn with <span className="text-purple-600 font-semibold">Chitti</span>!</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-sm font-semibold">🏅</div>
                  <p className="text-xs text-gray-500">Award from TN Government</p>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">🏆</div>
                  <p className="text-xs text-gray-500">Vikatan Award</p>
                </div>
              </div> */}
              <img
                src="/Tem1.jpg" // your uploaded image
                alt="Popup Banner"
                className="rounded-lg w-full"
              />

              {/* CTA Button */}
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-4">
                <Link href="/contact#Send">
                  Book Free Demo
                </Link>

              </Button>
            </div>

          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <FireworksCanvas intensity={100} maxRockets={50} className="z-20" />

  <div className="absolute inset-0 w-full h-full overflow-hidden">
    {videos.map((src, i) => (
      <video
        key={i}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          i === current ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
    <div className="absolute inset-0 bg-black/40"></div>
  </div>


        {/* <div className="absolute inset-0 science-pattern"></div> */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {videos.map((src, i) => (
            <video
              key={i}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>


        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">🚀 Launching in 2025</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Making Science & Technology
                  <span className="text-yellow-300"> Engaging</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  We provide hands-on learning experiences for school students and cutting-edge skill enhancement programs for youth, empowering them to grow with confidence and creativity.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div> */}

              {/* Coming Soon Stats */}
              {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: Users, value: "Coming Soon", label: "Student Programs" },
                  { icon: Award, value: "2025", label: "Launch Year" },
                  { icon: Microscope, value: "In Development", label: "DIY Kits" },
                  { icon: Star, value: "Expert Team", label: "Ready" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div> */}
            </div>
            <div className="relative">
      <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold mb-6">🎯 Important Links</h3>

        {/* Scrolling container */}
        <div className="h-32 overflow-hidden">
          <div
            className="transition-all duration-700"
            style={{ transform: `translateY(-${index * 2}rem)` }}
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 h-8 mb-2">
                <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
                <a 
                  href={feature.href} 
                   target="_blank"
                  className="text-blue-100 hover:text-yellow-300 transition-colors"
                >
                  {feature.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

            {/* <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">🎯 Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    "Hands-on practical learning approach",
                    "Expert instructors with industry experience",
                    "Connect classroom concepts with real-world applications",
                    "Empowering students with future-focused skills",
                    "School-friendly practical workshops",
                    "Innovative, creativity-focused curriculum",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-yellow-300 rounded-full"></div>
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Upcoming Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive STEM Learning Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic programming to advanced AI concepts, we're developing a complete range of educational services
              designed to inspire and educate the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div
                    className={"w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden"}
                  >
                    {/* <service.icon className="h-8 w-8 text-white" /> */}
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    Coming in 2025
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Upcoming Events</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Launch Events</h2>
            <p className="text-xl text-gray-600">Stay tuned for our upcoming workshops and events in 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-cover bg-center relative"
                style={{ backgroundImage: `url(${event.img})` }}
              >
                <div className="bg-black/40 absolute inset-0 rounded-xl"></div> {/* overlay for readability */}
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    {/* <Badge variant="secondary">{event.date}</Badge> */}
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {event.spots}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-2 text-sm text-white mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Stay Updated on Our Launch</h2>
            <p className="text-xl text-blue-100">
              Join our mailing list to receive updates about our launch and upcoming programs in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Stay Informed
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/courses">Browse Future Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

