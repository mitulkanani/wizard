import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type {
  BENEFITS,
  BLOG,
  CENTER,
  CLIENTS,
  CONTACTFORM,
  COOKIE,
  COUNTDOWN,
  DARK,
  FAQS,
  FEATURES,
  FOOTER,
  FORM_POSITION_LEFT,
  FORM_POSITION_RIGHT,
  HERO,
  HOWITWORKS,
  LIGHT,
  LINK,
  NOTIFICATIONBAR,
  OUTLINED,
  STICKY,
  TESTIMONIALS,
  WIZARD,
  WIZARDCONTACTFORM,
  WIZARDHERO,
  WIZARDOPTION,
} from '@/const';

export type StrapiCta = {
  id: string | number;
  label: string;
  url?: string;
  type: typeof LIGHT | typeof DARK | typeof OUTLINED | typeof LINK | string;
  ref_id?: string;
  dataAction?: string;
  dataLabel?: string;
  dataCategory?: string;
  trackingJson?: object;
  destination?: string;
};

type CommonContentTypes = {
  type:
    | typeof HERO
    | typeof CLIENTS
    | typeof FEATURES
    | typeof BENEFITS
    | typeof FAQS
    | typeof BLOG
    | typeof TESTIMONIALS
    | typeof CONTACTFORM
    | typeof FOOTER
    | typeof COOKIE
    | typeof NOTIFICATIONBAR
    | typeof COUNTDOWN
    | typeof HOWITWORKS
    | typeof WIZARD;
  id: string | number;
  sectionID?: string;
};

export type WizardItem = {
  id: number;
  label: string;
  multiSelect: boolean;
  required: boolean;
  backCta: StrapiCta;
  continueCta: StrapiCta;
  option: {
    name: string;
    selected: boolean;
  }[];
}[];

export type WizardProps = {
  title: string;
  description?: string;
  wizardItem: WizardItem;
  contactForm: ContactFormProps;
} & CommonContentTypes;

export type WizardHeroProps = {
  title: string;
  description?: string;
  setWizardSectionType: Dispatch<
    SetStateAction<
      typeof WIZARDHERO | typeof WIZARDOPTION | typeof WIZARDCONTACTFORM
    >
  >;
};

export interface ButtonType {
  type?: 'light' | 'dark' | 'outlined' | 'link' | string;
  children: ReactNode;
  className?: string;
  isSubscribeBtn?: boolean;
  url?: string;
  id?: string;
  dataLabel?: string;
  dataAction?: string;
  dataCategory?: string;
  trackingJson?: object;
  destination?: string;
  onClick?: () => void;
  disable?: boolean | undefined;
}

export type WizardItemProps = {
  setWizardSectionType: Dispatch<
    SetStateAction<
      typeof WIZARDHERO | typeof WIZARDOPTION | typeof WIZARDCONTACTFORM
    >
  >;
};

export type ClientsDataProps = {
  id: number | string;
  isUrl?: boolean;
  name?: string;
  url?: string;
  logo?: string;
};

export type ContactFormProps = {
  formTitle: string;
  formDescription?: string;
  title?: string;
  description?: string;
  client?: ClientsDataProps[];
  isDetailsSection?: boolean;
  formPosition?:
    | typeof FORM_POSITION_LEFT
    | typeof FORM_POSITION_RIGHT
    | typeof CENTER;
  cta?: StrapiCta;
  otherLink?: string;
  termsText?: string;
  fields: {
    id: string | number;
    label: string;
    placeholder?: string;
    ref_id?: string;
  }[];
  backgroundColor?: string;
  formBackgroundColor?: string;
  inputBackgroundColor?: string;
  classes?: {
    main?: string;
    formMain?: string;
    title?: string;
    description?: string;
    button?: string;
    image?: string;
    otherLink?: string;
    termsText?: string;
    label?: string;
    input?: string;
  };
  isBgImage?: boolean;
} & CommonContentTypes;

export type BackButtonProps = {
  cta: StrapiCta;
  onClick: () => void;
};

export type LanguageObj = {
  id: string | number;
  language: string;
  country: string;
  code: string;
  flag: string;
};

export type LanguagesProps = {
  languages?: LanguageObj[];
  setLanguageID: React.Dispatch<React.SetStateAction<number>>;
  languageID: number;
};

export type LogoProps = {
  id?: string | number;
  image?: string;
  url?: string;
  ref_id?: string;
  dataAction?: string;
};

export type HeaderProps = {
  id: number | string;
  logo?: LogoProps;
  isSticky: typeof STICKY;
  navlink: {
    id: string | number;
    label: string;
    href?: string;
    ref_id?: string;
    dataAction?: string;
    dataLabel?: string;
    dataCategory?: string;
    trackingJson?: object;
  }[];
  buttons: StrapiCta[];
  languages?: LanguageObj[];
  classes?: {
    main?: string;
    navLink?: string;
    button?: string;
  };
};
