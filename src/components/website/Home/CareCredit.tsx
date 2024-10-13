import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

import { companyInfo } from '@/lib/companyInfo';

const CareCredit = memo(() => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">FINANCING YOUR CARE</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        At Associated Oral & Maxillofacial Surgeons, we make every effort to provide you with the finest care and the
        most convenient financial options. To accomplish this, we work hand-in-hand with you to maximize your insurance
        reimbursement for covered procedures.
      </p>
      <Image src="/logos/carecredit.webp" alt="Care Credit" width={300} height={200} />
      <Link className={buttonVariants({ size: 'lg', className: 'mt-10' })} href={`tel:${companyInfo.phone}`}>
        Call Us
      </Link>
    </div>
  );
});

CareCredit.displayName = 'CareCredit';

export default CareCredit;
