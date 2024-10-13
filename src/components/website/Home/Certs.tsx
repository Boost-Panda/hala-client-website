import { memo } from 'react';

import { certs } from '@/lib/certs';

const Certs = memo(function Certs() {
  return (
    <div className="flex justify-center items-center gap-24">
      {certs.map((cert) => (
        <div key={cert.src}>{cert.body}</div>
      ))}
    </div>
  );
});

export default Certs;
