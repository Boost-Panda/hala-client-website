import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

const Insurance = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Financing Your Care</h1>
        <p className="mb-4">
          At Associated Oral & Maxillofacial Surgeons, we understand the importance of addressing your insurance needs
          with utmost care and efficiency. We recognize that navigating through insurance policies can often be a
          complex process, which is why our dedicated team works alongside you to ensure maximal reimbursement for
          covered procedures.
        </p>
        <p className="mb-4">
          Our staff members are well-trained and constantly updated on the latest developments in insurance regulations
          and requirements. Therefore, if you encounter any issues or have any questions during this process, please do
          not hesitate to reach out to us; we are here to assist you every step of the way.
        </p>
        <p className="mb-4">
          For your initial visit, we kindly request that you bring along your insurance information for a swift
          consultation and expedited reimbursement process. Rest assured that at Associated Oral & Maxillofacial
          Surgeons, our commitment lies not only in providing exceptional care but also in making sure your financial
          concerns are addressed effectively with regard to your insurance coverage.
        </p>
        <p className="mb-12">Please call us if you have any questions. See below for information about our offices.</p>
        <Locations />
      </div>
    </Layout>
  );
};

export default Insurance;
