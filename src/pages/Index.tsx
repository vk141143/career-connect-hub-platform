
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Search, MapPin, Calendar, Users, Building, TrendingUp, Star, Quote, ArrowRight, Briefcase, Clock, Globe, Heart } from "lucide-react";

// Hero Carousel Data
const carouselSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=400&fit=crop",
    title: "Find Your Dream Job",
    subtitle: "Connect with top companies and discover amazing opportunities",
    cta: "Start Your Journey"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop",
    title: "Top Hiring Companies",
    subtitle: "Join industry leaders and fast-growing startups",
    cta: "Explore Companies"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop",
    title: "Remote Jobs Available",
    subtitle: "Work from anywhere with flexible remote opportunities",
    cta: "Browse Remote Jobs"
  }
];

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    experience: "5+ years",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    postedDate: "2 days ago",
    description: "We're looking for a senior frontend developer to join our growing team and build amazing user experiences."
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateLab",
    location: "New York, NY",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    postedDate: "1 day ago",
    description: "Join our product team to drive innovation and deliver exceptional products that delight our customers."
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignStudio Pro",
    location: "Remote",
    salary: "$80,000 - $100,000",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    postedDate: "3 days ago",
    description: "Create beautiful and intuitive user experiences for our digital products and help shape the future of design."
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "DataFlow Inc",
    location: "Austin, TX",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Node.js", "Python", "AWS", "PostgreSQL"],
    postedDate: "1 week ago",
    description: "Build scalable backend systems and APIs that power our data-driven applications."
  }
];

// Remote Jobs Data
const remoteJobs = [
  {
    id: 5,
    title: "Full Stack Developer",
    company: "RemoteTech",
    location: "Remote",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    skills: ["React", "Node.js", "MongoDB"],
    postedDate: "1 day ago"
  },
  {
    id: 6,
    title: "Content Marketing Manager",
    company: "DigitalFirst",
    location: "Remote",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    skills: ["Content Strategy", "SEO", "Analytics"],
    postedDate: "3 days ago"
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Remote",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    skills: ["AWS", "Docker", "Kubernetes"],
    postedDate: "2 days ago"
  }
];

// Walk-in Drives Data
const walkInDrives = [
  {
    id: 1,
    company: "TechMahindra",
    position: "Software Engineer",
    date: "Jan 25, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Hyderabad Tech Park",
    requirements: "B.Tech/MCA, 0-2 years exp"
  },
  {
    id: 2,
    company: "Infosys",
    position: "System Engineer",
    date: "Jan 28, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Bangalore Office",
    requirements: "Any Degree, Freshers welcome"
  },
  {
    id: 3,
    company: "Wipro",
    position: "QA Analyst",
    date: "Feb 2, 2025",
    time: "11:00 AM - 3:00 PM",
    venue: "Pune Campus",
    requirements: "BE/MCA, 1-3 years exp"
  }
];

// Top Companies Data
const topCompanies = [
  { id: 1, name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=150&h=150&fit=crop" },
  { id: 2, name: "Microsoft", logo: "https://images.unsplash.com/photo-1617041016319-95c1ce9e5d8e?w=150&h=150&fit=crop" },
  { id: 3, name: "Amazon", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=150&fit=crop" },
  { id: 4, name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&h=150&fit=crop" },
  { id: 5, name: "Meta", logo: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?w=150&h=150&fit=crop" },
  { id: 6, name: "Netflix", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=150&h=150&fit=crop" }
];

// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: "How to Ace Your Next Job Interview",
    description: "Essential tips and strategies to help you stand out in interviews and land your dream job.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    readTime: "5 min read",
    category: "Interview Tips"
  },
  {
    id: 2,
    title: "Building a Winning Resume in 2025",
    description: "Learn the latest resume trends and techniques that catch recruiters' attention.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop",
    readTime: "7 min read",
    category: "Career Advice"
  },
  {
    id: 3,
    title: "Remote Work Best Practices",
    description: "Master the art of remote work with these proven strategies for productivity and success.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop",
    readTime: "6 min read",
    category: "Remote Work"
  },
  {
    id: 4,
    title: "Negotiating Your Salary Like a Pro",
    description: "Discover effective techniques to negotiate better compensation packages confidently.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
    readTime: "8 min read",
    category: "Salary Tips"
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Software Engineer at Google",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop",
    testimonial: "JobPortal helped me land my dream job at Google. The platform made it so easy to connect with the right opportunities!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager at Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    testimonial: "The quality of job listings and the application process was seamless. Highly recommend to anyone job hunting!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX Designer at Apple",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    testimonial: "Found my perfect remote position through JobPortal. The platform truly understands what job seekers need.",
    rating: 5
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">JobPortal</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/browse-jobs" className="text-gray-700 hover:text-blue-600 transition-colors">Find Jobs</Link>
              <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors">Blogs</Link>
              <Link to="/training" className="text-gray-700 hover:text-blue-600 transition-colors">Training</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-black/40"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white max-w-4xl px-4">
                      <h1 className="text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                      <p className="text-xl mb-8 animate-fade-in">{slide.subtitle}</p>
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 animate-fade-in">
                        {slide.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Hero Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Find Your Dream Job
            <span className="text-blue-600"> Today</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with top companies and discover opportunities that match your skills and aspirations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Link to="/browse-jobs">
                <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                  Search Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
            <p className="text-lg text-gray-600">Discover the latest opportunities from top companies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                        <Link to={`/job/${job.id}`}>{job.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700 mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{job.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-lg font-semibold text-green-600">{job.salary}</span>
                      <Link to={`/job/${job.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse-jobs">
              <Button variant="outline" size="lg" className="px-8">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Remote Jobs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Globe className="inline-block h-8 w-8 mr-2 text-blue-600" />
              Remote Jobs
            </h2>
            <p className="text-lg text-gray-600">Work from anywhere with these remote opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remoteJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                        <Link to={`/job/${job.id}`}>{job.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-md font-medium text-gray-700 mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Remote
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-lg font-semibold text-green-600">{job.salary}</span>
                      <Link to={`/job/${job.id}`}>
                        <Button variant="outline" size="sm">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse-jobs">
              <Button variant="outline" size="lg" className="px-8">
                View All Remote Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Walk-ins Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Briefcase className="inline-block h-8 w-8 mr-2 text-blue-600" />
              Walk-in Drives
            </h2>
            <p className="text-lg text-gray-600">Upcoming walk-in interviews and hiring drives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {walkInDrives.map((drive) => (
              <Card key={drive.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900">{drive.company}</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">
                    {drive.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{drive.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{drive.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{drive.venue}</span>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Requirements:</strong> {drive.requirements}
                      </p>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Hiring Companies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Hiring Companies</h2>
            <p className="text-lg text-gray-600">Join industry leaders and innovative startups</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {topCompanies.map((company) => (
              <div key={company.id} className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700 text-center">{company.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              View More Companies
            </Button>
          </div>
        </div>
      </section>

      {/* Blogs / Career Advice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Advice & Tips</h2>
            <p className="text-lg text-gray-600">Latest insights to boost your career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/training">
              <Button variant="outline" size="lg" className="px-8">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">What our users say about their experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-gray-400 mb-3" />
                  <p className="text-gray-700 italic">{testimonial.testimonial}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics & Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Making a difference in careers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Building className="h-12 w-12 text-blue-200" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-blue-200" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Candidates Placed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-12 w-12 text-blue-200" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 text-blue-200" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in just a few simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Jobs</h3>
              <p className="text-gray-600">Browse thousands of job opportunities from top companies worldwide.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Easily</h3>
              <p className="text-gray-600">Submit your application with just a few clicks and track your progress.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Hired</h3>
              <p className="text-gray-600">Connect with employers and land your dream job with our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">JobPortal</span>
              </div>
              <p className="text-gray-400">Connecting talented professionals with amazing opportunities worldwide.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/browse-jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
                <li><Link to="/training" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Career Advice</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
                <li><Link to="/browse-resumes" className="hover:text-white transition-colors">Browse Resumes</Link></li>
                <li><Link to="/recruiting-solutions" className="hover:text-white transition-colors">Recruiting Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/admin-login" className="hover:text-white transition-colors">Admin Access</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JobPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
