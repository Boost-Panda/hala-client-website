import { memo } from 'react';

import dynamic from 'next/dynamic';

const Certifications = dynamic(() => import('@/components/website/Home/Certs'), {
  ssr: false,
});

const MeetOurDoctors = dynamic(() => import('@/components/website/Home/MeetOurDoctors'), {
  ssr: false,
});

const Services = dynamic(() => import('@/components/website/Home/Services'), {
  ssr: false,
});

const CareCredit = dynamic(() => import('@/components/website/Home/CareCredit'), {
  ssr: false,
});

const Gallery = dynamic(() => import('@/components/website/Home/Gallery'), {
  ssr: false,
});

const Locations = dynamic(() => import('@/components/website/Locations'), {
  ssr: false,
});

const Reviews = dynamic(() => import('@/components/website/Home/Reviews'), {
  ssr: false,
});

const Contact = dynamic(() => import('@/components/website/Home/Contact'), {
  ssr: false,
});

const ClientSideComponents = memo(function ClientSideComponents() {
  return (
    <div className="space-y-40">
      <Certifications />
      <MeetOurDoctors />
      <p className="text-center text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
        We are thrilled to have the opportunity to serve all the residents of the quad-state area, delivering
        unparalleled oral surgery care. Our commitment lies in providing you with nothing but the best experience
        possible, utilizing cutting-edge technology and groundbreaking research findings. At Associated Oral &
        Maxillofacial Surgeons, your well-being is truly our top priority.
      </p>
      <Services />
      <CareCredit />
      <Gallery />
      <Locations />
      <Reviews />
      <Contact />
    </div>
  );
});

export default ClientSideComponents;
