import type { Metadata } from 'next';
import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Atrayan Mukherjee | Portfolio',
  description:
    'Software developer specializing in AI model evaluation, prompt engineering, and LLM benchmarking.',
  openGraph: {
    title: 'AI Model Evaluation Portfolio | Atrayan Mukherjee',
    description:
      'Software developer specializing in AI model evaluation, prompt engineering, and LLM benchmarking.',
    url: baseUrl,
    siteName: 'Atrayan Portfolio',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
