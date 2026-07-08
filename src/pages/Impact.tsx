import { Layout } from "@/components/layout/Layout";
import { activities } from "@/data/activities";
import { Users, BookOpen, Globe, Award, TrendingUp, Target } from "lucide-react";

const impactMetrics = [
  { icon: Users, value: "1,000+", label: "Youth Directly Impacted", description: "Young people who have participated in our programs" },
  { icon: BookOpen, value: "54", label: "Programs & Activities", description: "Educational and community programs delivered" },
  { icon: Globe, value: "15+", label: "Partner Organizations", description: "Strategic partnerships with institutions" },
  { icon: Award, value: "8", label: "International Awards", description: "Recognition from global organizations" },
  { icon: TrendingUp, value: "200%", label: "Year-over-Year Growth", description: "Annual growth in program reach" },
  { icon: Target, value: "17", label: "SDGs Addressed", description: "UN Sustainable Development Goals covered" },
];

const successStories = [
  {
    title: "From Workshop to World Stage",
    description: "A young participant in our first scholarship workshops in 2019 went on to receive a full scholarship to study abroad, later becoming a Bookcubers volunteer.",
    year: 2022
  },
  {
    title: "Community Garden Success",
    description: "Our sustainable garden project in Okinawa I not only provided food security education but created a lasting community space managed by youth volunteers.",
    year: 2024
  },
  {
    title: "Media Literacy Champions",
    description: "100 youth completed our media literacy training, with several going on to create their own educational content about misinformation awareness.",
    year: 2024
  },
  {
    title: "International Recognition",
    description: "Our founder's journey from Youth Ambassador to UN speaker inspired dozens of young Bolivians to pursue international opportunities.",
    year: 2025
  }
];

export default function Impact() {
  const categoryStats = activities.reduce((acc, activity) => {
    acc[activity.category] = (acc[activity.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              Our Impact
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Measuring what matters — tracking our progress in empowering Bolivian youth 
              and creating sustainable change in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Impact by the Numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-heading font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-foreground mb-2">{metric.label}</div>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities by Category */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Activities by Focus Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(categoryStats)
              .sort(([, a], [, b]) => b - a)
              .map(([category, count]) => (
                <div key={category} className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="text-2xl font-heading font-bold text-accent mb-1">{count}</div>
                  <div className="text-sm text-muted-foreground">{category}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Real stories of transformation from our programs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story) => (
              <div key={story.title} className="bg-card rounded-xl p-6 border border-border">
                <span className="text-xs text-accent font-medium">{story.year}</span>
                <h3 className="text-xl font-heading font-semibold text-foreground mt-2 mb-3">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
