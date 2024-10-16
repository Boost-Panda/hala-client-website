import Layout from '@/components/website/Layout';

import Locations from '@/components/website/Locations';

const AllLocations = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">All Locations</h1>
        <p className="mb-12">
          Our oral surgery practice is proud to serve in multiple locations. Click on the location nearest you to
          schedule an appointment.
        </p>
        <Locations />
      </div>
    </Layout>
  );
};

export default AllLocations;
