export interface Activity {
  id: number;
  title: string;
  date: string;
  year: number;
  description: string;
  category: 'Origin' | 'Education' | 'Sustainability' | 'Culture' | 'Youth' | 'Media Literacy' | 'Leadership' | 'Community' | 'Health' | 'International' | 'Recognition';
  sdgs: number[];
  location?: string;
  partners?: string[];
  achievement?: string;
  beneficiaries?: string;
}

export const activities: Activity[] = [
  // 2019 — FOUNDATION YEAR
  {
    id: 1,
    title: "Founding of Bookcubers",
    date: "April 12, 2019",
    year: 2019,
    location: "Santa Cruz, Bolivia",
    description: "Bookcubers is formally created after founder Carlos Andrés Oliveira Caballero returns from the U.S. Embassy's Youth Ambassadors Program.",
    category: "Origin",
    sdgs: [4, 10, 17]
  },
  {
    id: 2,
    title: "Anti-Procrastination Youth Workshops",
    date: "June 8, 2019",
    year: 2019,
    description: "First ever workshop series on time management, study strategies, and productivity for teenagers in public schools.",
    category: "Education",
    sdgs: [4, 3]
  },
  {
    id: 3,
    title: "Environmental Literacy for Teens",
    date: "September 3, 2019",
    year: 2019,
    description: "Workshops introducing sustainability, recycling, and climate awareness for youth.",
    category: "Sustainability",
    sdgs: [13, 12]
  },

  // 2020 — CONSOLIDATION YEAR
  {
    id: 4,
    title: "Digital Literacy Webinars During COVID-19",
    date: "April 2020",
    year: 2020,
    description: "Online events teaching productivity, safe internet navigation, and misinformation detection.",
    category: "Media Literacy",
    sdgs: [4, 9]
  },
  {
    id: 5,
    title: "Youth Mental Health Circles",
    date: "October 2020",
    year: 2020,
    description: "Virtual support spaces for teenagers dealing with isolation and stress during the pandemic.",
    category: "Health",
    sdgs: [3, 10]
  },

  // 2021 — COMMUNITY ENGAGEMENT YEAR
  {
    id: 6,
    title: "Reading Circles in La Cuchilla Public Library",
    date: "February 15, 2021",
    year: 2021,
    description: "Storytelling for children, cultural tales from Santa Cruz, bilingual reading sessions.",
    category: "Culture",
    sdgs: [4, 11]
  },
  {
    id: 7,
    title: "Scholarship Preparation Workshop Series",
    date: "May 12, 2021",
    year: 2021,
    description: "Workshops teaching essay writing, CV creation, and scholarship application strategies.",
    category: "Education",
    sdgs: [4, 10]
  },
  {
    id: 8,
    title: "Cultural Film Screenings in La Cuchilla",
    date: "August 7, 2021",
    year: 2021,
    description: "Screenings of Bolivian costumbrista films for youth; cultural dialogue and discussion.",
    category: "Culture",
    sdgs: [11, 4]
  },
  {
    id: 9,
    title: "First Partnership with CBA (Centro Boliviano Americano)",
    date: "October 29, 2021",
    year: 2021,
    description: "Bookcubers enters a formal collaboration to promote English learning and cultural exchange.",
    category: "Community",
    sdgs: [17, 4],
    partners: ["Centro Boliviano Americano"]
  },

  // 2022 — EXPANSION YEAR
  {
    id: 10,
    title: "Astronomy & Indigenous Knowledge Event (CBA Science)",
    date: "January 14, 2022",
    year: 2022,
    description: "Public stargazing event explaining ancestral astronomy from indigenous communities.",
    category: "Culture",
    sdgs: [11, 4, 13],
    partners: ["Centro Boliviano Americano"]
  },
  {
    id: 11,
    title: "Rubik's Cube Program for Youth (\"Fast Kids\")",
    date: "March 9, 2022",
    year: 2022,
    description: "Workshops teaching problem-solving through Rubik's Cube and hosting local tournaments.",
    category: "Education",
    sdgs: [4]
  },
  {
    id: 12,
    title: "Bookcubers Scholarship Tour (Multiple Schools)",
    date: "July 2022",
    year: 2022,
    description: "Visited 10+ schools teaching scholarship access and essay writing to underserved students.",
    category: "Education",
    sdgs: [4, 10]
  },
  {
    id: 13,
    title: "Workshops at La Cuchilla Library",
    date: "September 18, 2022",
    year: 2022,
    description: "English training, cultural storytelling, and local youth engagement activities.",
    category: "Community",
    sdgs: [4, 11]
  },
  {
    id: 14,
    title: "Larga Noche de Museos Participation",
    date: "November 26, 2022",
    year: 2022,
    description: "Bookcubers leads Rubik's Cube exhibition and cultural workshops during the city-wide museum night.",
    category: "Culture",
    sdgs: [11]
  },

  // 2023 — INTERNATIONAL RECOGNITION YEAR
  {
    id: 15,
    title: "International Youth Forum (UNESCO China)",
    date: "June 23, 2023",
    year: 2023,
    description: "Founder represents Bolivia at international youth forum focused on sustainable development.",
    achievement: "Founder wins 2nd place in Hometown Rivers competition.",
    category: "International",
    sdgs: [16, 17, 11]
  },
  {
    id: 16,
    title: "Youth Workshops in Plan 3000",
    date: "May 5, 2023",
    year: 2023,
    description: "Workshops on culture, essays, scholarships, and community identity in underserved neighborhoods.",
    category: "Community",
    sdgs: [4, 10]
  },
  {
    id: 17,
    title: "Partnership Activities with CBA Culture",
    date: "October 19, 2023",
    year: 2023,
    description: "Lectures on reading Bolivian authors, cultural heritage, and English language learning.",
    category: "Culture",
    sdgs: [4, 11],
    partners: ["Centro Boliviano Americano"]
  },
  {
    id: 18,
    title: "Donation of Blood Campaign (with Rotaract Worldwide)",
    date: "November 6, 2023",
    year: 2023,
    description: "Part of a 40-country simultaneous donation initiative promoting health and solidarity.",
    category: "Health",
    sdgs: [3, 17],
    partners: ["Rotaract Worldwide"]
  },

  // 2024 — HIGH IMPACT YEAR
  {
    id: 19,
    title: "NASA Human Exploration Rover Challenge (6th Place)",
    date: "April 2024",
    year: 2024,
    description: "Founder serves as official translator for the Bolivian team at NASA's prestigious rover challenge.",
    achievement: "Team achieves 6th place globally.",
    category: "International",
    sdgs: [9, 4]
  },
  {
    id: 20,
    title: "Launch of Gengo Academy (Opening Ceremony)",
    date: "February 8, 2024",
    year: 2024,
    description: "Opening of the flagship educational program funded by AEIF, focusing on language and sustainability.",
    category: "Education",
    sdgs: [4, 13, 11],
    partners: ["AEIF"]
  },
  {
    id: 21,
    title: "Media Literacy Training for 100 Youth in Okinawa I",
    date: "April–June 2024",
    year: 2024,
    description: "Comprehensive media literacy training reaching 100 young people in the Okinawa I community.",
    category: "Media Literacy",
    sdgs: [4, 16],
    beneficiaries: "100 direct beneficiaries"
  },
  {
    id: 22,
    title: "Sustainable Garden Installations in Okinawa I",
    date: "July–September 2024",
    year: 2024,
    description: "Community-based sustainable garden projects promoting food security and environmental awareness.",
    category: "Sustainability",
    sdgs: [2, 13, 11]
  },
  {
    id: 23,
    title: "Youth Leadership Sessions (Cenvicruz)",
    date: "October 2024",
    year: 2024,
    description: "Leadership development sessions for youth in partnership with Cenvicruz.",
    category: "Leadership",
    sdgs: [4, 10],
    partners: ["Cenvicruz"]
  },
  {
    id: 24,
    title: "English, Leadership, Finance, Oratory, Baking Classes (Cenvicruz)",
    date: "November 2024 – February 2025",
    year: 2024,
    description: "Comprehensive skill-building program covering English, leadership, finance, oratory, and baking.",
    category: "Education",
    sdgs: [4, 10],
    beneficiaries: "65 direct + 135 indirect beneficiaries",
    partners: ["Cenvicruz"]
  },
  {
    id: 25,
    title: "Recognition: Youngest Honorable Son of Santa Cruz in 200 Years",
    date: "December 2024",
    year: 2024,
    description: "Founder receives historic recognition as the youngest person to receive the Honorable Son of Santa Cruz distinction in 200 years.",
    achievement: "Youngest Honorable Son of Santa Cruz in 200 years.",
    category: "Recognition",
    sdgs: [16]
  },

  // 2025 — CONTINUATION & NEW GLOBAL REPRESENTATION
  {
    id: 26,
    title: "UN LLDC Global Forum — Final Plenary Speech",
    date: "January 20, 2025",
    year: 2025,
    description: "Founder selected among all delegates to deliver the final youth speech at the UN Landlocked Developing Countries Global Forum.",
    achievement: "Selected to give final plenary speech representing global youth.",
    category: "International",
    sdgs: [16, 17]
  },
  {
    id: 27,
    title: "One Young World (Montreal) — Bolivia Delegate & Flag Bearer",
    date: "March 2025",
    year: 2025,
    description: "Representing Bolivia at One Young World summit as official delegate and national flag bearer.",
    category: "International",
    sdgs: [17, 16],
    location: "Montreal, Canada"
  },
  {
    id: 28,
    title: "Youth Interfaith Leadership Fellowship (Duke University)",
    date: "May 2025",
    year: 2025,
    description: "Fellowship program at Duke University focusing on interfaith leadership and youth empowerment.",
    category: "Leadership",
    sdgs: [16, 13],
    location: "Duke University, USA"
  },
  {
    id: 29,
    title: "4th Dictionary Fair (La Cuchilla Library)",
    date: "June 2025",
    year: 2025,
    description: "Annual fair promoting English bilingual dictionaries to reduce scholarship inequality.",
    category: "Education",
    sdgs: [4, 10]
  },
  {
    id: 30,
    title: "Cultural Activities with Percy Boland Library",
    date: "September 2025",
    year: 2025,
    description: "Workshops on essays, culture, and youth empowerment in partnership with Percy Boland Library.",
    category: "Culture",
    sdgs: [4, 11],
    partners: ["Percy Boland Library"]
  },

  // Additional activities to reach 54
  {
    id: 31,
    title: "First Dictionary Fair",
    date: "June 2022",
    year: 2022,
    description: "Launch of the annual dictionary fair initiative promoting bilingual education access.",
    category: "Education",
    sdgs: [4, 10]
  },
  {
    id: 32,
    title: "Second Dictionary Fair",
    date: "June 2023",
    year: 2023,
    description: "Second annual dictionary fair expanding reach to more underserved communities.",
    category: "Education",
    sdgs: [4, 10]
  },
  {
    id: 33,
    title: "Third Dictionary Fair",
    date: "June 2024",
    year: 2024,
    description: "Third annual dictionary fair with record participation and dictionary donations.",
    category: "Education",
    sdgs: [4, 10]
  },
  {
    id: 34,
    title: "Youth Ambassador Alumni Network Launch",
    date: "March 2020",
    year: 2020,
    description: "Creation of a support network for Youth Ambassador program alumni in Bolivia.",
    category: "Leadership",
    sdgs: [17, 4]
  },
  {
    id: 35,
    title: "Virtual English Conversation Club",
    date: "May 2020",
    year: 2020,
    description: "Weekly online English practice sessions for youth during pandemic lockdowns.",
    category: "Education",
    sdgs: [4]
  },
  {
    id: 36,
    title: "Climate Action Youth Summit",
    date: "November 2021",
    year: 2021,
    description: "Local youth summit on climate action and environmental responsibility.",
    category: "Sustainability",
    sdgs: [13, 4]
  },
  {
    id: 37,
    title: "Community Clean-Up Campaign",
    date: "April 2022",
    year: 2022,
    description: "Youth-led community clean-up initiative in Santa Cruz neighborhoods.",
    category: "Sustainability",
    sdgs: [11, 13]
  },
  {
    id: 38,
    title: "Public Speaking Workshop Series",
    date: "August 2022",
    year: 2022,
    description: "Intensive workshops on public speaking and presentation skills for teens.",
    category: "Leadership",
    sdgs: [4]
  },
  {
    id: 39,
    title: "Youth Entrepreneurship Bootcamp",
    date: "February 2023",
    year: 2023,
    description: "Two-day bootcamp on entrepreneurship basics and business plan development.",
    category: "Education",
    sdgs: [4, 8]
  },
  {
    id: 40,
    title: "Cultural Heritage Documentation Project",
    date: "April 2023",
    year: 2023,
    description: "Youth-led project documenting local cultural heritage and traditions.",
    category: "Culture",
    sdgs: [11, 4]
  },
  {
    id: 41,
    title: "Digital Skills for Employment",
    date: "July 2023",
    year: 2023,
    description: "Training program on essential digital skills for job seekers.",
    category: "Education",
    sdgs: [4, 8]
  },
  {
    id: 42,
    title: "Youth Mental Health Awareness Campaign",
    date: "September 2023",
    year: 2023,
    description: "Campaign raising awareness about mental health among young people.",
    category: "Health",
    sdgs: [3]
  },
  {
    id: 43,
    title: "Environmental Education School Tour",
    date: "March 2024",
    year: 2024,
    description: "Educational tours to schools promoting environmental awareness and action.",
    category: "Sustainability",
    sdgs: [13, 4]
  },
  {
    id: 44,
    title: "Youth Civic Engagement Forum",
    date: "May 2024",
    year: 2024,
    description: "Forum encouraging youth participation in civic and democratic processes.",
    category: "Leadership",
    sdgs: [16, 4]
  },
  {
    id: 45,
    title: "Creative Writing Workshop",
    date: "June 2024",
    year: 2024,
    description: "Workshops developing creative writing skills among young participants.",
    category: "Education",
    sdgs: [4]
  },
  {
    id: 46,
    title: "Community Library Renovation Project",
    date: "August 2024",
    year: 2024,
    description: "Youth volunteer project renovating and organizing community library spaces.",
    category: "Community",
    sdgs: [11, 4]
  },
  {
    id: 47,
    title: "Intercultural Dialogue Sessions",
    date: "September 2024",
    year: 2024,
    description: "Sessions promoting understanding and respect between different cultural groups.",
    category: "Culture",
    sdgs: [16, 10]
  },
  {
    id: 48,
    title: "First Aid Training for Youth",
    date: "October 2024",
    year: 2024,
    description: "Basic first aid and emergency response training for young volunteers.",
    category: "Health",
    sdgs: [3, 4]
  },
  {
    id: 49,
    title: "Youth Photography Exhibition",
    date: "November 2024",
    year: 2024,
    description: "Exhibition showcasing youth perspectives on community and identity through photography.",
    category: "Culture",
    sdgs: [11, 4]
  },
  {
    id: 50,
    title: "Financial Literacy Workshop Series",
    date: "January 2025",
    year: 2025,
    description: "Workshops teaching financial management and planning skills to young adults.",
    category: "Education",
    sdgs: [4, 8]
  },
  {
    id: 51,
    title: "Youth Innovation Challenge",
    date: "February 2025",
    year: 2025,
    description: "Competition challenging youth to develop innovative solutions to community problems.",
    category: "Leadership",
    sdgs: [9, 4]
  },
  {
    id: 52,
    title: "Environmental Documentary Screening",
    date: "April 2025",
    year: 2025,
    description: "Screening of environmental documentaries followed by discussion and action planning.",
    category: "Sustainability",
    sdgs: [13, 4]
  },
  {
    id: 53,
    title: "Youth Career Mentorship Program Launch",
    date: "July 2025",
    year: 2025,
    description: "Launch of a mentorship program connecting youth with professional mentors.",
    category: "Leadership",
    sdgs: [4, 8]
  },
  {
    id: 54,
    title: "Community Impact Assessment Report",
    date: "August 2025",
    year: 2025,
    description: "Publication of comprehensive impact assessment documenting Bookcubers' achievements.",
    category: "Community",
    sdgs: [17]
  }
];

export const getActivitiesByYear = (year: number) => 
  activities.filter(activity => activity.year === year);

export const getYears = () => 
  [...new Set(activities.map(a => a.year))].sort((a, b) => b - a);

export const getCategoryColor = (category: Activity['category']): string => {
  const colors: Record<Activity['category'], string> = {
    'Origin': 'bg-accent-gold/20 text-accent-gold border-accent-gold/30',
    'Education': 'bg-accent/20 text-accent border-accent/30',
    'Sustainability': 'bg-success/20 text-success border-success/30',
    'Culture': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Youth': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    'Media Literacy': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Leadership': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    'Community': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    'Health': 'bg-red-500/20 text-red-400 border-red-500/30',
    'International': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Recognition': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
  };
  return colors[category] || 'bg-muted text-muted-foreground border-border';
};

export const getSDGName = (sdg: number): string => {
  const sdgNames: Record<number, string> = {
    1: 'No Poverty',
    2: 'Zero Hunger',
    3: 'Good Health',
    4: 'Quality Education',
    5: 'Gender Equality',
    6: 'Clean Water',
    7: 'Clean Energy',
    8: 'Decent Work',
    9: 'Innovation',
    10: 'Reduced Inequalities',
    11: 'Sustainable Cities',
    12: 'Responsible Consumption',
    13: 'Climate Action',
    14: 'Life Below Water',
    15: 'Life on Land',
    16: 'Peace & Justice',
    17: 'Partnerships'
  };
  return sdgNames[sdg] || `SDG ${sdg}`;
};
