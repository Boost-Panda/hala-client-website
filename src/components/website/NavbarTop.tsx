import dynamic from 'next/dynamic';

import { formatPhoneNumber } from '@/lib/utils';
import { companyInfo } from '@/lib/companyInfo';

import { Mail, Phone } from 'lucide-react';
import { faFacebookF, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), {
  loading: () => <div className="w-4 h-4 bg-primary animate-pulse"></div>,
  ssr: false,
});

const NavbarTop = () => {
  return (
    <div className="bg-primary text-white">
      <div className="flex justify-between container mx-auto text-sm py-3 px-4">
        <span className="hidden lg:flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
        </span>
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href={`tel:${companyInfo.phone}`}>{formatPhoneNumber(companyInfo.phone)}</a>
        </span>
        <div className="flex gap-6">
          <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
          </a>
          <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
          </a>
          <a href={companyInfo.social.youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
          </a>
          <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
