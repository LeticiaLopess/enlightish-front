import { Topbar } from "@/components/Topbar";
import { Poppins } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
        <title>Enlightish</title>
        <meta name="description" content="Escola de idiomas com foco no inglês cristão." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-logo.png" />
      </head>

      <body className="overflow-x-hidden">
        <Topbar />
        {children}

        <a href="https://wa.me/5521982794750" target="_blank" rel="noopener noreferrer" className="fixed right-6 bottom-6 lg:right-8 lg:bottom-8">
            <img src="/assets/whatsapp.svg" className="h-14 w-14" alt="WhatsApp Link" />
        </a>
      </body>
    </html>
  );

}
