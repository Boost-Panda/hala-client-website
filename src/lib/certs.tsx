import Image from 'next/image';
import Link from 'next/link';

export type Cert = {
  body: React.ReactNode;
  src: string;
  title: string;
  url: string;
};

export const certs: Cert[] = [
  {
    body: (
      <>
        <Link href="https://www.frederickhealth.org/" target="_blank">
          <Image src="/certs/hos-frederick.webp" alt="Frederick Regional Health System" width={120} height={120} />
        </Link>
      </>
    ),
    src: '/certs/hos-frederick.webp',
    title: 'Frederick Regional Health System',
    url: 'https://www.frederickhealth.org/',
  },
  {
    body: (
      <>
        <Link href="https://www.aaoms.org/" target="_blank">
          <Image
            src="/certs/org-aaoms.webp"
            alt="American Association of Oral & Maxillofacial Surgeons"
            width={120}
            height={120}
          />
        </Link>
      </>
    ),
    src: '/certs/org-aaoms.webp',
    title: 'American Association of Oral & Maxillofacial Surgeons',
    url: 'https://www.aaoms.org/',
  },
  {
    body: (
      <>
        <Link href="https://www.aboms.org/" target="_blank">
          <Image
            src="/certs/org-aboms.webp"
            alt="American Board of Oral & Maxillofacial Surgeons"
            width={150}
            height={150}
          />
        </Link>
      </>
    ),
    src: '/certs/org-aboms.webp',
    title: 'American Board of Oral & Maxillofacial Surgeons',
    url: 'https://www.aboms.org/',
  },
  {
    body: (
      <>
        <Link href="https://www.ada.gov/" target="_blank">
          <Image src="/certs/org-ada-compliant.webp" alt="ADA Compliant" width={100} height={100} />
        </Link>
      </>
    ),
    src: '/certs/org-ada-compliant.webp',
    title: 'ADA Compliant',
    url: 'https://www.ada.gov/',
  },
  {
    body: (
      <>
        <Link href="https://www.ada.org/" target="_blank">
          <Image src="/certs/org-ada.webp" alt="American Dental Association" width={200} height={150} />
        </Link>
      </>
    ),
    src: '/certs/org-ada.webp',
    title: 'American Dental Association',
    url: 'https://www.ada.org/',
  },
];
