import Image from 'next/image';

import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

import { CardHeader, CardTitle, Card } from '@/components/ui/card';
import { CardImage } from '@/components/ui/card';

import { staff } from '@/lib/staff';

const MeetOurStaff = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16 space-y-8">
        <h1 className="text-3xl font-bold">Meet Our Staff</h1>
        <div className="flex flex-wrap w-full">
          {staff.staff.map((staffMember) => (
            <div key={staffMember.name} className="w-full md:w-1/2 lg:w-1/3 p-6">
              <Card>
                <CardImage src={staffMember.image} alt={staffMember.name} width={400} height={500} />
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2">
                    <span className="text-xl font-bold">{staffMember.name}</span>
                    <span className="text-sm text-gray-500">{staffMember.title}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>

        <p>{staff.description}</p>

        <div className="flex flex-wrap">
          {staff.photos.map((photo) => (
            <div key={photo} className="w-full md:w-1/2 p-2">
              <Image src={photo} alt="Staff Photo" width={800} height={500} className="rounded-md" />
            </div>
          ))}
        </div>

        <Locations />
      </div>
    </Layout>
  );
};

export default MeetOurStaff;
