import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Leaf, Users, Megaphone, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    description: "Workshops on scholarship access, essay writing, English learning, and academic excellence for underserved youth.",
    color: "bg-accent/10 text-accent",
    link: "/programs#education"
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Youth leadership programs, public speaking, entrepreneurship, and civic engagement initiatives.",
    color: "bg-accent-gold/10 text-accent-gold",
    link: "/programs#leadership"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Environmental literacy, sustainable gardens, climate action campaigns, and ecological awareness.",
    color: "bg-success/10 text-success",
    link: "/programs#sustainability"
  },
  {
    icon: Megaphone,
    title: "Media Literacy",
    description: "Digital literacy, misinformation detection, safe internet navigation, and critical thinking skills.",
    color: "bg-purple-500/10 text-purple-400",
    link: "/programs#media"
  },
];

export function ProgramsPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-xl">
              We deliver impactful programs that address the UN Sustainable Development Goals 
              and create lasting change in our communities.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/programs" className="flex items-center gap-2">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              to={program.link}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
