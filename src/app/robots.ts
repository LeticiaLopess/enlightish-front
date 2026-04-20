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

export default function robots(): MetadataRoute.Robots {
    const siteUrl = resolveSiteUrl();

    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl
    };
}
