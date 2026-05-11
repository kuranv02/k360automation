import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K360 Automation | Oklahoma Instrumentation & Process Control',
  description: 'K360 Automation supports Oklahoma oil and gas operators with process instrumentation, control valves, automation, and measurement solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
