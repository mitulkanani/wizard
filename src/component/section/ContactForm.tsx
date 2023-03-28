import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { twJoin } from 'tailwind-merge';

import {
  CENTER,
  FORM_POSITION_LEFT,
  FORM_POSITION_RIGHT,
  WIZARDOPTION,
} from '@/const';

import Container from '../../layouts/Container';
import type { ContactFormProps, WizardItemProps } from '../../types';
import { Button } from '../Button';

const ContactForm = ({
  formTitle,
  formDescription,
  formPosition,
  title,
  description,
  fields,
  cta,
  otherLink,
  termsText,
  classes,
  client,
  isDetailsSection,
  backgroundColor,
  formBackgroundColor,
  inputBackgroundColor,
  sectionID,
  isBgImage,
  setWizardSectionType,
}: ContactFormProps & WizardItemProps) => {
  const router = useRouter();

  return (
    <>
      <div
        id={sectionID}
        className={twJoin(
          'py-7 lg:py-14 bg-lightGray-500 bg-repeat-x',
          classes?.main
        )}
        style={{
          backgroundColor: backgroundColor || undefined,
          backgroundImage: isBgImage ? 'url(/assets/images/contactbg.svg)' : '',
        }}
      >
        <Container>
          <div
            className={twJoin(
              'flex flex-col px-5 xl:px-0',
              isDetailsSection
                ? 'justify-between lg:items-start items-center gap-12 lg:gap-5 xl:gap-28'
                : 'justify-center items-center',
              formPosition === FORM_POSITION_LEFT && 'lg:flex-row',
              formPosition === FORM_POSITION_RIGHT && 'lg:flex-row-reverse',
              formPosition === CENTER &&
                'lg:flex-col lg:items-center gap-12 lg:gap-5 xl:gap-5'
            )}
          >
            <div
              className={twJoin(
                'w-full max-w-[600px] md:p-14 rounded-xl',
                classes?.formMain
              )}
              style={{
                backgroundColor: formBackgroundColor || undefined,
              }}
            >
              <div className="flex flex-col justify-center gap-2.5">
                {formTitle && (
                  <h2
                    className={twJoin(
                      'text-center text-mobileSubHeading font-bold leading-12 tracking-heading text-lightGray-900 lg:text-4xl',
                      classes?.title
                    )}
                  >
                    {formTitle}
                  </h2>
                )}

                {formDescription && (
                  <div className="mb-7">
                    <p
                      className={twJoin(
                        'text-center text-base font-normal leading-7.2 tracking-paragraph text-lightGray-900',
                        classes?.description
                      )}
                    >
                      {formDescription}
                    </p>
                  </div>
                )}

                <div className="mb-3 grid grid-cols-1 gap-y-6 gap-x-5 py-0.5 md:grid-cols-2 md:gap-y-4">
                  {fields &&
                    fields.length > 0 &&
                    fields.map(({ id, label, placeholder, ref_id }, index) => (
                      <div
                        className="flex flex-col justify-center gap-2.5"
                        key={id}
                      >
                        <label
                          htmlFor={ref_id || `input_${index}`}
                          className={twJoin(
                            'text-xs font-normal leading-[14px] tracking-heading text-lightGray-900',
                            classes?.label
                          )}
                        >
                          {label}
                        </label>
                        <input
                          id={ref_id || `input_${index}`}
                          type="text"
                          placeholder={placeholder}
                          className={twJoin(
                            'rounded-lg bg-lightGray-500 py-3.5 px-5 text-sm font-normal leading-5 tracking-heading text-lightGray-900 outline-none',
                            classes?.input
                          )}
                          style={{
                            backgroundColor: inputBackgroundColor || undefined,
                          }}
                        />
                      </div>
                    ))}
                </div>

                {termsText && (
                  <div className="mb-3 flex flex-row items-start justify-start gap-3 py-0.5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="mt-1 cursor-pointer"
                    />
                    <label
                      htmlFor="terms"
                      className={twJoin(
                        'text-left text-sm font-normal cursor-pointer leading-snug tracking-paragraph text-lightGray-900',
                        classes?.termsText
                      )}
                    >
                      <ReactMarkdown>{termsText}</ReactMarkdown>
                    </label>
                  </div>
                )}

                <div
                  className={twJoin(
                    'flex w-full flex-col items-center  gap-6 pl-0 md:flex-row md:pl-6 xl:gap-9',
                    otherLink ? 'justify-start' : 'justify-center'
                  )}
                >
                  {cta && (
                    <div className="w-full md:w-auto">
                      <Button
                        dataAction={cta?.dataAction}
                        dataLabel={cta?.dataLabel || cta?.label}
                        dataCategory={cta?.dataCategory}
                        trackingJson={cta?.trackingJson}
                        destination={cta?.destination}
                        id={
                          cta?.ref_id ||
                          `contact_form_${cta?.label?.toLowerCase()}`
                        }
                        type={cta.type}
                        url={cta.url}
                        onClick={() => {
                          setWizardSectionType(WIZARDOPTION);
                        }}
                        className={twJoin('w-full md:w-auto', classes?.button)}
                      >
                        {cta.label}
                      </Button>
                    </div>
                  )}

                  {otherLink && (
                    <div>
                      <div
                        className={twJoin(
                          'text-sm leading-5 tracking-heading text-lightGray-900',
                          classes?.otherLink
                        )}
                      >
                        <ReactMarkdown>{otherLink}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {isDetailsSection && (
              <div className="w-full max-w-[600px] py-0 lg:py-14">
                <div
                  className={twJoin(
                    'flex flex-col items-center justify-center gap-6 lg:items-start',
                    formPosition === CENTER && 'lg:items-center'
                  )}
                >
                  {title && (
                    <h2
                      className={twJoin(
                        'text-center text-mobileSubHeading font-bold leading-12 tracking-heading text-lightGray-900 lg:text-4xl',
                        formPosition === FORM_POSITION_LEFT && 'lg:text-left',
                        formPosition === FORM_POSITION_RIGHT && 'lg:text-left'
                      )}
                    >
                      {title}
                    </h2>
                  )}

                  {description && (
                    <div
                      className={twJoin(
                        'text-center text-base font-normal leading-7.2 tracking-paragraph text-lightGray-900',
                        formPosition === FORM_POSITION_LEFT && 'lg:text-left',
                        formPosition === FORM_POSITION_RIGHT && 'lg:text-left'
                      )}
                    >
                      <ReactMarkdown>{description}</ReactMarkdown>
                    </div>
                  )}

                  <div className="mt-6 grid w-auto max-w-xs grid-cols-2 items-center gap-y-1 gap-x-5">
                    {client &&
                      client.length &&
                      client.map(({ id, logo, isUrl, url }) => (
                        <div key={id}>
                          {logo && (
                            <>
                              {isUrl ? (
                                <Link
                                  className="inline-block w-auto"
                                  href={`${url || router.asPath}`}
                                >
                                  <img
                                    className="w-auto cursor-pointer"
                                    src=""
                                    alt=""
                                    loading="lazy"
                                  />
                                </Link>
                              ) : (
                                <div className="inline-block w-auto">
                                  <img
                                    className="w-auto cursor-pointer"
                                    src=""
                                    alt=""
                                    loading="lazy"
                                  />
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
