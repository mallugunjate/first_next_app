import '@/app/ui/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './header/Navbar';

export const metadata = {
  title: "Pediatric and Adult Braces & Orthotics | Cascade Dafo",
  description: "Pediatric and Adult Braces & Orthotics | Cascade Dafo",
  icons: {
    icon: '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
