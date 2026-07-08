import { Layout } from "@/components/layout/Layout";
import { FileText, Palette, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const artworks = [
  {
    id: 1,
    title: "Exercises to Learn How to Disappear Without Noise",
    type: "Narrative Poem",
    author: "Carlos Andrés Olivera Caballero",
    description: "A narrative poem addressing the territorial, political, and existential struggles faced by Indigenous peoples of Bolivia's lowlands during the XI Indigenous March of 2021. Through an experimental and fragmented poetic structure, the work explores land dispossession, extractivist expansion, and the growing presence of narcotrafficking as interconnected systems that erode Indigenous autonomy, memory, and embodied relationships with territory.",
    pdfUrl: "/art/exercises-to-learn-how-to-disappear-without-noise.pdf",
    keywords: ["Bolivia", "Indigenous territories", "narrative poetry", "extractivism", "environmental justice"],
  },
];

export default function Art() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-900 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Creative Expression
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Art
            </h1>
            <p className="text-lg text-muted-foreground">
              Bookcubers members and volunteers are deeply committed to art as a powerful form of cultural expression, 
              as a defense of civic narratives, and as a means of protecting and amplifying the voices of vulnerable 
              and indigenous communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Cultural Expression</h3>
              <p className="text-sm text-muted-foreground">
                Art serves as a vessel for preserving and sharing cultural heritage, traditions, and the unique perspectives of diverse communities.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Civic Narratives</h3>
              <p className="text-sm text-muted-foreground">
                Through creative works, we defend and promote civic narratives that challenge injustice and advocate for human rights.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Community Protection</h3>
              <p className="text-sm text-muted-foreground">
                We use art to protect and amplify the voices of vulnerable and indigenous communities, ensuring their stories are heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks Collection */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Artworks Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore poems, music, and other artistic works created by Bookcubers members and volunteers. 
              Click on any piece to access and experience the full work.
            </p>
          </div>

          <div className="space-y-6">
            {artworks.map((artwork) => (
              <article 
                key={artwork.id} 
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      <FileText className="w-3 h-3" />
                      {artwork.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      by {artwork.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
                    {artwork.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {artwork.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {artwork.keywords.map((keyword) => (
                      <span 
                        key={keyword} 
                        className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="accent" asChild>
                      <a 
                        href={artwork.pdfUrl} 
                        download
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-secondary/50 rounded-xl p-8 border border-border">
              <Palette className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-heading font-semibold text-foreground mb-2">More Art Coming Soon</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                We are continuously collecting and curating artistic works from our members and volunteers. 
                Check back soon for more poems, music, visual art, and other creative expressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-navy-800">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Share Your Art
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a Bookcubers member or volunteer with artistic works to share? 
            We welcome poems, music, visual art, and other creative expressions that align with our mission.
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="/contact">Contact Us to Submit Your Work</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
