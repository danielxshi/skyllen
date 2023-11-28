import Link, { LinkProps } from 'next/link';
import React from 'react';

export const WorkContainer: React.FC<{ children: any }> = ({
  children,
}: any) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
      {children}
    </div>
  );
};

export const WorkBackground: React.FC = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky'>
      {/* <div className='bg-black h-[30vh] lg:h-auto'></div> */}
      <div className='bg-black h-[70vh] lg:min-h-screen'></div>
    </div>
  );
};

export const WorkBleed: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
<<<<<<< HEAD
      className='h-screen absolute flex flex-col items-center justify-center text-3xl lg:text-3xl '
=======
      className='h-screen absolute flex flex-col items-center justify-center text-3xl lg:text-3xl md:right-0 md:w-screen-1/2'
>>>>>>> parent of 8c2fe7e (Updating company pillars card)
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className='leading-10 work-bleed-child-container'>{children}</div>
    </div>
  );
};

export const WorkContain: React.FC<{
  children: React.ReactNode;
  progress: number;
}> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 40);
  return (
    <div
      className='flex flex-1 lg:items-center justify-center h-screen'
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className='h-3/6 justify-between flex flex-col	w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0'>
        {children}
      </div>
    </div>
  );
};


export const WorkLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Link
    href={href}
    target='_blank'
    rel='noreferrer'
    className='underline underline-offset-8 decoration-1'
  >
    {children}
  </Link>
);
