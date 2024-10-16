import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">
          The Notice of Privacy Practices form contains important information about how we handle your personal data. It
          is a summary required by federal law that explains our privacy practices to ensure transparency and protect
          your privacy rights as our valued patient.
        </p>
        <a
          href="/pdfs/SUMMARY-OF-PRIVACY-PRACTICES-JUNE-2013.pdf"
          download
          className="text-blue-500 hover:text-blue-600 mb-12 block"
        >
          Click here to read the Notice of Privacy Practices
        </a>
        <Locations />
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
