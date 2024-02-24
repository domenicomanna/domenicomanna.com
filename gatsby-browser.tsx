import 'typeface-lato';
import 'prismjs/themes/prism-tomorrow.css';
import './src/global.css';
import Layout from './src/components/layout/layout';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

type Args = {
  element: ReactNode;
  props: NonNullable<unknown>;
};

export const wrapPageElement = (args: Args) => {
  return <Layout {...args.props}>{args.element}</Layout>;
};

export const replaceHydrateFunction = () => {
  return (element: any, container: any) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};
