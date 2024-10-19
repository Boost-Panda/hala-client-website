import Link from 'next/link';
import { memo } from 'react';

import { doctors } from '@/lib/doctors';

import { Card, CardFooter, CardHeader, CardImage, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

const MeetOurDoctors = memo(function MeetOurDoctors() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Doctors</h2>

      <div className="flex flex-wrap w-full">
        {doctors.map((doctor) => (
          <div key={doctor.name} className="w-full md:w-1/3 p-2 lg:p-6">
            <Card>
              <CardImage src={doctor.image} alt={doctor.name} width={400} height={500} />
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-bold">
                    {doctor.name}, {doctor.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="w-full">
                  <Link
                    className={buttonVariants({ variant: 'secondary', className: 'w-full !font-bold' })}
                    href={`/about/${doctor.slug}`}
                  >
                    See Profile
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
});

export default MeetOurDoctors;
