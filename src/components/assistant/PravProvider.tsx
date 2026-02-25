
'use client';

import React, { createContext, useContext, useState } from 'react';
import { PravDock } from './PravDock';
import { PravPanel } from './PravPanel';
import { usePravEvents } from './usePravEvents';
import { PravReaction } from './PravReactions';

interface PravContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reaction: PravReaction;
  lastEvent: string | null;
}

const PravContext = createContext<PravContextType | null>(null);

export function usePrav() {
  const context = useContext(PravContext);
  if (!context) {
    throw new Error('usePrav must be used within a PravProvider');
  }
  return context;
}

export function PravProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { reaction, lastEvent } = usePravEvents();
  
  // For now, we are not using feature flags from Remote Config, but this is where you would.
  const isPravEnabled = true;

  if (!isPravEnabled) {
    return <>{children}</>;
  }

  const value = {
    isOpen,
    setIsOpen,
    reaction,
    lastEvent,
  };

  return (
    <PravContext.Provider value={value}>
      {children}
      <PravDock />
      <PravPanel />
    </PravContext.Provider>
  );
}
