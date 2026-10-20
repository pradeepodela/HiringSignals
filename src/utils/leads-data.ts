export const niches = [
  'Software Engineer', 'React Developer', 'DevOps Engineer', 'Sales Manager', 
  'Product Designer', 'Marketing Lead', 'AI Engineer', 'Customer Support',
  'Data Scientist', 'Project Manager', 'Account Executive', 'HR Specialist'
];

export const cities = [
  'San Francisco', 'New York', 'Austin', 'London', 'Berlin', 'Bangalore', 
  'Singapore', 'Toronto', 'Sydney', 'Paris', 'Dubai', 'Mumbai'
];

export const generateLeadsData = () => {
  const data = [];
  for (const niche of niches) {
    for (const city of cities) {
      data.push({
        niche,
        city,
        slug: `${niche.toLowerCase().replace(/ /g, '-')}-in-${city.toLowerCase().replace(/ /g, '-')}`,
        title: `Hiring Signals for ${niche}s in ${city} | HiringSignals.io`,
        description: `Find companies hiring ${niche}s in ${city}. Real-time hiring signals and lead intelligence.`
      });
    }
  }
  return data;
};
