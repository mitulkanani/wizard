import update from 'immutability-helper';
import React, { useState } from 'react';
import { twJoin } from 'tailwind-merge';

import { Button } from '@/component/Button';
import Check from '@/component/Icon/Check';
import LeftArrow from '@/component/Icon/LeftArrow';
import { WIZARDCONTACTFORM, WIZARDHERO } from '@/const';
import Container from '@/layouts/Container';
import type { WizardItemProps } from '@/types';

import BackButton from '../BackButton';

const wizardItem = [
  {
    id: 1,
    label: 'Option1',
    multiSelect: true,
    required: true,
    backCta: {
      id: 1,
      label: 'Back',
      url: '',
      type: 'light',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    continueCta: {
      id: 1,
      label: 'Continue',
      url: '',
      type: 'dark',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    option: [
      {
        name: 'Option1',
        selected: true,
      },
      {
        name: 'Option2',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    label: 'Option2',
    multiSelect: true,
    required: true,
    backCta: {
      id: 1,
      label: 'Back',
      url: '',
      type: 'light',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    continueCta: {
      id: 1,
      label: 'Continue',
      url: '',
      type: 'dark',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    option: [
      {
        name: 'Option1',
        selected: true,
      },
      {
        name: 'Option2',
        selected: true,
      },
      {
        name: 'Option3',
        selected: false,
      },
    ],
  },
  {
    id: 3,
    label: 'Option3',
    multiSelect: true,
    required: true,
    backCta: {
      id: 1,
      label: 'Back',
      url: '',
      type: 'light',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    continueCta: {
      id: 1,
      label: 'Continue',
      url: '',
      type: 'dark',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    option: [
      {
        name: 'Option1',
        selected: true,
      },
      {
        name: 'Option2',
        selected: true,
      },
      {
        name: 'Option3',
        selected: true,
      },
      {
        name: 'Option4',
        selected: false,
      },
    ],
  },
  {
    id: 4,
    label: 'Option4',
    multiSelect: true,
    required: true,
    backCta: {
      id: 1,
      label: 'Back',
      url: '',
      type: 'light',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    continueCta: {
      id: 1,
      label: 'Continue',
      url: '',
      type: 'dark',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    option: [
      {
        name: 'Option1',
        selected: true,
      },
      {
        name: 'Option2',
        selected: true,
      },
      {
        name: 'Option3',
        selected: true,
      },
      {
        name: 'Option4',
        selected: true,
      },
      {
        name: 'Option5',
        selected: false,
      },
    ],
  },
];

const WizardItem = ({ setWizardSectionType }: WizardItemProps) => {
  const [questionData, setQuestionData] = useState(wizardItem);
  const [openState, setOpenState] = useState(1);

  const handleBackClick = () => {
    if (openState === 1) {
      setWizardSectionType(WIZARDHERO);
    } else {
      setOpenState(openState - 1);
    }
  };

  return (
    <>
      <div
        className="bg-[#F5F7FB]"
        style={{
          minHeight: 'calc(100vh - 90px)',
        }}
      >
        <Container>
          <div className="mx-auto max-w-4xl py-10 px-9 lg:px-0">
            {questionData &&
              questionData?.length &&
              questionData.map(
                (
                  { id, label, option, multiSelect, backCta, continueCta },
                  i
                ) => (
                  <div
                    key={id}
                    className={twJoin(
                      'flex-col gap-5',
                      openState - 1 === i ? 'flex' : 'hidden'
                    )}
                  >
                    <div className="md:hidden">
                      <BackButton
                        cta={backCta}
                        onClick={() => {
                          handleBackClick();
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center px-2.5">
                      <div className="flex flex-col gap-2.5 md:gap-12">
                        <div className="mx-auto flex w-full max-w-2xl flex-col justify-center gap-2.5">
                          <p className="text-center text-xs font-normal leading-4 text-black md:text-sm md:leading-5 md:text-gray-500">
                            {openState} of {questionData?.length}
                          </p>
                          <div className="rounded-md bg-white">
                            <div
                              className={twJoin(
                                'h-2.5 rounded-md bg-lightGray-900'
                              )}
                              style={{
                                width: `${
                                  (openState * 100) / questionData.length
                                }%`,
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-12">
                          <div>
                            <div>
                              <h2 className="py-5 text-center text-3xl font-bold leading-10 text-lightGray-900 md:py-8 md:text-4xl">
                                {label}
                              </h2>
                            </div>
                            <div className="flex items-center justify-center">
                              <div
                                className={twJoin(
                                  'grid gap-2.5 md:gap-5 justify-items-stretch items-center w-full md:w-auto',
                                  option?.length === 1 && 'grid-cols-1',
                                  option?.length === 3 &&
                                    'grid-cols-1 md:grid-cols-3',
                                  (option?.length === 2 ||
                                    option?.length > 3) &&
                                    'grid-cols-1 md:grid-cols-2'
                                )}
                              >
                                {option &&
                                  option.map(({ name, selected }, j) => (
                                    <div
                                      key={j}
                                      className={twJoin(
                                        'relative cursor-pointer rounded-md bg-white md:py-12 w-full md:w-auto p-6 md:px-24 border-2',
                                        selected
                                          ? 'border-lightGray-900'
                                          : 'border-white'
                                      )}
                                      onClick={() => {
                                        if (multiSelect) {
                                          const updated = update(questionData, {
                                            [i]: {
                                              option: {
                                                [j]: {
                                                  selected: {
                                                    $set: !selected,
                                                  },
                                                },
                                              },
                                            },
                                          });
                                          setQuestionData(updated);
                                        } else {
                                          let previousSelect = 0;
                                          previousSelect = option.findIndex(
                                            (item) => item.selected === true
                                          );

                                          const updated = update(questionData, {
                                            [i]: {
                                              option: {
                                                [previousSelect === -1
                                                  ? 0
                                                  : previousSelect]: {
                                                  selected: {
                                                    $set: false,
                                                  },
                                                },
                                                [j]: {
                                                  selected: {
                                                    $set: !selected,
                                                  },
                                                },
                                              },
                                            },
                                          });
                                          setQuestionData(updated);
                                        }
                                      }}
                                    >
                                      <p className="text-center text-base font-bold leading-5 text-lightGray-900 md:text-sm">
                                        {name}
                                      </p>

                                      {selected && (
                                        <div className="absolute right-1 top-1 rounded-[3px] bg-lightGray-900 p-1.5">
                                          <Check />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="w-full md:left-auto md:bottom-24 md:max-w-3xl lg:max-w-4xl">
                              <div className="flex flex-col gap-2">
                                <div className="flex w-auto flex-row items-center justify-center md:justify-between">
                                  <div className="hidden md:flex">
                                    <BackButton
                                      cta={backCta}
                                      onClick={() => {
                                        handleBackClick();
                                      }}
                                    />
                                  </div>

                                  <div>
                                    <Button
                                      dataLabel={
                                        continueCta?.dataLabel ||
                                        continueCta?.label ||
                                        'continue Cta'
                                      }
                                      dataAction={continueCta?.dataAction}
                                      dataCategory={continueCta?.dataCategory}
                                      trackingJson={continueCta?.trackingJson}
                                      destination={continueCta?.destination}
                                      type={continueCta?.type}
                                      url={continueCta?.url}
                                      id={
                                        continueCta?.ref_id ||
                                        `continue_button_${continueCta?.label.toLowerCase()}`
                                      }
                                      className="!px-11"
                                      onClick={() => {
                                        if (
                                          openState === questionData?.length
                                        ) {
                                          setWizardSectionType(
                                            WIZARDCONTACTFORM
                                          );
                                        } else {
                                          setOpenState(openState + 1);
                                        }
                                      }}
                                    >
                                      <span className="flex flex-row items-center justify-center gap-2.5">
                                        {continueCta?.label}
                                        <LeftArrow
                                          className="h-6 w-4 rotate-180"
                                          color="#FFFFFF"
                                        />
                                      </span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default WizardItem;
