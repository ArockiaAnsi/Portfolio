import './styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Ansi Britto Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
