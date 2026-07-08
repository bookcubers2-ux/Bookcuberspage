import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { activities, getCategoryColor } from "@/data/activities";

const featuredActivities = activities
  .filter(a => a.achievement || a.category === 'International' || a.category === 'Recognition')
  .slice(0, 4);

export function TimelinePreview() {
  return (
    <section className="section-padding bg-navy-800">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-xl">
              From a youth ambassador's vision in 2019 to international recognition — 
              explore our complete history of impact.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/activities" className="flex items-center gap-2">
              View Full Timeline
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-8">
            {featuredActivities.map((activity, index) => (
              <div
                key={activity.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(activity.category)}`}>
                        {activity.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {activity.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {activity.description}
                    </p>
                    {activity.achievement && (
                      <p className="text-accent text-sm font-medium">
                        ✦ {activity.achievement}
                      </p>
                    )}
                  </div>
                </div>

                {/* Year badge (desktop) */}
                <div className="hidden md:flex flex-1 items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-muted/30">
                    {activity.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/activities" className="inline-flex items-center gap-2 text-accent hover:underline">
            Explore all 54 activities from 2019–2025
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
