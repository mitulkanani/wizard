import { useState } from 'react';

import {
  CENTER,
  WIZARD,
  WIZARDCONTACTFORM,
  WIZARDHERO,
  WIZARDOPTION,
} from '@/const';

import ContactForm from '../section/ContactForm';
import WizardHero from './WizardHero';
import WizardItem from './WizardItem/WizardItem';

const contactForm = {
  formTitle: 'Space for a headline',
  formDescription: 'Filler text (also placeholder text or dummy text).',
  title: 'Space for a headline',
  description: 'Filler text (also placeholder text or dummy text).',
  client: [{ id: 1, isUrl: true, name: 'tets', url: 'test', logo: 'test' }],
  isDetailsSection: false,
  formPosition: CENTER,
  cta: {
    id: 1,
    label: 'Call to Action1',
    url: '',
    type: 'dark',
    ref_id: '',
    dataAction: '',
    dataLabel: '',
    dataCategory: '',
    trackingJson: {},
    destination: '',
  },
  otherLink: '',
  termsText:
    'I meet the According Terms and agree to the Privacy Policy and Terms of Use, including its provisions concerning Confidentiality and Non-circumvention',
  fields: [
    {
      id: 1,
      label: 'Field',
      placeholder: 'Type here...',
      ref_id: '',
    },
    {
      id: 2,
      label: 'Field',
      placeholder: '',
      ref_id: '',
    },
    {
      id: 3,
      label: 'Field',
      placeholder: '',
      ref_id: '',
    },
    {
      id: 4,
      label: 'Field',
      placeholder: '',
      ref_id: '',
    },
  ],
  backgroundColor: '#FFFFFF',
  formBackgroundColor: '#FFFFFF',
  inputBackgroundColor: '#F5F7FB',
  classes: {
    main: '',
    formMain: '',
    title: '',
    description: '',
    button: '',
    image: '',
    otherLink: '',
    termsText: '',
    label: '',
    input: '',
  },
  isBgImage: true,
  sectionID: '1',
  type: WIZARD,
  id: 1,
};

const Wizard = () => {
  const [wizardSectionType, setWizardSectionType] = useState<
    typeof WIZARDHERO | typeof WIZARDOPTION | typeof WIZARDCONTACTFORM
  >(WIZARDHERO);

  return (
    <>
      {wizardSectionType === WIZARDHERO && (
        <WizardHero
          title="Space for a headline"
          description="Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated. "
          setWizardSectionType={setWizardSectionType}
        />
      )}

      {wizardSectionType === WIZARDOPTION && (
        <WizardItem setWizardSectionType={setWizardSectionType} />
      )}

      {wizardSectionType === WIZARDCONTACTFORM && (
        <ContactForm
          {...contactForm}
          setWizardSectionType={setWizardSectionType}
          isBgImage={true}
        />
      )}
    </>
  );
};

export default Wizard;
