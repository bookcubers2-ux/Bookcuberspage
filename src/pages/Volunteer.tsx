import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Users, Clock, Heart, Award, CheckCircle } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Make a Difference", description: "Directly impact the lives of young Bolivians" },
  { icon: Users, title: "Join a Community", description: "Connect with passionate change-makers" },
  { icon: Clock, title: "Flexible Commitment", description: "Volunteer on your own schedule" },
  { icon: Award, title: "Gain Experience", description: "Develop leadership and professional skills" },
];

const opportunities = [
  { title: "Workshop Facilitator", description: "Lead educational workshops for youth", commitment: "4-8 hours/month" },
  { title: "Event Coordinator", description: "Help organize community events", commitment: "8-12 hours/month" },
  { title: "Mentor", description: "Guide youth through scholarship applications", commitment: "2-4 hours/month" },
  { title: "Content Creator", description: "Create educational materials and social media content", commitment: "4-6 hours/month" },
  { title: "Translation Support", description: "Help translate materials and documents", commitment: "As needed" },
  { title: "Administrative Support", description: "Assist with organizational tasks", commitment: "4-8 hours/month" },
];

export default function Volunteer() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              Become a Volunteer
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Join our team of dedicated volunteers making a difference in the lives 
              of Bolivian youth. Your time and talents can help shape the next generation 
              of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Why Volunteer With Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Volunteer Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
                <h3 className="font-heading font-semibold text-foreground mb-2">{opp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{opp.description}</p>
                <div className="flex items-center gap-2 text-xs text-accent">
                  <Clock className="w-3 h-3" />
                  {opp.commitment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
              Apply to Volunteer
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill out the form below and we'll get back to you within 48 hours.
            </p>

            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+591 7 000 0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    required
                  >
                    <option value="">Select an option</option>
                    {opportunities.map(opp => (
                      <option key={opp.title} value={opp.title}>{opp.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Why do you want to volunteer?</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Tell us about yourself and why you'd like to volunteer with Bookcubers..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="accent" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
