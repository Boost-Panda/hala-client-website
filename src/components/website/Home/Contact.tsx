import { memo } from 'react';
import { companyInfo } from '@/lib/companyInfo';

const Contact = memo(function Contact() {
  return (
    <div>
      <iframe src={companyInfo.contactForm} width="100%" height="700rem" id="myIframe"></iframe>
    </div>
  );
});

export default Contact;
