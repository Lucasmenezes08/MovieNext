import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#191326] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
