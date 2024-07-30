declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<
    // eslint-disable-next-line no-undef
    React.SVGAttributes<SVGElement>
  >;
  export default ReactComponent;
}
declare module '*.scss';

declare module '*.jpg';

declare module '*.png';

declare module '*.json';

declare module '@tailwindcss/*';

declare module '@tailwind';
