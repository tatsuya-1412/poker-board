import { inter } from '@/app/styles/fonts';
import '@/app/styles/global.css';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
      <Theme>{children}</Theme>
      </body>
    </html>
  );
}
