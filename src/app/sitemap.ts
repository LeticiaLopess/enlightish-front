import type { MetadataRoute } from 'next';

const defaultSiteUrl = 'https://www.enlightish.com.br';

function resolveSiteUrl(): string {
    const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

    if (!rawSiteUrl) {
        return defaultSiteUrl;
    }

    try {
        return new URL(rawSiteUrl).origin;
    } catch {
        try {
            return new URL(`https://${rawSiteUrl}`).origin;
        } catch {
            return defaultSiteUrl;
        }
    }
}

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
    const siteUrl = resolveSiteUrl();
    const now = new Date();

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: now,
        changeFrequency: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1 : 0.7
    }));
}
