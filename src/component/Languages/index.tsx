import React, { useRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import useOutsideAlerter from '@/function/useOutsideAlerter';
import type { LanguagesProps } from '@/types';

import ArrowIcon from '../Icon/ArrowIcon';

const Languages = ({
  languages,
  languageID,
  setLanguageID,
}: LanguagesProps) => {
  const [openLanguages, setOpenLanguages] = useState(false);

  const languageRef = useRef(null);

  useOutsideAlerter(languageRef, () => {
    setOpenLanguages(false);
  });

  return (
    <>
      <div className="relative" ref={languageRef}>
        {languages &&
          languages.length > 0 &&
          languages.map(({ id, code }, index) => (
            <div
              key={id}
              className={twJoin(
                'cursor-pointer',
                index === languageID ? '' : 'hidden'
              )}
              onClick={() => {
                setLanguageID(index);
                setOpenLanguages(!openLanguages);
              }}
            >
              <div className="flex items-center justify-center rounded-full border p-2 font-sans text-sm font-bold text-lightGray-900">
                {/* {flag && ( */}
                <img
                  src="../assets/images/united-states-of-america.png"
                  alt=""
                  loading="lazy"
                />
                {/* )} */}
                <span className="mx-1">{code}</span>
                <ArrowIcon className="h-1 w-2.5" />
              </div>
            </div>
          ))}
        <div
          className={twJoin(
            'absolute rounded-lg flex flex-col border bg-white mt-3 px-1 min-w-max z-40',
            openLanguages ? '' : 'hidden'
          )}
        >
          {languages &&
            languages.length > 0 &&
            languages.map(({ id, language }, index) => (
              <div
                className="cursor-pointer"
                key={id}
                onClick={() => {
                  setLanguageID(index);
                  setOpenLanguages(false);
                }}
              >
                <div className="flex items-center gap-1 rounded-full p-2 font-sans text-sm font-bold text-lightGray-900">
                  <img
                    src="../assets/images/united-states-of-america.png"
                    alt=""
                    loading="lazy"
                  />
                  <span className="mx-1">{language}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
