import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Navbar from '@/components/website/Navbar';
const Footer = dynamic(() => import('@/components/website/Footer'), {
  ssr: false,
});

const LoadingFallback = () => <div className="loading-skeleton">Loading...</div>;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
