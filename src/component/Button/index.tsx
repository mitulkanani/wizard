import React from 'react';
import { twJoin } from 'tailwind-merge';

import type { ButtonType } from '@/types';

const Button = ({
  children,
  type,
  isSubscribeBtn,
  className,
  url,
  id,
  dataLabel,
  dataAction,
  dataCategory,
  trackingJson,
  destination,
  onClick,
  disable,
}: ButtonType) => {
  return (
    <>
      {destination ? (
        <a
          id={id}
          data-action={dataAction}
          data-label={dataLabel}
          data-category={dataCategory}
          {...trackingJson}
          href={`#${destination}`}
          className={twJoin(
            'inline-block text-sm font-bold px-6 md:px-10 py-3 md:py-4 rounded-md box-border tracking-paragraph leading-5 text-center',
            type === 'light' &&
              'bg-lightGray-200 border border-lightGray-200 text-lightGray-900 font-sans hover:bg-lightGray-50',
            type === 'dark' &&
              'text-white font-sans bg-lightGray-900 border border-lightGray-900 hover:bg-dark-300 hover:border-dark-300',
            type === 'outlined' &&
              'bg-transparent text-lightGray-900 border border-lightGray-900 font-sans',
            type === 'dark' &&
              isSubscribeBtn &&
              'bg-lightGray-800 text-white font-sans border border-lightGray-800 hover:bg-dark-300 hover:border-dark-300',
            type === 'link' &&
              'text-xs font-semibold leading-4 tracking-paragraph text-lightGray-900',
            className
          )}
          rel="noreferrer"
        >
          {children}
        </a>
      ) : (
        <>
          {url ? (
            <a
              id={id}
              data-action={dataAction}
              data-label={dataLabel}
              data-category={dataCategory}
              {...trackingJson}
              href={`${url}`}
              target="_blank"
              className={twJoin(
                'inline-block text-sm font-bold px-6 md:px-10 py-3 md:py-4 rounded-md box-border tracking-paragraph leading-5 text-center',
                type === 'light' &&
                  'bg-lightGray-200 border border-lightGray-200 text-lightGray-900 font-sans hover:bg-lightGray-50',
                type === 'dark' &&
                  'text-white font-sans bg-lightGray-900 border border-lightGray-900 hover:bg-dark-300 hover:border-dark-300',
                type === 'outlined' &&
                  'bg-transparent text-lightGray-900 border border-lightGray-900 font-sans',
                type === 'dark' &&
                  isSubscribeBtn &&
                  'bg-lightGray-800 text-white font-sans border border-lightGray-800 hover:bg-dark-300 hover:border-dark-300',
                type === 'link' &&
                  'text-xs font-semibold leading-4 tracking-paragraph text-lightGray-900',
                className
              )}
              rel="noreferrer"
            >
              {children}
            </a>
          ) : (
            <button
              onClick={onClick}
              disabled={disable}
              id={id}
              data-action={dataAction}
              data-label={dataLabel}
              data-category={dataCategory}
              {...trackingJson}
              className={twJoin(
                'text-sm font-bold px-6 md:px-10 py-3 md:py-4 rounded-md box-border tracking-paragraph leading-5',
                type === 'light' &&
                  'bg-lightGray-200 border border-lightGray-200 text-lightGray-900 font-sans hover:bg-lightGray-50',
                type === 'dark' &&
                  'text-white font-sans bg-lightGray-900 border border-lightGray-900 hover:bg-dark-300 hover:border-dark-300',
                type === 'outlined' &&
                  'bg-transparent text-lightGray-900 border border-lightGray-900 font-sans',
                type === 'dark' &&
                  isSubscribeBtn &&
                  'bg-lightGray-800 text-white font-sans border border-lightGray-800 hover:bg-dark-300 hover:border-dark-300',
                type === 'link' &&
                  'text-xs font-semibold leading-4 tracking-paragraph text-lightGray-900',
                className
              )}
            >
              {children}
            </button>
          )}
        </>
      )}
    </>
  );
};

export { Button };
