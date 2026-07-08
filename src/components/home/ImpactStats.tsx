import { useEffect, useState, useRef } from "react";
import { Users, BookOpen, Globe, Award, Calendar, Target } from "lucide-react";

const stats = [
  { icon: Users, value: 3000, suffix: "+", label: "Youth Empowered" },
  { icon: BookOpen, value: 54, suffix: "", label: "Programs Delivered" },
  { icon: Globe, value: 15, suffix: "+", label: "Partner Organizations" },
  { icon: Award, value: 8, suffix: "", label: "International Awards" },
  { icon: Calendar, value: 6, suffix: "", label: "Years of Service" },
  { icon: Target, value: 17, suffix: "", label: "SDGs Addressed" },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export function ImpactStats() {
  return (
    <section className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Since 2019, Bookcubers has been transforming lives across Bolivia through 
            education, leadership, and community development.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value);
            return (
              <div
                key={stat.label}
                ref={ref}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border/50 hover:border-accent/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1">
                  {count}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
