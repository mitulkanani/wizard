import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import { Button } from '@/component/Button';
import Close from '@/component/Icon/Close';
import Menu from '@/component/Icon/Menu';
import Languages from '@/component/Languages';
import NavLink from '@/component/Navigation/NavLink';

import { STICKY } from '../const';
import type { HeaderProps } from '../types';
import Container from './Container';

const Header = ({
  navlink,
  buttons,
  logo,
  languages,
  classes,
  isSticky,
}: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [languageID, setLanguageID] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (openMenu) {
        document.body.classList.add('lg:overflow-auto', 'overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }, [openMenu]);

  return (
    <>
      <div
        style={{ boxShadow: '0px 20px 25px rgba(218, 218, 218, 0.1)' }}
        className={twJoin(
          'flex h-23 items-center bg-white px-6 xl:px-0',
          isSticky === STICKY ? 'sticky top-0 z-50' : '',
          classes?.main
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-full lg:hidden">
              <button onClick={() => setOpenMenu(true)}>
                <Menu />
              </button>
            </div>
            <ul className="hidden w-full flex-col flex-wrap text-xl lg:flex lg:w-auto lg:flex-row xl:w-full">
              {navlink &&
                navlink.length > 0 &&
                navlink.map(
                  (
                    {
                      id,
                      label,
                      href,
                      ref_id,
                      dataAction,
                      dataLabel,
                      dataCategory,
                      trackingJson,
                    },
                    index
                  ) => (
                    <li key={id} className="mr-6">
                      <NavLink
                        href={href || ''}
                        className={classes?.navLink}
                        id={ref_id || `nav_link_${index}`}
                        dataAction={dataAction}
                        dataLabel={dataLabel || label}
                        dataCategory={dataCategory}
                        trackingJson={trackingJson}
                      >
                        {label}
                      </NavLink>
                    </li>
                  )
                )}
            </ul>

            {logo?.image && (
              <div className="flex w-full cursor-pointer items-center justify-center lg:w-auto xl:w-full">
                {/* <Link
                  href={`${logo?.url || router.asPath}`}
                  id={logo?.ref_id || 'header_logo'}
                  data-action={logo?.dataAction}
                > */}
                <img src="../assets/images/Logo.png" alt="" loading="lazy" />
                {/* </Link> */}
              </div>
            )}

            <div className="flex w-full items-center justify-end lg:w-auto xl:w-full">
              <div className="mr-9 hidden lg:flex">
                <Languages
                  languages={languages}
                  setLanguageID={setLanguageID}
                  languageID={languageID}
                />
              </div>

              <div className="hidden flex-row items-center justify-center gap-2 lg:flex">
                {buttons &&
                  buttons.length > 0 &&
                  buttons.map(
                    (
                      {
                        id,
                        label,
                        type,
                        ref_id,
                        url,
                        dataAction,
                        dataLabel,
                        dataCategory,
                        trackingJson,
                        destination,
                      },
                      i
                    ) => (
                      <Button
                        key={id}
                        type={type}
                        className={classes?.button}
                        url={url}
                        id={ref_id || `nav_button_${i}`}
                        dataLabel={dataLabel || label || 'Nav CTA'}
                        dataAction={dataAction}
                        dataCategory={dataCategory}
                        trackingJson={trackingJson}
                        destination={destination}
                      >
                        {label}
                      </Button>
                    )
                  )}
              </div>
              <div className="flex-row items-center justify-center lg:hidden">
                {buttons &&
                  buttons.length > 0 &&
                  buttons
                    .slice(1, 2)
                    .map(
                      (
                        {
                          id,
                          label,
                          type,
                          ref_id,
                          url,
                          dataAction,
                          dataLabel,
                          dataCategory,
                          trackingJson,
                          destination,
                        },
                        idx
                      ) => (
                        <Button
                          key={id}
                          type={type}
                          url={url}
                          className={classes?.button}
                          id={ref_id || `nav_button_${idx}`}
                          dataLabel={dataLabel || label || 'Nav CTA'}
                          dataAction={dataAction}
                          dataCategory={dataCategory}
                          trackingJson={trackingJson}
                          destination={destination}
                        >
                          {label}
                        </Button>
                      )
                    )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}

      {openMenu && (
        <div className="menuAnimation fixed top-0 z-50 h-screen w-full overflow-y-auto bg-white p-6 lg:hidden">
          <div className="mb-1">
            <button onClick={() => setOpenMenu(false)}>
              <Close />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-11">
            <div className="flex w-full items-center justify-center">
              {logo?.image && (
                <Link
                  href={`${logo?.url || router.asPath}`}
                  id={logo?.ref_id || 'mobile_slider_logo'}
                  data-action={logo?.dataAction}
                >
                  <img src="" alt="" loading="lazy" />
                </Link>
              )}
            </div>
            <div>
              <ul className="flex w-full flex-col flex-wrap items-center justify-center gap-[26px] ">
                {navlink &&
                  navlink.length > 0 &&
                  navlink.map(
                    (
                      {
                        id,
                        label,
                        href,
                        ref_id,
                        dataAction,
                        dataLabel,
                        dataCategory,
                        trackingJson,
                      },
                      navLinkIndex
                    ) => (
                      <li key={id}>
                        <NavLink
                          id={ref_id || `menu_link_${navLinkIndex}`}
                          href={href || ''}
                          className="text-center text-subHeadline font-normal"
                          dataAction={dataAction}
                          dataLabel={dataLabel || label}
                          dataCategory={dataCategory}
                          trackingJson={trackingJson}
                        >
                          {label}
                        </NavLink>
                      </li>
                    )
                  )}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <div>
                <Languages
                  languages={languages}
                  setLanguageID={setLanguageID}
                  languageID={languageID}
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-5">
                {buttons &&
                  buttons.length > 0 &&
                  buttons.map(
                    (
                      {
                        id,
                        label,
                        type,
                        ref_id,
                        url,
                        dataAction,
                        dataLabel,
                        dataCategory,
                        trackingJson,
                        destination,
                      },
                      buttonIndex
                    ) => (
                      <Button
                        key={id}
                        type={type}
                        className={twJoin(
                          'w-full text-center',
                          classes?.button
                        )}
                        url={url}
                        id={ref_id || `menu_button_${buttonIndex}`}
                        dataLabel={dataLabel || label || 'Nav CTA'}
                        dataAction={dataAction}
                        dataCategory={dataCategory}
                        trackingJson={trackingJson}
                        destination={destination}
                      >
                        {label}
                      </Button>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
