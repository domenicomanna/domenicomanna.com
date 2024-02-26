import 'typeface-lato';
import 'prismjs/themes/prism-tomorrow.css';
import './src/global.css';
import ReactDOM from 'react-dom/client';

export const replaceHydrateFunction = () => {
  return (element: any, container: any) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};
