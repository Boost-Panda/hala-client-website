import { buttonVariants } from '@/components/ui/button';
import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

import { locations } from '@/lib/locations';
import Link from 'next/link';

const ReferralForms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Referral Forms</h1>
        <p className="mb-8">
          You may refer patients to our office by filling out our secure online Referral Form. After you have completed
          the form, please make sure to press the Submit button at the bottom to automatically send us your information.
          The security and privacy of patient data is one of our primary concerns and we have taken every precaution to
          protect it.
        </p>
        <div className="flex gap-4 mb-8 flex-wrap">
          {locations.map((location) => (
            <Link
              href={location.referralForm || ''}
              key={location.name}
              className={buttonVariants({ className: 'w-full md:w-auto' })}
              target="_blank"
            >
              {location.name}
            </Link>
          ))}
        </div>
        <p className="mb-12">
          If you have any questions or concerns, please do not hesitate to contact us at any of our three locations. We
          are more than happy to assist you in any way possible.
        </p>

        <Locations />
      </div>
    </Layout>
  );
};

export default ReferralForms;
