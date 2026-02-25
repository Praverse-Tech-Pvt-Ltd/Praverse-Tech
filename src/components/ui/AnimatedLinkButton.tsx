
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AnimatedLinkButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const AnimatedLinkButton = ({ children, className, href }: AnimatedLinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-[50px] w-[280px] items-center justify-center overflow-hidden rounded-[10px] border border-primary text-lg font-semibold text-primary transition-colors duration-300 ease-in-out",
        "hover:text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
    >
      <div className="absolute left-[-10px] top-0 -z-10 h-full w-0 skew-x-[15deg] bg-secondary transition-all duration-500 group-hover:w-[58%]"></div>
      <div className="absolute right-[-10px] top-0 -z-10 h-full w-0 skew-x-[15deg] bg-primary transition-all duration-500 group-hover:w-[58%]"></div>
      <span className="z-10 flex w-full items-center justify-center">
        {children}
      </span>
    </Link>
  );
};
