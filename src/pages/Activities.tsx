import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { activities, getYears, getCategoryColor, getSDGName, Activity } from "@/data/activities";
import { Calendar, MapPin, Users, Award, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  'All',
  'Education',
  'Leadership',
  'Sustainability',
  'Culture',
  'Community',
  'Health',
  'Media Literacy',
  'International',
  'Recognition'
];

export default function Activities() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const years = getYears();

  const filteredActivities = activities.filter(activity => {
    const yearMatch = selectedYear === 'all' || activity.year === selectedYear;
    const categoryMatch = selectedCategory === 'All' || activity.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const yearThemes: Record<number, string> = {
    2019: 'Foundation Year',
    2020: 'Consolidation Year',
    2021: 'Community Engagement Year',
    2022: 'Expansion Year',
    2023: 'International Recognition Year',
    2024: 'High Impact Year',
    2025: 'Global Representation Year'
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
              Activities Archive
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-100">
              A complete chronological record of every program, workshop, campaign, and 
              milestone from 2019 to 2025 — documenting our journey of impact.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up animation-delay-200">
              <div className="bg-card/50 rounded-lg px-4 py-2 border border-border">
                <span className="text-2xl font-heading font-bold text-accent">{activities.length}</span>
                <span className="text-sm text-muted-foreground ml-2">Total Activities</span>
              </div>
              <div className="bg-card/50 rounded-lg px-4 py-2 border border-border">
                <span className="text-2xl font-heading font-bold text-accent">{years.length}</span>
                <span className="text-sm text-muted-foreground ml-2">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Year Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedYear === 'all' ? 'accent' : 'ghost'}
                size="sm"
                onClick={() => setSelectedYear('all')}
              >
                All Years
              </Button>
              {years.map(year => (
                <Button
                  key={year}
                  variant={selectedYear === year ? 'accent' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <p className="text-muted-foreground mb-8">
            Showing {filteredActivities.length} {filteredActivities.length === 1 ? 'activity' : 'activities'}
            {selectedYear !== 'all' && ` from ${selectedYear}`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>

          {/* Timeline by Year */}
          {selectedYear === 'all' ? (
            years.map(year => {
              const yearActivities = filteredActivities.filter(a => a.year === year);
              if (yearActivities.length === 0) return null;
              
              return (
                <div key={year} className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-heading font-bold text-foreground">{year}</h2>
                    <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full">
                      {yearThemes[year]}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-muted-foreground text-sm">
                      {yearActivities.length} {yearActivities.length === 1 ? 'activity' : 'activities'}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yearActivities.map(activity => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          )}

          {filteredActivities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No activities found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(activity.category)}`}>
            {activity.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {activity.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {activity.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {activity.description}
        </p>

        {/* Achievement */}
        {activity.achievement && (
          <div className="flex items-start gap-2 mb-4 p-3 bg-accent/10 rounded-lg">
            <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-accent text-sm">{activity.achievement}</p>
          </div>
        )}

        {/* Location */}
        {activity.location && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <MapPin className="w-3 h-3" />
            {activity.location}
          </div>
        )}

        {/* Beneficiaries */}
        {activity.beneficiaries && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Users className="w-3 h-3" />
            {activity.beneficiaries}
          </div>
        )}

        {/* Partners */}
        {activity.partners && activity.partners.length > 0 && (
          <div className="text-xs text-muted-foreground mb-4">
            <span className="font-medium">Partners:</span> {activity.partners.join(', ')}
          </div>
        )}

        {/* SDGs */}
        <div className="flex flex-wrap gap-1">
          {activity.sdgs.map(sdg => (
            <span
              key={sdg}
              className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded"
              title={getSDGName(sdg)}
            >
              SDG {sdg}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
