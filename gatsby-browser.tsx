import 'typeface-lato';
import 'prismjs/themes/prism-tomorrow.css';
import './src/global.css';
import Layout from './src/components/layout/layout';
import { ReactNode } from 'react';

type Args = {
  element: ReactNode;
  props: NonNullable<unknown>;
};

export const wrapPageElement = (args: Args) => {
  return <Layout {...args.props}>{args.element}</Layout>;
};
