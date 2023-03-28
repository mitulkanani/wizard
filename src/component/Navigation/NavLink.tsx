import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';
import { twJoin } from 'tailwind-merge';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  id?: string;
  dataAction?: string;
  dataLabel?: string;
  dataCategory?: string;
  trackingJson?: object;
};

const NavLink = ({
  href,
  children,
  className = '',
  id,
  dataAction,
  dataLabel,
  dataCategory,
  trackingJson,
}: NavLinkProps) => {
  return (
    <Link
      data-action={dataAction}
      data-label={dataLabel || children}
      data-category={dataCategory}
      {...trackingJson}
      id={id}
      passHref
      href={href}
      className={twJoin(
        'border-none font-sans font-normal leading-5 text-sm text-dark-100',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
