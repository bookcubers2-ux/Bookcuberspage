import { Layout } from "@/components/layout/Layout";
import { boardMembers } from "@/data/board";
import { Target, Eye, Heart, Users, Scale, FileText } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for the highest standards in everything we do." },
  { icon: Heart, title: "Compassion", description: "We lead with empathy and care for every individual we serve." },
  { icon: Users, title: "Inclusion", description: "We believe in equal opportunities for all youth regardless of background." },
  { icon: Scale, title: "Integrity", description: "We operate with transparency and accountability in all our actions." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              About Bookcubers
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Born from a youth ambassador's vision, Bookcubers has grown into Bolivia's 
              leading youth empowerment organization, creating opportunities and building 
              leaders since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bookcubers was founded on April 12, 2019, in Santa Cruz, Bolivia, by Carlos 
                  Andrés Oliveira Caballero after his transformative experience as a participant 
                  in the U.S. Embassy's Youth Ambassadors Program.
                </p>
                <p>
                  Inspired by the power of education and cultural exchange, Carlos envisioned an 
                  organization that would bring similar opportunities to Bolivian youth who might 
                  never have access to such programs.
                </p>
                <p>
                  What began as small workshops in local schools has grown into a comprehensive 
                  youth development organization with 54+ programs and activities, international 
                  recognition, and partnerships with prestigious institutions worldwide.
                </p>
                <p>
                  In December 2024, the founder was recognized as the youngest Honorable Son of 
                  Santa Cruz in 200 years — a testament to the impact Bookcubers has created in 
                  our community.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">2019</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">54+</div>
                  <div className="text-sm text-muted-foreground">Activities</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">1,000+</div>
                  <div className="text-sm text-muted-foreground">Youth Served</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">17</div>
                  <div className="text-sm text-muted-foreground">SDGs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section-padding bg-navy-800">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Bolivian youth through education, leadership development, and community 
                engagement, creating opportunities that transform lives and build a more equitable 
                society aligned with the UN Sustainable Development Goals.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Bolivia where every young person has access to quality education, leadership 
                opportunities, and the resources needed to become agents of positive change in 
                their communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Bookcubers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 border border-border text-center hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="section-padding bg-navy-800">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Board of Directors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders guiding Bookcubers' mission.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div key={member.id} className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold text-foreground">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-heading font-semibold text-foreground text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Transparency & Accountability
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe in complete transparency with our stakeholders. Our financial reports, 
              annual impact assessments, and organizational documents are available for public review.
            </p>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Legal Status</h3>
              <div className="text-left space-y-3 text-sm text-muted-foreground">
                <p>• <strong className="text-foreground">Registered Name:</strong> Bookcubers NGO</p>
                <p>• <strong className="text-foreground">Legal Status:</strong> Non-Governmental Organization</p>
                <p>• <strong className="text-foreground">Registration:</strong> Santa Cruz, Bolivia</p>
                <p>• <strong className="text-foreground">Founded:</strong> April 12, 2019</p>
                <p>• <strong className="text-foreground">Focus Areas:</strong> Youth Development, Education, Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
