
import Image from 'next/image';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

const Callout = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("my-6 flex items-start rounded-md border border-l-4 p-4 bg-muted/50", className)}>
    <Info className="mr-4 h-5 w-5 mt-1 text-primary flex-shrink-0" />
    <div className="w-full">{children}</div>
  </div>
);

export const MdxComponents = {
  h1: ({ className, ...props }: ComponentProps<'h1'>) => (
    <h1 className={cn('mt-12 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} />
  ),
  h2: ({ className, ...props }: ComponentProps<'h2'>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<'h3'>) => (
    <h3 className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentProps<'p'>) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentProps<'ul'>) => (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps<'ol'>) => (
    <ol className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)} {...props} />
  ),
  code: ({ className, ...props }: ComponentProps<'code'>) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-code text-sm font-semibold',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentProps<'pre'>) => (
    <pre
      className={cn(
        'my-6 overflow-x-auto rounded-lg border bg-muted p-4 font-code text-sm',
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
};
