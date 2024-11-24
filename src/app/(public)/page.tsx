'use client'
import { Poppins } from 'next/font/google';
import { Topbar } from '@/components/Topbar';
import '../../global/globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <Topbar />
    </div>
  );
}
