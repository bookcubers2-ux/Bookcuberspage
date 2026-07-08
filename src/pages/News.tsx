import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    title: "Bookcubers Founder Delivers Final Speech at UN LLDC Global Forum",
    excerpt: "Selected among all delegates to deliver the closing youth address at the United Nations Landlocked Developing Countries forum.",
    date: "January 20, 2025",
    category: "International",
    featured: true
  },
  {
    id: 2,
    title: "Carlos Andrés Named Youngest Honorable Son of Santa Cruz in 200 Years",
    excerpt: "Historic recognition celebrates the impact of Bookcubers and its founder on Bolivian youth development.",
    date: "December 2024",
    category: "Recognition"
  },
  {
    id: 3,
    title: "Gengo Academy Completes First Year with Record Enrollment",
    excerpt: "Our flagship education program reaches over 100 beneficiaries through media literacy and sustainability education.",
    date: "November 2024",
    category: "Programs"
  },
  {
    id: 4,
    title: "Bookcubers Team Achieves 6th Place at NASA Rover Challenge",
    excerpt: "Our founder served as official translator for the Bolivian team at NASA's Human Exploration Rover Challenge.",
    date: "April 2024",
    category: "International"
  },
  {
    id: 5,
    title: "Fourth Annual Dictionary Fair Distributes 500+ Bilingual Dictionaries",
    excerpt: "Continuing our mission to reduce educational inequality through access to learning materials.",
    date: "June 2024",
    category: "Education"
  },
  {
    id: 6,
    title: "Youth Leadership Classes Launch at Cenvicruz",
    excerpt: "New partnership brings English, leadership, finance, and oratory classes to 65 direct beneficiaries.",
    date: "October 2024",
    category: "Programs"
  }
];

export default function News() {
  const featuredArticle = newsArticles.find(a => a.featured);
  const regularArticles = newsArticles.filter(a => !a.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              Stay updated with the latest news, achievements, and stories from Bookcubers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-navy-900 overflow-hidden">
                  <video 
                    src="/videos/un-speech.mp4" 
                    controls 
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-medium text-accent mb-2">FEATURED</span>
                  <span className="inline-block px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full w-fit mb-4">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Timeline */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            Recent Updates
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-6">
              {regularArticles.map((article, index) => (
                <article key={article.id} className="relative md:pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block" />
                  
                  <div className="bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-accent/10 to-accent-gold/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              Stay Connected
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Subscribe to our newsletter for updates on our programs, impact stories, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
