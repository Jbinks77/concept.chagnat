import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website Redesign Studio | Before & After Transformations',
  description:
    'Premium website redesign specialist turning outdated websites into modern conversion machines.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
