export type Route = {
  to: string;
  displayName: string;
};

export const routes = {
  home: {
    to: '/',
    displayName: 'Home',
  },
  blog: {
    to: '/blog',
    displayName: 'Blog',
  },
  contact: {
    to: '/contact',
    displayName: 'Contact',
  },
};
