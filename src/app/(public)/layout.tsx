export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <title>Enlightish</title>
        <meta name="description" content="Descrição do meu projeto incrível" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );

}