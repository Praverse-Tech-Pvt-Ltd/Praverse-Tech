
'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { getReactionForEvent, PravReaction, PravEvent } from './PravReactions';

export function usePravEvents() {
  const [lastEvent, setLastEvent] = useState<PravEvent | null>('WAKE');
  const [reaction, setReaction] = useState<PravReaction>('greet');
  const pathname = usePathname();

  const dispatchEvent = useCallback((event: PravEvent) => {
    setLastEvent(event);
    setReaction(getReactionForEvent(event));
  }, []);

  // Listen for route changes
  useEffect(() => {
    dispatchEvent('NAVIGATE_END');
  }, [pathname, dispatchEvent]);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50) {
        dispatchEvent('SCROLL_HALF');
        // Remove listener after firing once to avoid spamming
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatchEvent, pathname]); // Re-attach listener on page change

  // Listen for idle
  useEffect(() => {
    let idleTimeout: NodeJS.Timeout;

    const resetIdleTimer = () => {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => dispatchEvent('IDLE'), 30000);
    };

    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);
    
    resetIdleTimer(); // Initial setup

    return () => {
      clearTimeout(idleTimeout);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      window.removeEventListener('scroll', resetIdleTimer);
    };
  }, [dispatchEvent]);


  return { reaction, lastEvent, dispatchEvent };
}
