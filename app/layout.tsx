import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Stages Lawn and Landscape of Ohio | Landscaping in Grove City',
  description: 'Stages Lawn and Landscape of Ohio in Grove City offers expert landscaping services. For years, we have provided reliable landscaping!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
