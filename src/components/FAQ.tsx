import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, Clock, DollarSign, Users, CheckCircle, CreditCard, Headphones, UserCheck, Star, Zap, Award, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure the quality of freelancers?",
    answer: "We have a rigorous vetting process that includes portfolio review, skill assessments, client reference checks, and trial projects. Only the top 5% of applicants make it through our screening process.",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    stat: "Top 5% Selected"
  },
  {
    question: "What if I'm not satisfied with the work delivered?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with the initial delivery, we provide unlimited revisions at no extra cost until you're completely satisfied with the result.",
    icon: CheckCircle,
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    stat: "100% Guarantee"
  },
  {
    question: "How long does it typically take to start a project?",
    answer: "Most projects can start within 24-48 hours. After you submit your requirements, we'll match you with suitable freelancers and you can begin work as soon as you've selected your preferred professional.",
    icon: Zap,
    color: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    stat: "24-48 Hours"
  },
  {
    question: "Do you offer fixed-price or hourly billing?",
    answer: "We offer both options based on your preference and project type. Fixed-price works well for defined projects with clear deliverables, while hourly billing is ideal for ongoing work or projects with evolving requirements.",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    stat: "Flexible Pricing"
  },
  {
    question: "Can I work with the same freelancer for multiple projects?",
    answer: "Absolutely! We encourage long-term partnerships. Once you find a freelancer you love working with, you can hire them directly for future projects through our platform.",
    icon: Users,
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
    stat: "Long-term Partners"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and wire transfers. All payments are processed securely through our platform with milestone-based release for your protection.",
    icon: CreditCard,
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    stat: "Secure Payments"
  },
  {
    question: "Do you provide project management support?",
    answer: "Yes! Every project includes basic project management support. For larger projects, we can provide dedicated project managers to ensure smooth communication and timely delivery.",
    icon: Headphones,
    color: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
    stat: "24/7 Support"
  },
  {
    question: "What happens if a freelancer becomes unavailable?",
    answer: "In the rare case a freelancer becomes unavailable, we immediately assign a backup professional with similar skills to ensure your project stays on track without delays.",
    icon: UserCheck,
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    stat: "Backup Available"
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <MessageCircle className="w-4 h-4" />
            FAQ Section
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Got questions? We've got answers. Here are the most common questions 
            our clients ask about working with FreelanceHub.
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Star, label: "5-Star Rated", value: "4.9/5", color: "text-yellow-500" },
              { icon: Users, label: "Happy Clients", value: "10K+", color: "text-blue-500" },
              { icon: Award, label: "Success Rate", value: "98%", color: "text-green-500" }
            ].map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <div className="text-left">
                  <div className="text-sm font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            const IconComponent = faq.icon;
            
            return (
              <div 
                key={index}
                className={`group border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-sm ${
                  isOpen ? 'ring-2 ring-primary/20 shadow-lg' : 'hover:scale-[1.02]'
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
                    isOpen 
                      ? `bg-gradient-to-r ${faq.bgGradient} dark:from-card dark:to-card/80` 
                      : 'hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.color} p-0.5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                    }`}>
                      <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 bg-gradient-to-r ${faq.color} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{faq.question}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium transition-colors ${
                          isOpen 
                            ? `bg-gradient-to-r ${faq.color} text-white`
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          {faq.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? `bg-gradient-to-r ${faq.color}` 
                        : 'bg-muted group-hover:bg-primary/10'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 animate-accordion-down">
                    <div className={`border-t border-gradient-to-r ${faq.color.replace('from-', 'from-').replace('to-', 'to-')}/20 pt-4 ml-16`}>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </p>
                      
                      {/* Additional visual element */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${faq.color} animate-pulse`}></div>
                        <span className="text-xs text-muted-foreground">
                          Learn more about this in our detailed guides
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Headphones className="w-4 h-4" />
                Need More Help?
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Still have questions? <span className="gradient-text">We're here to help!</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our dedicated support team is available 24/7 to answer any questions and guide you through your journey with FreelanceHub.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const contact = document.querySelector("#contact");
                    if (contact) contact.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-xl font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Contact Support Team
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="w-px h-6 bg-border hidden sm:block"></div>
                  <span className="text-muted-foreground text-sm">or</span>
                  <div className="w-px h-6 bg-border hidden sm:block"></div>
                </div>
                
                <button 
                  onClick={() => {
                    const contact = document.querySelector("#contact");
                    if (contact) contact.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group border border-primary/20 text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary/5 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule Expert Call
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  Average response time: 2 hours
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  4.9/5 support rating
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  100% satisfaction guaranteed
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}