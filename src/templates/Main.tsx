import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full font-jakarta text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto w-full">
      <main className="text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
