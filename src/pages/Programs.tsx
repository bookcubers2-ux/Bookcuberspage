import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Leaf, Megaphone, Heart, Globe, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

// Import program images
import educationImg from "@/assets/programs/education.jpg";
import leadershipImg from "@/assets/programs/leadership.jpg";
import sustainabilityImg from "@/assets/programs/sustainability.jpg";
import mediaImg from "@/assets/programs/media.jpg";
import cultureImg from "@/assets/programs/culture.jpg";
import healthImg from "@/assets/programs/health.jpg";
import internationalImg from "@/assets/programs/international.jpg";
import innovationImg from "@/assets/programs/innovation.jpg";

const programs = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Scholarships",
    description: "Our flagship education programs provide youth with the knowledge and skills needed to access higher education opportunities locally and internationally.",
    features: [
      "Scholarship application workshops",
      "Essay writing training",
      "English language classes",
      "Dictionary fairs for underserved communities",
      "Academic excellence programs"
    ],
    impact: "500+ youth prepared for scholarships",
    sdgs: [4, 10],
    image: educationImg
  },
  {
    id: "leadership",
    icon: Users,
    title: "Leadership Development",
    description: "Building tomorrow's leaders through comprehensive programs that develop public speaking, civic engagement, and entrepreneurial skills.",
    features: [
      "Public speaking workshops",
      "Youth civic engagement forums",
      "Entrepreneurship bootcamps",
      "Leadership mentorship programs",
      "Career guidance sessions"
    ],
    impact: "200+ youth leaders trained",
    sdgs: [4, 8, 16],
    image: leadershipImg
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Environmental education programs that inspire youth to become stewards of our planet through hands-on learning and community action.",
    features: [
      "Environmental literacy workshops",
      "Sustainable garden installations",
      "Climate action campaigns",
      "Community clean-up initiatives",
      "Documentary screenings and discussions"
    ],
    impact: "Multiple community gardens installed",
    sdgs: [13, 11, 12],
    image: sustainabilityImg
  },
  {
    id: "media",
    icon: Megaphone,
    title: "Media Literacy",
    description: "Critical thinking and digital citizenship programs that help youth navigate the information age safely and responsibly.",
    features: [
      "Digital literacy training",
      "Misinformation detection workshops",
      "Safe internet navigation",
      "Critical thinking skills",
      "Content creation basics"
    ],
    impact: "100+ youth trained in media literacy",
    sdgs: [4, 9, 16],
    image: mediaImg
  },
  {
    id: "culture",
    icon: BookOpen,
    title: "Cultural Preservation",
    description: "Programs celebrating and preserving Bolivian heritage while fostering intercultural dialogue and understanding.",
    features: [
      "Reading circles with local literature",
      "Cultural film screenings",
      "Indigenous knowledge events",
      "Heritage documentation projects",
      "Bilingual storytelling sessions"
    ],
    impact: "20+ cultural events organized",
    sdgs: [4, 11],
    image: cultureImg
  },
  {
    id: "health",
    icon: Heart,
    title: "Health & Wellbeing",
    description: "Supporting youth mental and physical health through awareness campaigns, support groups, and community health initiatives.",
    features: [
      "Mental health awareness campaigns",
      "Youth support circles",
      "Blood donation campaigns",
      "First aid training",
      "Wellness workshops"
    ],
    impact: "Multiple health campaigns completed",
    sdgs: [3],
    image: healthImg
  },
  {
    id: "international",
    icon: Globe,
    title: "International Exchange",
    description: "Connecting Bolivian youth with global opportunities through cultural exchange, international forums, and global networking.",
    features: [
      "Youth ambassador programs",
      "International conference participation",
      "Global forum representation",
      "Cross-cultural partnerships",
      "International fellowship support"
    ],
    impact: "Multiple international awards",
    sdgs: [17, 16],
    image: internationalImg
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation & Problem-Solving",
    description: "Fostering creative thinking and innovation through unique programs that challenge youth to solve real-world problems.",
    features: [
      "Rubik's Cube problem-solving",
      "Youth innovation challenges",
      "Creative workshops",
      "STEM exposure activities",
      "Design thinking sessions"
    ],
    impact: "Astronomy and STEM events hosted",
    sdgs: [4, 9],
    image: innovationImg
  }
];

export default function Programs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Comprehensive youth development programs aligned with the UN Sustainable 
              Development Goals, creating pathways to opportunity and success.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex gap-2">
                      {program.sdgs.map(sdg => (
                        <span key={sdg} className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded">
                          SDG {sdg}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent/10 rounded-lg px-4 py-3 inline-block">
                    <span className="text-accent font-medium">{program.impact}</span>
                  </div>
                </div>
                <div className={`bg-card rounded-2xl overflow-hidden border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you want to participate in our programs, volunteer your time, or support 
            our mission through a donation, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/volunteer" className="flex items-center gap-2">
                Become a Volunteer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
