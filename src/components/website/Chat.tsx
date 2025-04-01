'use client';

import { useEffect, useState } from 'react';

export function ChatWidget({ orgId }: { orgId: string }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="fixed bottom-0 right-0"
      style={{
        width: isMobile ? '100%' : '27rem',
        height: isMobile ? '100%' : '38rem',
        zIndex: 1000,
      }}
    >
      <iframe
        src={`http://localhost:3003?orgId=${orgId}&deviceType=${isMobile ? 'mobile' : 'desktop'}`}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        id="myIframe"
      />
    </div>
  );
}
