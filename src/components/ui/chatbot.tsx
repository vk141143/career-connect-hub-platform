import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatbotProps {
  type: "jobseeker" | "company";
}

const Chatbot = ({ type }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: type === "jobseeker" 
        ? "Hi! I'm your job search assistant. I can help you with finding jobs, resume tips, interview preparation, and career advice. What would you like to know?"
        : "Hello! I'm here to help with your hiring needs. I can assist with job posting guidelines, application management, and recruitment best practices. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const predefinedResponses = {
    jobseeker: {
      "job search": "Here are some tips for job searching:\n1. Update your resume regularly\n2. Use relevant keywords\n3. Network actively\n4. Apply to positions that match your skills\n5. Follow up on applications professionally",
      "resume": "For a great resume:\n• Keep it concise (1-2 pages)\n• Use action verbs\n• Quantify achievements\n• Tailor it to each job\n• Include relevant keywords\n• Proofread carefully",
      "interview": "Interview preparation tips:\n• Research the company thoroughly\n• Practice common questions\n• Prepare your own questions\n• Dress appropriately\n• Arrive 10-15 minutes early\n• Follow up with a thank-you email",
      "salary": "When negotiating salary:\n• Research market rates\n• Know your worth\n• Consider the total package\n• Be professional and confident\n• Have a backup plan",
      "skills": "To improve your skills:\n• Take online courses\n• Get certifications\n• Practice regularly\n• Join professional groups\n• Attend workshops and seminars"
    },
    company: {
      "job posting": "For effective job postings:\n• Write clear job titles\n• Include detailed responsibilities\n• Specify required skills\n• Mention company culture\n• Add salary range if possible\n• Use inclusive language",
      "hiring": "Best hiring practices:\n• Define clear requirements\n• Use structured interviews\n• Check references\n• Provide timely feedback\n• Ensure fair evaluation\n• Document decisions",
      "screening": "Candidate screening tips:\n• Review resumes carefully\n• Use consistent criteria\n• Conduct phone screenings\n• Test relevant skills\n• Check cultural fit\n• Verify qualifications",
      "onboarding": "Effective onboarding:\n• Prepare workspace in advance\n• Create structured plan\n• Assign a buddy/mentor\n• Set clear expectations\n• Provide necessary tools\n• Regular check-ins"
    }
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    const responses = predefinedResponses[type];
    
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default responses
    const defaultResponses = type === "jobseeker" 
      ? [
          "I'd be happy to help you with your job search! Could you be more specific about what you need assistance with?",
          "That's a great question! For personalized advice, I recommend speaking with our career counselors or checking our resources section.",
          "I can help with job search strategies, resume tips, interview preparation, and more. What specific area interests you?"
        ]
      : [
          "I can assist you with hiring best practices, job posting guidelines, and recruitment strategies. What would you like to know more about?",
          "For detailed information about our hiring solutions, please contact our support team or check the help section.",
          "I'm here to help with your recruitment needs. Could you provide more details about what you're looking for?"
        ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5" />
                {type === "jobseeker" ? "Job Search Assistant" : "HR Assistant"}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <div>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;