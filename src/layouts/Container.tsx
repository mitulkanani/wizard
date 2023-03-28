import type { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twJoin(
        'mx-auto w-full max-w-screen-xl py-0 md:py-5 text-xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
