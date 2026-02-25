
import { getBlogPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.praverse.ai';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const postEntries: MetadataRoute.Sitemap = posts
    .map((post) => {
      const parsedDate = post.metadata?.date ? new Date(post.metadata.date) : null;
      const lastModified =
        parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate : new Date();

      return {
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified,
        changeFrequency: 'daily',
      };
    });

  const staticPages = [
    '/',
    '/pharma-ai',
    '/humanoid-robotics',
    '/healthmate',
    '/about',
    '/blog',
    '/contact',
    '/innovate',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  return [
    ...staticPages,
    ...postEntries,
  ];
}
