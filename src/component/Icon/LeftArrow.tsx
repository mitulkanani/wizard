import React from 'react';

const LeftArrow = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 5.5L1 5.50001M1 5.50001L5.99753 10M1 5.50001L5.99753 1"
        stroke={color || '#33383C'}
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default LeftArrow;
