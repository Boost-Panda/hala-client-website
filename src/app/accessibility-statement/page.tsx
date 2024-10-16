import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

const AccessibilityStatement = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>
        <h2 className="text-2xl font-semibold mt-6 mb-4">General</h2>
        <p className="mb-4">
          Omaxdocs.com strives to ensure that its services are accessible to people with disabilities. Omaxdocs.com has
          invested a significant amount of resources to help ensure that its website is made easier to use and more
          accessible for people with disabilities, with the strong belief that every person has the right to live with
          dignity, equality, comfort and independence.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Accessibility on Omaxdocs.com</h2>
        <p className="mb-4">
          Omaxdocs.com makes available the UserWay Website Accessibility Widget that is powered by a dedicated
          accessibility server. The software allows Omaxdocs.com to improve its compliance with the Web Content
          Accessibility Guidelines (WCAG 2.0).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Enabling the Accessibility Menu</h2>
        <p className="mb-4">
          The accessibility menu on Omaxdocs.com can be enabled by clicking the accessibility menu icon that appears on
          the corner of the page. After triggering the accessibility menu, please wait a moment for the accessibility
          menu to load in its entirety.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Disclaimer</h2>
        <p className="mb-4">
          Omaxdocs.com continues its efforts to constantly improve the accessibility of its site and services in the
          belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for
          those of us with disabilities. Despite our efforts to make all pages and content on Omaxdocs.com fully
          accessible, some content may not have yet been fully adapted to the strictest accessibility standards.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Here For You</h2>
        <p className="mb-4">
          If you are experiencing difficulty with any content on Omaxdocs.com or require assistance with any part of our
          site, please contact us during normal business hours as detailed below and we will be happy to assist.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you wish to report an accessibility issue, have any questions or need assistance, please contact Customer
          Support as follows: Email:{' '}
          <a className="text-blue-500" href="mailto:frederickxrays@omaxdocs.com">
            frederickxrays@omaxdocs.com
          </a>
        </p>

        <Locations />
      </div>
    </Layout>
  );
};

export default AccessibilityStatement;
