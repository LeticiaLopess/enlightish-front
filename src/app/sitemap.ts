import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.enlightish.com.br';

const routes = [
    '/',
    '/landing-page/start',
    '/landing-page/intro',
    '/landing-page/about',
    '/landing-page/services',
    '/landing-page/feedback',
    '/landing-page/contact'
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: now,
        changeFrequency: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1 : 0.7
    }));
}
