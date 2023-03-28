import Wizard from '@/component/Wizard/Wizard';
import { LIGHT, OUTLINED, STICKY } from '@/const';
import Header from '@/layouts/Header';

const HeaderProps = {
  id: 1,
  logo: {
    id: 1,
    image: '../assets/images/Logo.png',
    url: '',
    ref_id: '',
    dataAction: '',
  },
  isSticky: STICKY,
  navlink: [
    {
      id: 1,
      label: 'About',
      href: '',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
    },
    {
      id: 2,
      label: 'Another link',
      href: '',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
    },
    {
      id: 3,
      label: 'Another link',
      href: '',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
    },
    {
      id: 4,
      label: 'Another link',
      href: '',
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
    },
  ],
  buttons: [
    {
      id: 1,
      label: 'Call to Action',
      url: '',
      type: LIGHT,
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
    {
      id: 1,
      label: 'CTA',
      url: '',
      type: OUTLINED,
      ref_id: '',
      dataAction: '',
      dataLabel: '',
      dataCategory: '',
      trackingJson: {},
      destination: '',
    },
  ],
  languages: [
    {
      id: 1,
      language: 'en',
      country: 'india',
      code: 'En',
      flag: '',
    },
  ],
  classes: {
    main: '',
    navLink: '',
    button: '',
  },
};

const Index = () => {
  return (
    <>
      <Header {...HeaderProps} />
      <Wizard />
    </>
  );
};

export default Index;
