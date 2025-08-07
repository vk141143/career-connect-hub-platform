import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TrendingUp, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SalesLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sales authentication
    setTimeout(() => {
      if (email === "sales@jobportal.com" && password === "sales123") {
        toast({
          title: "Sales Login Successful",
          description: "Welcome to sales dashboard!",
        });
        localStorage.setItem("salesAuth", "true");
        navigate("/sales-dashboard");
      } else {
        toast({
          title: "Access Denied",
          description: "Invalid sales credentials.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 animate-fade-in">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Sales Access</CardTitle>
          <CardDescription className="text-gray-600">
            Sales team login - Enter your credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Sales Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sales@jobportal.com"
                  className="mt-1 h-11"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Sales Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter sales password"
                  className="mt-1 h-11"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-green-600 hover:bg-green-700 btn-hover-effect"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Sales Sign In"}
            </Button>

            <div className="text-center space-y-3">
              <div className="text-sm text-gray-600">
                Demo credentials: sales@jobportal.com / sales123
              </div>
              <div className="pt-2 border-t">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/")}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Back to Main Site
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesLogin;