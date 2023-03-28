import { WIZARDOPTION } from '@/const';
import Container from '@/layouts/Container';
import type { WizardHeroProps } from '@/types';

import { Button } from '../Button';

const WizardHero = ({
  title,
  description,
  setWizardSectionType,
}: WizardHeroProps) => {
  return (
    <>
      <div
        className="flex items-center justify-center overflow-scroll bg-[#F5F7FB]"
        style={{
          minHeight: 'calc(100vh - 90px)',
        }}
      >
        <div className="flex h-full items-start justify-center px-6 pt-28 md:items-center md:py-0 lg:px-0">
          <Container>
            <div className="mx-auto flex max-w-lg flex-col gap-14 md:gap-8">
              <div className=" flex flex-col justify-center gap-3 md:gap-7">
                {title && (
                  <h1 className="text-center text-mobileHeading font-bold leading-15 text-lightGray-900 md:text-5xl md:leading-120">
                    {title}
                  </h1>
                )}
                {description && (
                  <div className="text-center text-base font-normal leading-7 text-lightGray-900">
                    {description}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                <Button
                  className="bg-lightGray-900 !px-10 text-white"
                  dataLabel={'WIZARD HERO CTA'}
                  onClick={() => setWizardSectionType(WIZARDOPTION)}
                >
                  Call to Action1
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default WizardHero;
