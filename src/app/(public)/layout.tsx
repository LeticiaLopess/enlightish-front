import { Topbar } from '@/components/Topbar';
import { Poppins } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Toast } from '@/components/Toast';

config.autoAddCss = false;

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});

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

const siteUrl = resolveSiteUrl();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Enlightish',
        template: '%s | Enlightish'
    },
    description:
        'Escola de idiomas com ensino de ingles cristao para missionarios.',
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: 'Enlightish',
        description:
            'Escola de idiomas com ensino de ingles cristao para missionarios.',
        url: siteUrl,
        siteName: 'Enlightish',
        locale: 'pt_BR',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true
    },
    icons: {
        icon: '/assets/favicon-logo.png'
    }
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" className={`${poppins.className}`}>
            <body className="overflow-x-hidden">
                <Topbar />
                {children}
                <Toast />
                <a
                    href="https://wa.me/5521979168064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed right-6 bottom-6 lg:right-8 lg:bottom-8 z-50"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/whatsapp.svg"
                        className="h-14 w-14"
                        alt="WhatsApp Link"
                    />
                </a>
            </body>
        </html>
    );
}
