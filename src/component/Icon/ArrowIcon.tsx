import React from 'react';

type ArrowIconProps = {
  className?: string;
  color?: string;
};

const ArrowIcon = ({ className, color }: ArrowIconProps) => {
  return (
    <svg
      width="17"
      height="8"
      viewBox="0 0 17 8"
      fill="none"
      className={className}
    >
      <path
        d="M8.5 8L-6.99382e-07 -4.21161e-07L17 -1.90735e-06L8.5 8Z"
        fill={color || '#33383C'}
      />
    </svg>
  );
};

export default ArrowIcon;
