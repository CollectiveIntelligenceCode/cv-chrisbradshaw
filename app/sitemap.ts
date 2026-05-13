import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chrisbradshaw.ai',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
