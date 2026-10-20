import { db } from './src/db';
import { seoPages } from './src/db/schema';
import { nanoid } from 'nanoid';

const industries = ['Software', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Energy', 'Logistics', 'Construction', 'Marketing'];
const locations = ['USA', 'India', 'UK', 'Canada', 'Germany', 'Australia', 'Singapore', 'UAE', 'France', 'Japan'];
const keywords = ['Hiring Signals', 'Recruitment Trends', 'Job Openings', 'Company Growth', 'Talent Acquisition'];

async function generatePSEOPages() {
  console.log('Generating pSEO pages...');
  const pages = [];

  for (const industry of industries) {
    for (const location of locations) {
      for (const keyword of keywords) {
        const title = `${keyword} in ${industry} - ${location}`;
        const slug = `${keyword.toLowerCase().replace(/ /g, '-')}-in-${industry.toLowerCase()}-${location.toLowerCase()}`;
        
        pages.push({
          id: nanoid(),
          slug,
          title,
          description: `Discover the latest ${title}. Stay ahead with HiringSignals.io.`,
          content: `This page covers ${title} with real-time data from LinkedIn and other sources.`,
          category: industry,
        });
      }
    }
  }

  // Insert in batches of 100
  for (let i = 0; i < pages.length; i += 100) {
    await db.insert(seoPages).values(pages.slice(i, i + 100));
  }
  
  console.log(`Generated ${pages.length} pSEO pages.`);
  process.exit(0);
}

generatePSEOPages();
