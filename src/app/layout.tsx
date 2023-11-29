import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/lib/tailwind-indicator';
import { ThemeProvider } from '@/components/global/themeProvider';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="relative">{children}</main>
          <TailwindIndicator />
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
