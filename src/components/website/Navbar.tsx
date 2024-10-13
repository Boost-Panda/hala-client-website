import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { companyInfo } from '@/lib/companyInfo';

import NavbarTop from '@/components/website/NavbarTop';

const NavbarDesktop = dynamic(() => import('./NavbarDesktop'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const NavbarMobile = dynamic(() => import('./NavbarMobile'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Navbar = () => {
  return (
    <header className="top-0 z-10 bg-white">
      <NavbarTop />

      <div className="h-20 flex md:flex items-center justify-between gap-4 px-4 container mx-auto border-b">
        <div className="hidden lg:block">
          <NavbarDesktop />
        </div>
        <Link href="/" className="lg:hidden">
          <Image src="/logos/logo.webp" alt="logo" width={80} height={80} loading="lazy" />
        </Link>
        <div className="ml-auto">
          <Button className="shrink-0">
            <Link href={companyInfo.mainCTA.href}>{companyInfo.mainCTA.name}</Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
