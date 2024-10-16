import { buttonVariants } from '@/components/ui/button';
import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';
import Link from 'next/link';

const Introduction = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">About Our Practice</h1>
        <p className="mb-4">
          Welcome to our dental practice, where we specialize in oral and maxillofacial surgery. At Associated Oral and
          Maxillofacial Surgeons, we pride ourselves on providing exceptional care that goes beyond the ordinary. Our
          team of highly skilled doctors has undergone extensive training in hospital-based surgical and anesthesia
          procedures, ensuring that you receive the highest level of expertise available. With a full scope of services
          ranging from dental implant surgery to wisdom tooth removal, we are equipped to handle any issue relating to
          the mouth, teeth, and facial regions.
        </p>
        <p className="mb-4">
          But what sets us apart is our commitment to utilizing cutting-edge techniques that minimize surgical
          intervention and prioritize your comfort throughout the process. Not only do we excel at diagnosing and
          treating conditions such as facial pain, injuries, and fractures, but our dedicated staff is also trained in
          administering Intravenous (IV) sedation or outpatient general anesthesia in our state-of-the-art office
          setting. Your safety is always paramount to us, which is why patients are continuously monitored during both
          the procedure itself and their recovery period afterward.
        </p>
        <h2 className="text-2xl font-bold mb-4">Surgical Staff</h2>
        <p className="mb-4">
          The surgical staff at Associated Oral & Maxillofacial Surgeons prides itself on maintaining a team of highly
          skilled professionals who possess an impressive level of expertise and qualifications. Our certified oral and
          maxillofacial surgical assistants play a crucial role in assisting our surgeons during procedures, ensuring
          that patients receive the highest quality care possible. Additionally, our registered nurses bring their
          extensive medical knowledge to the table, aiding in the administration of IV anesthesia and providing support
          throughout surgeries. To further enhance patient safety, all our staff members are not only well-informed
          administrative personnel but also possess a deep understanding of health and insurance policies. Moreover,
          each member is CPR-certified and prepared to handle any unforeseen emergencies with utmost proficiency and
          confidence. At Associated Oral & Maxillofacial Surgeons, we prioritize excellence in every aspect of patient
          care through the dedication and professionalism exhibited by our exceptional surgical staff.
        </p>
        <Link href="/about/meet-our-staff" className={buttonVariants({})}>
          Meet Our Staff
        </Link>
        <Locations />
      </div>
    </Layout>
  );
};

export default Introduction;
