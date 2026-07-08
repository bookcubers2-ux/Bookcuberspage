import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-accent-gold/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Join Us in Creating
            <span className="block text-gradient">Lasting Change</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you want to volunteer your time, make a donation, or partner with us, 
            your support helps empower the next generation of leaders in Bolivia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/donate" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/volunteer" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Become a Volunteer
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="font-heading font-semibold text-foreground">CBA</div>
              <div className="font-heading font-semibold text-foreground">UNESCO</div>
              <div className="font-heading font-semibold text-foreground">U.S. Embassy</div>
              <div className="font-heading font-semibold text-foreground">Rotaract</div>
              <div className="font-heading font-semibold text-foreground">AEIF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
