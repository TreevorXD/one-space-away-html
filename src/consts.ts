import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'Victoria Water Polo Club',
  LEGAL_NAME: 'South Island Water Polo Association',
  TITLE: 'Victoria Water Polo Club',
  DESCRIPTION: 'Dedicated to promoting water polo in Victoria, BC.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://victoriawaterpolo.ca',
  LOCALE: 'en',
  TELEPHONE: '(250) 818-2999',
  EMAIL: 'contact@victoriawaterpolo.ca',
  ADDRESS: '4636 Elk Lake Dr, Victoria, BC V8Z 5M1',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@victoriawaterpolo',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/',
  },
  {
    NAME: 'Pinterest',
    ICON: 'pinterest',
    LABEL: `${SITE.COMPANY_NAME} on Pinterest`,
    HREF: 'https://www.pinterest.com/',
  },
  {
    NAME: 'Youtube',
    ICON: 'youtube',
    LABEL: `${SITE.COMPANY_NAME} on YouTube`,
    HREF: 'https://www.youtube.com/',
  },
];
