import 'typeface-lato';
import 'prismjs/themes/prism-tomorrow.css';
import './src/global.css';
import Layout from './src/components/layout/layout';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

export const wrapPageElement = ({ props, element }: { props: any; element: ReactNode }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const replaceHydrateFunction = () => {
  return (element: any, container: any) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};
