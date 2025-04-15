'use client';

import { useEffect, useState, useCallback } from 'react';

export function ChatWidget({ orgId }: { orgId: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to handle messages from the iframe
  const handleMessage = useCallback((event: MessageEvent) => {
    // Check if the message is from our chat iframe
    if (event.data && typeof event.data === 'object') {
      // Check for chat state messages
      if (event.data.type === 'chatState') {
        setIsChatOpen(event.data.isOpen);
      }
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add message event listener to listen for iframe messages
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  // Effect to control body scroll when chat is open on mobile
  useEffect(() => {
    console.log('isMobile', isMobile);
    console.log('isChatOpen', isChatOpen);
    if (isMobile && isChatOpen) {
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup: ensure scrolling is re-enabled when component unmounts
      document.body.style.overflow = '';
    };
  }, [isMobile, isChatOpen]);

  return (
    <div
      className="fixed bottom-0 right-0"
      style={{
        width: isChatOpen ? (isMobile ? '100%' : '27rem') : isMobile ? '100%' : '22rem',
        height: isChatOpen ? (isMobile ? '100%' : '38rem') : '10rem',
        zIndex: 1000,
      }}
    >
      <iframe
        src={`https://pandy-bot.vercel.app?orgId=${orgId}&deviceType=${isMobile ? 'mobile' : 'desktop'}`}
        // src={`http://localhost:3003?orgId=${orgId}&deviceType=${isMobile ? 'mobile' : 'desktop'}`}
        width="100%"
        height="100%"
        style={{ border: 'none', background: 'transparent' }}
        id="myIframe"
      />
    </div>
  );
}
