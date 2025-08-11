import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "10 Tips for Landing Your Dream Job in 2024",
      excerpt: "Discover the latest strategies that successful job seekers are using to stand out in today's competitive market.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Job Search",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Remote Work: The Future of Employment",
      excerpt: "How remote work is reshaping the job market and what it means for both employers and job seekers.",
      author: "Mike Chen",
      date: "2024-01-12",
      category: "Trends",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Skills That Will Be in Demand This Year",
      excerpt: "The technical and soft skills that employers are actively seeking in 2024.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "Skills",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "How to Write a Resume That Gets Noticed",
      excerpt: "Expert tips on crafting a resume that catches the attention of hiring managers and ATS systems.",
      author: "David Wilson",
      date: "2024-01-08",
      category: "Resume",
      readTime: "8 min read",
      image: "/placeholder.svg"
    }
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", "Job Search", "Trends", "Skills", "Resume", "Interview"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">JobPortal</Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-primary-foreground/80">Home</Link>
              <Link to="/browse-jobs" className="hover:text-primary-foreground/80">Jobs</Link>
              <Link to="/blogs" className="text-primary-foreground font-semibold">Blogs</Link>
              <Link to="/contact" className="hover:text-primary-foreground/80">Contact</Link>
            </nav>
            <div className="space-x-2">
              <Link to="/login">
                <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Career Insights & Tips
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay ahead in your career journey with expert advice, industry trends, and actionable tips
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{blog.category}</Badge>
                    <span className="text-sm text-muted-foreground">{blog.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary cursor-pointer">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JobPortal</h3>
              <p className="text-primary-foreground/80">Your gateway to career success</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
                <li><Link to="/browse-jobs" className="hover:text-primary-foreground">Jobs</Link></li>
                <li><Link to="/blogs" className="hover:text-primary-foreground">Blogs</Link></li>
                <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Job Seekers</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/browse-jobs" className="hover:text-primary-foreground">Browse Jobs</Link></li>
                <li><Link to="/register" className="hover:text-primary-foreground">Create Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Employers</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/post-job" className="hover:text-primary-foreground">Post a Job</Link></li>
                <li><Link to="/register" className="hover:text-primary-foreground">Sign Up</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 JobPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;