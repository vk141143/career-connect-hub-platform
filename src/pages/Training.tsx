import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Search, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Play, 
  Download,
  Award,
  TrendingUp,
  Code,
  Briefcase,
  Target
} from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  skills: string[];
  progress?: number;
  isEnrolled?: boolean;
}

const Training = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses: Course[] = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and get job-ready skills.",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      level: "Beginner",
      category: "Web Development",
      rating: 4.8,
      students: 2450,
      price: 299,
      image: "/placeholder.svg",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
      progress: 65,
      isEnrolled: true
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Learn data analysis, machine learning, and visualization with Python. Includes hands-on projects with real datasets.",
      instructor: "Dr. Michael Chen",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Data Science",
      rating: 4.9,
      students: 1890,
      price: 399,
      image: "/placeholder.svg",
      skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "NumPy"],
      progress: 30,
      isEnrolled: true
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Complete guide to digital marketing including SEO, social media, email marketing, and analytics.",
      instructor: "Emma Rodriguez",
      duration: "8 weeks",
      level: "Beginner",
      category: "Marketing",
      rating: 4.7,
      students: 3200,
      price: 199,
      image: "/placeholder.svg",
      skills: ["SEO", "Social Media", "Google Analytics", "Content Marketing"]
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      description: "Master Amazon Web Services and cloud architecture. Prepare for AWS certification with hands-on labs.",
      instructor: "David Wilson",
      duration: "14 weeks",
      level: "Advanced",
      category: "Cloud Computing",
      rating: 4.6,
      students: 1560,
      price: 499,
      image: "/placeholder.svg",
      skills: ["AWS", "EC2", "S3", "Lambda", "CloudFormation"]
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      description: "Learn user experience design principles, prototyping, and create stunning user interfaces.",
      instructor: "Lisa Park",
      duration: "6 weeks",
      level: "Beginner",
      category: "Design",
      rating: 4.8,
      students: 2100,
      price: 249,
      image: "/placeholder.svg",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      id: 6,
      title: "Project Management Professional (PMP)",
      description: "Comprehensive PMP certification preparation with real-world project management scenarios.",
      instructor: "Robert Taylor",
      duration: "16 weeks",
      level: "Intermediate",
      category: "Project Management",
      rating: 4.5,
      students: 980,
      price: 599,
      image: "/placeholder.svg",
      skills: ["Project Planning", "Risk Management", "Agile", "Scrum"]
    }
  ];

  const categories = ["all", "Web Development", "Data Science", "Marketing", "Cloud Computing", "Design", "Project Management"];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const enrolledCourses = courses.filter(course => course.isEnrolled);
  const completedCourses = enrolledCourses.filter(course => course.progress === 100).length;
  const inProgressCourses = enrolledCourses.filter(course => course.progress && course.progress < 100).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">JobPortal Training</Link>
            <div className="space-x-2">
              <Link to="/job-seeker-dashboard">
                <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Enrolled Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{inProgressCourses}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="h-4 w-4" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{completedCourses}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4" />
                Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{completedCourses}</div>
            </CardContent>
          </Card>
        </div>

        {/* My Learning Section */}
        {enrolledCourses.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>My Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">by {course.instructor}</p>
                    
                    {course.progress && (
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Continue Learning
                      </Button>
                      {course.progress === 100 && (
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Explore Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search courses or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level === "all" ? "All Levels" : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                <Code className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant={course.level === "Beginner" ? "default" : course.level === "Intermediate" ? "secondary" : "destructive"}>
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {course.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{course.skills.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${course.price}</span>
                  <Button className={course.isEnrolled ? "w-full ml-4" : ""}>
                    {course.isEnrolled ? (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Continue
                      </>
                    ) : (
                      "Enroll Now"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No courses found matching your criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Training;