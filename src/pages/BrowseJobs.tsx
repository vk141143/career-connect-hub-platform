
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Building, Search, MapPin, Calendar, DollarSign, Users, Bookmark, Filter } from "lucide-react";

const BrowseJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const dummyJobs = [
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
      description: "Join our team to build amazing user experiences with modern technologies.",
      requirements: "5+ years experience in React development"
    },
    {
      id: 2,
      title: "Junior Software Engineer",
      company: "StartupLab Inc",
      location: "Remote",
      salary: "$70,000 - $90,000",
      type: "Full-time",
      experience: "0-2 years",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      postedDate: "1 day ago",
      description: "Perfect opportunity for fresh graduates to start their career in tech.",
      requirements: "Recent graduate or 0-2 years experience"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "WebFlow Inc",
      location: "New York, NY",
      salary: "$100,000 - $130,000",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
      postedDate: "3 days ago",
      description: "Build end-to-end web applications with cutting-edge technology stack.",
      requirements: "3-5 years of full stack development experience"
    },
    {
      id: 4,
      title: "Frontend Developer Intern",
      company: "DesignStudio",
      location: "Austin, TX",
      salary: "$40,000 - $50,000",
      type: "Internship",
      experience: "0 years",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      postedDate: "1 week ago",
      description: "Learn and grow with our experienced development team.",
      requirements: "Fresh graduate or student"
    },
    {
      id: 5,
      title: "Senior Backend Engineer",
      company: "DataTech Solutions",
      location: "Seattle, WA",
      salary: "$140,000 - $170,000",
      type: "Full-time",
      experience: "7+ years",
      skills: ["Python", "Django", "PostgreSQL", "Redis", "AWS"],
      postedDate: "4 days ago",
      description: "Lead backend development for high-scale applications.",
      requirements: "7+ years of backend development experience"
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setJobs(dummyJobs);
      setIsLoading(false);
    }, 1500);
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesExperience = !experienceLevel || 
      (experienceLevel === "fresher" && job.experience.includes("0")) ||
      (experienceLevel === "experienced" && !job.experience.includes("0"));

    return matchesSearch && matchesLocation && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
              <Building className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">JobPortal</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/job-seeker-dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/browse-jobs" className="text-blue-600 font-medium">Browse Jobs</Link>
              <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and experience.</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 hover-scale">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                  Job Title or Skills
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="e.g., React Developer"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2 block">
                  Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="location"
                    placeholder="e.g., San Francisco"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 h-11"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Experience Level
                </Label>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                    <SelectItem value="experienced">Experienced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {experienceLevel === "experienced" && (
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Years of Experience
                  </Label>
                  <Select value={experienceYears} onValueChange={setExperienceYears}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-6">4-6 years</SelectItem>
                      <SelectItem value="7-10">7-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Jobs List */}
        <div className="space-y-6">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-64" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-18" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))
          ) : (
            filteredJobs.map((job, index) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Link to={`/job/${job.id}`} className="hover:text-blue-600 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                      </Link>
                      <p className="text-lg text-gray-700 font-medium mb-2">{job.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.postedDate}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="hover:bg-blue-50 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <div className="space-x-2">
                      <Link to={`/job/${job.id}`}>
                        <Button variant="outline" size="sm" className="hover:bg-blue-50">
                          View Details
                        </Button>
                      </Link>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {!isLoading && filteredJobs.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Jobs Found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
