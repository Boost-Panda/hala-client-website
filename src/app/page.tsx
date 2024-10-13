import { Suspense } from 'react';
// import dynamic from 'next/dynamic';

import { Button } from '@/components/ui/button';
import Layout from '@/components/website/Layout';
// import Hero from '@/components/website/Home/Hero';
// import Intro from '@/components/website/Home/Intro';

// const ClientSideComponents = dynamic(() => import('@/components/website/Home/ClientSideComponents'), {
//   ssr: false,
// });

const LoadingFallback = () => <div className="loading-skeleton">Loading...</div>;

export default function Home() {
  return (
    <Layout>
      {/* <Hero /> */}
      <main className="bg-muted/40">
        <div className="mx-auto container p-12 flex flex-col items-center gap-16">
          <Button size="lg">Book My Free* Camping Trip</Button>
          {/* <Intro /> */}
        </div>
      </main>
      <Suspense fallback={<LoadingFallback />}>{/* <ClientSideComponents /> */}</Suspense>
    </Layout>
  );
}
