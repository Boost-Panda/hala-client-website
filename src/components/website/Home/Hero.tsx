import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

import { companyInfo } from '@/lib/companyInfo';

const Hero = memo(function Hero() {
  return (
    <>
      <div className="w-full py-8">
        <div className="flex flex-col items-center justify-center">
          <Image src="/logos/logo.webp" alt="Logo" width={160} height={160} className="w-32 md:w-48" />
          <h1 className="text-4xl font-bold max-w-3xl text-center leading-snug mt-4">
            Experience the Artistry of Oral & Maxillofacial Excellence.
          </h1>
          <p className="text-2xl text-center mt-4">Welcome to Associated Oral & Maxillofacial Surgeons</p>
          <Link className={buttonVariants({ size: 'lg', className: 'mt-6' })} href={companyInfo.mainCTA.href}>
            {companyInfo.mainCTA.name}
          </Link>
          <Image
            src="/site-images/team-photo.webp"
            alt="Team Photo"
            width={1200}
            height={1200}
            className="md:rounded-lg mt-12 w-full md:w-auto"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </>
  );
});

export default Hero;
