import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
  token: process.env.APIFY_TOKEN || 'placeholder',
});

export const triggerLeadScraper = async (niche: string, city: string) => {
  // Example of triggering a Google Maps or LinkedIn scraper
  const run = await client.actor('apify/google-maps-scraper').call({
    searchStrings: [`hiring ${niche} in ${city}`],
    maxItems: 50,
  });

  return run;
};

export const fetchLeadResults = async (datasetId: string) => {
  const { items } = await client.dataset(datasetId).listItems();
  return items;
};
