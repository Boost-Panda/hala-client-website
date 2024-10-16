import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">
          We are committed to protecting your privacy and developing technology that gives you the most powerful and
          safe online experience. This Statement of Privacy applies to our Web site and governs data collection and
          usage. By using this website, you consent to the data practices described in this statement.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Collection of your Personal Information</h2>
        <p className="mb-4">
          We collect personally identifiable information, such as your e-mail address, name, home or work address or
          telephone number. We also collect anonymous demographic information, which is not unique to you, such as your
          ZIP code, age, gender, preferences, interests and favorites.
        </p>
        <p className="mb-4">
          There is also information about your computer hardware and software that is automatically collected by this
          website. This information can include: your IP address, browser type, domain names, access times and referring
          Web site addresses. This information is used for the operation of the service, to maintain quality of the
          service, and to provide general statistics regarding use of this Web site.
        </p>
        <p className="mb-4">
          We encourage you to review the privacy statements of Web sites you choose to link to from the website so that
          you can understand how those Web sites collect, use and share your information. We are not responsible for the
          privacy statements or other content on any other Web sites.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Use of your Personal Information</h2>
        <p className="mb-4">
          We collect and use your personal information to operate the Web site and deliver the services you have
          requested. We may also use your personally identifiable information to inform you of other products or
          services available from our affiliates and us. We may also contact you via surveys to conduct research about
          your opinion of current services or of potential new services that may be offered.
        </p>
        <p className="mb-4">
          We do not sell, rent or lease its customer lists to third parties. We may, from time to time, share data with
          trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer
          support, or arrange for deliveries. All such third parties are prohibited from using your personal information
          except to provide these services and they are required to maintain the confidentiality of your information.
        </p>
        <p className="mb-4">
          We do not use or disclose sensitive personal information, such as race, religion, or political affiliations,
          without your explicit consent.
        </p>
        <p className="mb-4">
          We will disclose your personal information, without notice, only if required to do so by law or in the good
          faith belief that such action is necessary.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Cookies</h2>
        <p className="mb-4">
          This Web site uses &quot;cookies&quot; to personalize your online experience. A cookie is a text file that is
          placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to
          your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that
          issued the cookie to you.
        </p>
        <p className="mb-4">
          One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a
          cookie is to tell the Web server that you have returned to a specific page.
        </p>
        <p className="mb-4">
          You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can
          usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you
          may not be able to fully experience the interactive features of the Web site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Security of your Personal Information</h2>
        <p className="mb-4">
          This Web site secures your personal information from unauthorized access, use or disclosure. This Web site
          secures the personally identifiable information you provide on computer servers in a controlled, secure
          environment, protected from unauthorized access, use or disclosure. When personal information (such as a
          credit card number) is transmitted to other Web sites, it is protected through the use of encryption, such as
          the Secure Socket Layer (SSL) protocol.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to this Statement</h2>
        <p className="mb-4">
          We will occasionally update this Statement of Privacy to reflect company and customer feedback. We encourage
          you to periodically review this Statement to be informed of how we are protecting your information.
        </p>

        <Locations />
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
