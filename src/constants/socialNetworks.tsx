import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export type SocialNetwork = {
  network: string;
  url: string;
  username: string;
  Icon: IconType;
};

export const socialNetworks: SocialNetwork[] = [
  {
    network: 'Github',
    url: 'https://github.com/domenicomanna',
    username: 'domenicomanna',
    Icon: FaGithub,
  },
  {
    network: 'LinkedIn',
    url: 'https://www.linkedin.com/in/domenico-manna-6007a01a2/',
    username: 'Domenico Manna',
    Icon: FaLinkedin,
  },
];
