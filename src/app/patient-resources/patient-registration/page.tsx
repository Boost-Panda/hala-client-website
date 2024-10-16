import Layout from '@/components/website/Layout';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Locations from '@/components/website/Locations';

import { locations } from '@/lib/locations';

const PatientRegistration = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Patient Registration</h1>
        <p className="mb-4">
          You may pre-register with our office by utilizing the convenience of our secure online Patient Registration
          Form. This user-friendly form ensures your data remains safeguarded throughout the process. Once you have
          diligently filled out all necessary fields, kindly press the Submit button positioned at the bottom to
          seamlessly share your information with us.
        </p>
        <p className="mb-4">
          Rest assured that upon your first visit to our office, we will already have your completed form readily
          available for your signature, saving you valuable time and effort. At our practice, we prioritize protecting
          the security and privacy of every patient’s personal data as if it were our own. Hence, we have implemented
          stringent measures to ensure its complete confidentiality.
        </p>
        <div className="flex gap-4 mb-4 flex-wrap">
          {locations.map((location) => (
            <Link
              className={buttonVariants({ className: 'w-full md:w-auto' })}
              href={location.registrationForm || ''}
              key={location.name}
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

export default PatientRegistration;
