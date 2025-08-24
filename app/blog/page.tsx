import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, TrendingUp, Star, Download, Eye } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Future of STEM Education: Why Hands-On Learning Matters",
    excerpt:
      "Discover how interactive, project-based learning is revolutionizing the way students engage with science and technology...",
    author: "Dr. Rajesh Kumar",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Arduino vs Raspberry Pi: Which Should Students Learn First?",
      excerpt:
        "A comprehensive comparison of two popular microcontroller platforms for beginners in electronics and programming.",
      author: "Amit Patel",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Microcontrollers",
      image: "/arduino-teaching-2.jpg",
      views: 1250,
    },
    {
      id: 3,
      title: "AI and Machine Learning: Career Opportunities for Students",
      excerpt:
        "Exploring the growing job market in AI/ML and how students can prepare for these exciting career paths.",
      author: "Sneha Gupta",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center",
      views: 980,
    },
    {
      id: 4,
      title: "Building Your First Robot: A Step-by-Step Guide",
      excerpt: "Learn the fundamentals of robotics by building a simple autonomous robot from scratch.",
      author: "Priya Sharma",
      date: "December 5, 2024",
      readTime: "12 min read",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop&crop=center",
      views: 1500,
    },
    {
      id: 5,
      title: "Quantum Computing Explained: A Beginner's Guide",
      excerpt: "Demystifying quantum computing concepts and exploring its potential impact on future technology.",
      author: "Dr. Rajesh Kumar",
      date: "December 1, 2024",
      readTime: "15 min read",
      category: "Quantum Computing",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop&crop=center",
      views: 750,
    },
    {
      id: 6,
      title: "DIY Science Kits: Learning Through Experimentation",
      excerpt: "How hands-on science kits can enhance understanding and make learning more engaging for students.",
      author: "Amit Patel",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "DIY Projects",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop&crop=center",
      views: 890,
    },
    {
      id: 7,
      title: "The Importance of STEM Education in Modern Schools",
      excerpt: "Why schools need to prioritize STEM education and how it prepares students for the future workforce.",
      author: "Priya Sharma",
      date: "November 25, 2024",
      readTime: "9 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop&crop=center",
      views: 1100,
    },
  ]

  const categories = ["All", "Education", "Microcontrollers", "AI/ML", "Robotics", "Quantum Computing", "DIY Projects"]

  const downloadableResources = [
    {
      title: "STEM Learning Roadmap 2025",
      description: "Complete guide to planning your STEM education journey",
      type: "PDF Guide",
      downloads: 450,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=150&fit=crop&crop=center",
    },
    {
      title: "Arduino Project Ideas for Beginners",
      description: "25 exciting Arduino projects with step-by-step instructions",
      type: "Project Guide",
      downloads: 320,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&h=150&fit=crop&crop=center",
    },
    {
      title: "AI/ML Career Preparation Checklist",
      description: "Essential skills and resources for AI/ML career preparation",
      type: "Checklist",
      downloads: 280,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop&crop=center",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4">Knowledge Hub</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              STEM Learning
              <span className="text-purple-600"> Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights, tutorials, and resources about STEM education, emerging technologies, and career
              guidance from our expert team.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-3 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
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
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Article</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
          </div>

          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-shadow border-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Featured</Badge>
                </div>
              </div>
              <div className="p-8">
                <Badge variant="outline" className="mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Latest Articles</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Knowledge Base</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends, tutorials, and insights in STEM education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow border-0 bg-white overflow-hidden">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Free Resources</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Downloadable Learning Materials</h2>
            <p className="text-xl text-gray-600">
              Access our collection of free guides, checklists, and resources to enhance your STEM learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Type: {resource.type}</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Stay Updated with Our Latest Content</h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter and be the first to receive new articles, resources, and educational insights
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-gray-900 placeholder-gray-500"
              />
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Star className="mr-2 h-5 w-5" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200">
              📚 Get exclusive access to premium content and early access to our courses when we launch!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
