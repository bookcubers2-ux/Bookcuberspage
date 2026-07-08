import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-pattern overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-700/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Empowering Youth Since 2019
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Building Tomorrow's
            <span className="block text-gradient">Leaders Today</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up animation-delay-200">
            Bookcubers is a Bolivian NGO dedicated to empowering youth through education, 
            leadership development, and community engagement. Together, we're creating 
            lasting change across Bolivia and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Support Our Mission
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up animation-delay-400">
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-accent">6+</div>
              <div className="text-sm text-muted-foreground">Years of Impact</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-accent">54+</div>
              <div className="text-sm text-muted-foreground">Programs & Activities</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-accent">3,000+</div>
              <div className="text-sm text-muted-foreground">Youth Impacted</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-accent">17</div>
              <div className="text-sm text-muted-foreground">SDGs Addressed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
