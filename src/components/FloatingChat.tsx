import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Minus, Maximize2, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi! How can I help you today?', time: new Date() }
  ]);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Listen for custom event to open chat
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
    };

    window.addEventListener('openFloatingChat', handleOpenChat);
    return () => window.removeEventListener('openFloatingChat', handleOpenChat);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      text: message,
      time: new Date()
    };

    const botResponse = {
      id: messages.length + 2,
      type: 'bot' as const,
      text: "Thanks for your message! We'll get back to you within 24 hours. For immediate assistance, please use our contact form.",
      time: new Date()
    };

    setMessages(prev => [...prev, newMessage, botResponse]);
    setMessage("");

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleNavigateToContact = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            variant="floating"
            size="icon"
            className="w-14 h-14 shadow-2xl hover:scale-110 transition-transform relative"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
          </Button>
        ) : (
          <div className={`bg-card border border-border rounded-lg shadow-2xl w-96 max-w-[calc(100vw-2rem)] transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[500px]'} flex flex-col`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5 rounded-t-lg flex-shrink-0">
              <div className={`flex items-center gap-2 ${isMinimized ? 'opacity-60' : ''}`}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Support Chat</h3>
                  {!isMinimized && <p className="text-xs text-muted-foreground">Usually replies instantly</p>}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => setIsMinimized(!isMinimized)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-background/20"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-background/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`max-w-[80%] ${msg.type === 'user' ? 'text-right' : ''}`}>
                        <div className={`rounded-lg p-3 text-sm ${
                          msg.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {msg.text}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-border flex-shrink-0">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        required
                      />
                      <Button type="submit" size="icon" disabled={!message.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-center">
                      <span className="text-muted-foreground">Need more help? </span>
                      <button
                        type="button"
                        onClick={handleNavigateToContact}
                        className="text-primary hover:underline"
                      >
                        Contact us directly
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}