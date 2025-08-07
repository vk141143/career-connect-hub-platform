import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, Search, Phone, Mail, Calendar, Filter, Users, LogOut, TrendingDown, Star, Crown, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SalesDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subscriptionFilter, setSubscriptionFilter] = useState("all");
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const salesAuth = localStorage.getItem("salesAuth");
    if (!salesAuth) {
      navigate("/sales-login");
    }
  }, [navigate]);

  const prospects = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      currentSubscription: "Basic",
      interestedIn: "Legend",
      lastContact: "2024-01-15",
      status: "Hot Lead",
      reason: "Wanted more job applications but concerned about price",
      jobApplicationsUsed: 18,
      jobApplicationsLimit: 20,
      notes: "Engineer from SF, actively job hunting, budget conscious",
      leadScore: 85
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1 (555) 234-5678",
      currentSubscription: "None",
      interestedIn: "Basic",
      lastContact: "2024-01-12",
      status: "Warm Lead",
      reason: "Hesitant about monthly commitment, prefers trial period",
      jobApplicationsUsed: 0,
      jobApplicationsLimit: 0,
      notes: "Recent graduate, looking for entry-level positions",
      leadScore: 65
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@email.com",
      phone: "+1 (555) 345-6789",
      currentSubscription: "Legend",
      interestedIn: "Ultra Legend",
      lastContact: "2024-01-10",
      status: "Hot Lead",
      reason: "Wants unlimited applications but questioning ROI",
      jobApplicationsUsed: 35,
      jobApplicationsLimit: 40,
      notes: "Senior developer, high-value candidate, quality focused",
      leadScore: 92
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 456-7890",
      currentSubscription: "Basic",
      interestedIn: "None",
      lastContact: "2024-01-08",
      status: "Cold Lead",
      reason: "Not actively job searching, satisfied with current plan",
      jobApplicationsUsed: 8,
      jobApplicationsLimit: 20,
      notes: "Casual user, may not be ready for upgrade",
      leadScore: 35
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@email.com",
      phone: "+1 (555) 567-8901",
      currentSubscription: "None",
      interestedIn: "Ultra Legend",
      lastContact: "2024-01-14",
      status: "Hot Lead",
      reason: "Wants premium features but price sensitive",
      jobApplicationsUsed: 0,
      jobApplicationsLimit: 0,
      notes: "Startup founder looking for new opportunities",
      leadScore: 78
    }
  ];

  const filteredProspects = prospects.filter(prospect => {
    const matchesSearch = prospect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prospect.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || prospect.status === statusFilter;
    const matchesSubscription = subscriptionFilter === "all" || prospect.currentSubscription === subscriptionFilter;
    
    return matchesSearch && matchesStatus && matchesSubscription;
  });

  const handleCall = (phone: string, name: string) => {
    toast({
      title: "Initiating Call",
      description: `Calling ${name} at ${phone}`,
    });
  };

  const handleEmail = (email: string, name: string) => {
    window.open(`mailto:${email}?subject=Follow up on JobPortal subscription&body=Hi ${name},%0D%0A%0D%0AI wanted to follow up on your interest in our premium plans...`, '_blank');
  };

  const handleLogout = () => {
    localStorage.removeItem("salesAuth");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/sales-login");
  };

  const handleAdminAccess = () => {
    navigate("/admin-login");
  };

  const getSubscriptionIcon = (subscription: string) => {
    switch (subscription) {
      case "Basic": return Star;
      case "Legend": return Crown;
      case "Ultra Legend": return Zap;
      default: return Users;
    }
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case "Basic": return "bg-blue-100 text-blue-800";
      case "Legend": return "bg-purple-100 text-purple-800";
      case "Ultra Legend": return "bg-amber-100 text-amber-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot Lead": return "bg-red-100 text-red-800";
      case "Warm Lead": return "bg-orange-100 text-orange-800";
      case "Cold Lead": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
              <Link to="/sales-dashboard" className="text-blue-600 font-medium">Sales Dashboard</Link>
              <Button variant="ghost" onClick={handleAdminAccess} className="text-gray-700 hover:text-blue-600 transition-colors">
                Admin Dashboard
              </Button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleLogout} className="hover:bg-red-50 hover:text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
          <p className="text-gray-600">Manage leads and track subscription opportunities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingDown className="h-8 w-8 text-red-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Hot Leads</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {prospects.filter(p => p.status === "Hot Lead").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Warm Leads</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {prospects.filter(p => p.status === "Warm Lead").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Current Subscribers</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {prospects.filter(p => p.currentSubscription !== "None").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Crown className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Lead Score</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(prospects.reduce((acc, p) => acc + p.leadScore, 0) / prospects.length)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Hot Lead">Hot Lead</SelectItem>
                <SelectItem value="Warm Lead">Warm Lead</SelectItem>
                <SelectItem value="Cold Lead">Cold Lead</SelectItem>
              </SelectContent>
            </Select>
            <Select value={subscriptionFilter} onValueChange={setSubscriptionFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by subscription" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subscriptions</SelectItem>
                <SelectItem value="None">No Subscription</SelectItem>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Legend">Legend</SelectItem>
                <SelectItem value="Ultra Legend">Ultra Legend</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Prospects List */}
        <div className="space-y-4">
          {filteredProspects.map((prospect) => {
            const SubscriptionIcon = getSubscriptionIcon(prospect.currentSubscription);
            const InterestedIcon = getSubscriptionIcon(prospect.interestedIn);
            
            return (
              <Card key={prospect.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{prospect.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {prospect.email}
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {prospect.phone}
                        </p>
                        <p className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Last contact: {prospect.lastContact}
                        </p>
                      </div>
                    </div>

                    {/* Subscription Info */}
                    <div className="lg:col-span-3">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Current Plan</p>
                          <Badge className={getSubscriptionColor(prospect.currentSubscription)}>
                            <SubscriptionIcon className="h-3 w-3 mr-1" />
                            {prospect.currentSubscription}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Interested In</p>
                          <Badge className={getSubscriptionColor(prospect.interestedIn)}>
                            <InterestedIcon className="h-3 w-3 mr-1" />
                            {prospect.interestedIn}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">
                            Usage: {prospect.jobApplicationsUsed}/{prospect.jobApplicationsLimit === 0 ? "N/A" : prospect.jobApplicationsLimit}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Lead Info */}
                    <div className="lg:col-span-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge className={getStatusColor(prospect.status)}>
                            {prospect.status}
                          </Badge>
                          <span className="text-sm font-medium text-gray-900">Score: {prospect.leadScore}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Reason for hesitation:</p>
                          <p className="text-sm text-gray-600">{prospect.reason}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Notes:</p>
                          <p className="text-sm text-gray-600">{prospect.notes}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col space-y-2">
                        <Button 
                          size="sm" 
                          onClick={() => handleCall(prospect.phone, prospect.name)}
                          className="w-full"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleEmail(prospect.email, prospect.name)}
                          className="w-full"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredProspects.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No prospects found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesDashboard;