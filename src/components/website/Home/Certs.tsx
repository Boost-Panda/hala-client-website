import { memo } from 'react';

import { certs } from '@/lib/certs';

const Certs = memo(function Certs() {
  return (
    <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-12 md:gap-6 lg:gap-24">
      {certs.map((cert) => (
        <div key={cert.src}>{cert.body}</div>
      ))}
    </div>
  );
});

export default Certs;
