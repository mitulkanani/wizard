import React from 'react';

import type { BackButtonProps } from '@/types';

import LeftArrow from '../Icon/LeftArrow';

const BackButton = ({ onClick, cta }: BackButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="flex flex-row items-center justify-center gap-2.5 text-sm font-bold text-lightGray-900"
    >
      <LeftArrow className="h-6 w-4" />
      {cta.label}
    </button>
  );
};

export default BackButton;
