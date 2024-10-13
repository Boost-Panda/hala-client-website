import React, { memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { companyInfo } from '@/lib/companyInfo';
import { formatPhoneNumber } from '@/lib/utils';

import { faFacebookF, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), {
  loading: () => <div className="w-6 h-6 bg-primary animate-pulse"></div>,
  ssr: false,
});

const Footer = memo(function Footer() {
  return (
    <footer className="bg-primary text-white p-12 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          <div>
            <h3 className="text-xl font-bold mb-4">Qick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/member-portal">Member Portal</Link>
              </li>
              <li>
                <Link href="/locations">Our Locations</Link>
              </li>
              <li>
                <Link href="/offers">Special Offers</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/details-of-participation">Details of Participation</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link href="/site-map">Site Map</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center justify-start gap-10 my-6">
              <a href={companyInfo.social.facebook} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 text-white" />
              </a>
              <a href={companyInfo.social.instagram} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-white" />
              </a>
              <a href={companyInfo.social.youtube} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6 text-white" />
              </a>
              <a href={companyInfo.social.twitter} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6 text-white" />
              </a>
            </div>
            <p className="mb-6">
              <a href={`tel:${companyInfo.phone}`}>{formatPhoneNumber(companyInfo.phone)}</a>
              <br />
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              <br />
            </p>
          </div>
        </div>
        <hr className="my-12 border-white/30" />
        <p className="text-sm text-white/70">
          Copyright &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
