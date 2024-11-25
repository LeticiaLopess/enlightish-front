import { Topbar } from "@/components/Topbar";
import { Poppins } from 'next/font/google';

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
        <meta name="description" content="Descrição do meu projeto incrível" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );

}
