"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Calendar, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      preferredTime: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Vande Matram Apartment, Pocket-2", "Sector 6 Dwarka, Delhi"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-8090971821", "Mon-Sat: 9:00 AM - 6:00 PM"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@ashtavakrah.com", "ashtavakrahtech@gmail.com"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer:
        "We primarily focus on school students aged 10-18, but we also offer programs for college students and working professionals.",
    },
    {
      question: "Do you provide online classes?",
      answer:
        "Yes, we offer both online and offline classes. Our hybrid model ensures flexibility while maintaining hands-on learning experiences.",
    },
    {
      question: "What is the batch size for workshops?",
      answer:
        "We maintain small batch sizes of maximum 12 students to ensure personalized attention and effective learning.",
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, we provide industry-recognized certificates upon successful completion of our programs.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Let's Start Your
              <span className="text-purple-600"> STEM Journey</span> Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore the exciting world of science and technology? Contact us today to learn more about our
              programs and find the perfect learning path for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-purple-600" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="microcontroller">Microcontroller Workshops</SelectItem>
                          <SelectItem value="aiml">AI/ML Training</SelectItem>
                          <SelectItem value="quantum">Quantum Computing</SelectItem>
                          <SelectItem value="robotics">Robotics Programs</SelectItem>
                          <SelectItem value="diy-kits">Scientific DIY Kits</SelectItem>
                          <SelectItem value="custom">Custom Curriculum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) => handleInputChange("preferredTime", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4 PM - 6 PM)</SelectItem>
                        <SelectItem value="anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your learning goals or any specific questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you start your STEM learning journey. Reach out to us through any of the following
                  channels, and our team will be happy to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                      <p className="text-gray-600">Interactive map will be integrated here</p>
                      <p className="text-sm text-gray-500 mt-2">Vande Matram Apartment, Pocket-2</p>
                      <p className="text-sm text-gray-500">Sector 6 Dwarka, Delhi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Frequently Asked Questions</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Got Questions? We Have Answers</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our programs and services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 ml-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Begin Your Learning Adventure?</h2>
            <p className="text-xl text-blue-100">
              Join hundreds of students who have already transformed their understanding of science and technology
              through our innovative programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Users className="mr-2 h-5 w-5" />
                Register for Workshop
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
