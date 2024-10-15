export type Doctor = {
  slug: string;
  name: string;
  image: string;
  title: string;
  about: React.ReactNode;
};

export const doctors: Doctor[] = [
  {
    slug: 'dr-chaudhary',
    name: 'Nahla Chaudhary',
    image: '/doctors/nahla-chaudhary.webp',
    title: 'DDS',
    about: (
      <>
        <p>
          Dr. Chaudhary has a diverse background. She is of Pakistani/Indian descent and was born and raised in the
          United Arab Emirates in the Middle East. She relocated to New York, NY, for her higher education.
        </p>
        <p>
          Dr. Chaudhary obtained her DDS degree from the New York University College of Dentistry in 2003. She then went
          on to complete a general practice residency for one year in Connecticut. This was followed by a one-year
          fellowship in oral and maxillofacial surgery at Columbia University, New York, NY.
        </p>
        <p>
          Dr. Chaudhary then completed her oral and maxillofacial surgery residency at Lincoln Medical Center in New
          York City in 2009.
        </p>
        <p>
          Upon completion of her residency, she joined the staff of Associated Oral & Maxillofacial Surgeons in
          Martinsburg, WV, and Hagerstown, MD. She is on staff at West Virginia University East Hospital and Frederick
          Memorial Hospital in Maryland and the VA Medical Center in Martinsburg, WV.
        </p>
        <p>
          Dr. Chaudhary is a member of the United States Army Reserves and is assigned to a Combat Support Hospital
          Unit.
        </p>
        <p>
          Dr. Chaudhary is a member of the Middle Atlantic Society of Oral and Maxillofacial Surgeons, the Maryland
          Society of Oral and Maxillofacial Surgeons, the American Association of Oral and Maxillofacial Surgeons, the
          ADA, and the Eastern Panhandle Dental Society. She is board-certified by the American Board of Oral and
          Maxillofacial Surgery.
        </p>
        <p>
          She is multi-lingual, speaking fluent Hindi, Urdu, Punjabi, and Spanish. In her free time, she enjoys outdoor
          activities.
        </p>
        <p>
          Dr. Chaudhary practices a full range of oral and maxillofacial surgery and is licensed to practice in the
          States of West Virginia, Maryland, and New York.
        </p>
      </>
    ),
  },
  {
    slug: 'dr-nelson',
    name: 'Howard L. Nelson',
    image: '/doctors/howard-nelson.webp',
    title: 'DDS',
    about: (
      <>
        <p>
          Dr. Nelson was born and raised in Santa Cruz, Jamaica, and completed his undergraduate education at the
          University of the West Indies in Mona, Kingston, Jamaica. He then attended Howard University College of
          Dentistry in Washington, D.C., where he was inducted into the National Dental Honor Society Omicron Kappa
          Upsilon.
        </p>
        <p>
          Upon graduation from dental school, Dr. Nelson completed his oral and maxillofacial surgery training at Howard
          University Hospital and its affiliates. He remained on staff at Howard University Hospital for a year after
          completing his residency and was involved with teaching and supervising the oral and maxillofacial surgery
          residents.
        </p>
        <p>
          Dr. Nelson performed surgery in a multi-group practice in the Baltimore area for two years before joining
          Associated Oral & Maxillofacial Surgeons.
        </p>
        <p>
          Dr. Nelson is a member of MSDA and MASOMS and is board-certified by the American Board of Oral and
          Maxillofacial Surgery. He is licensed to practice oral and maxillofacial surgery in Washington, D.C.,
          Maryland, Pennsylvania, and West Virginia.
        </p>
        <p>
          Dr. Nelson is on staff at West Virginia University East Hospital and Frederick Memorial Hospital in Maryland
          and the VA Medical Center in Martinsburg, WV.
        </p>
        <p>
          Dr. Nelson practices a full range of oral and maxillofacial surgery with a keen interest in the following:
        </p>
        <ul className="list-disc list-inside">
          <li>Endosseous implants</li>
          <li>Facial trauma</li>
          <li>Facial reconstruction</li>
          <li>Dentoalveolar procedures</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'dr-haddad',
    name: 'Jay I. Haddad',
    image: '/doctors/jay-haddad.webp',
    title: 'DDS',
    about: (
      <>
        <p>
          Dr. Haddad graduated in 1987 from the University of Texas Health Science Center Dental Branch. Upon
          graduation, he was commissioned as an officer in the US Army and completed the Advanced General Dentistry
          Program.
        </p>
        <p>
          For the next 8 years, Dr. Haddad practiced general dentistry and earned his Fellowship of the Academy of
          General Dentistry in 1995. He then pursued the field he truly loved the most, Oral and Maxillofacial Surgery.
          Dr. Haddad completed his residency in 2001 at Tripler Army Medical Center in Hawaii. He also attained board
          certification in Oral and Maxillofacial Surgery and Dental Anesthesiology.
        </p>
        <p>
          After his residency, Dr. Haddad was assigned to Walter Reed Army Medical Center in Washington D.C. He spent
          the rest of his time in the military as a mentor in the Oral and Maxillofacial Surgery Program. He has treated
          hundreds of soldiers, many of whom had extensive and complex facial trauma. Upon his completion of 20 years of
          military service, Dr. Haddad decided to pursue civilian practice. He was honored to receive the &quot;Educator
          of the Year&quot; award before he transitioned to civilian life.
        </p>
        <p>
          Dr. Haddad practiced with Associated Oral & Maxillofacial Surgeons for one year then built his private
          practice in Howard County. After thirteen years in private practice, Dr. Haddad sold his practice and decided
          to return to work with Associated Oral & Maxillofacial Surgeons.
        </p>
        <p>
          Dr. Haddad&apos;s passion for education was exemplified by earning two master&apos;s degrees (Health
          Administration and Financial Planning) during his time in private practice.
        </p>
      </>
    ),
  },
];
