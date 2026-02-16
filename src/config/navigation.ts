/**
 * Navigation Configuration
 *
 * @description
 * Centralized navigation configuration for header and footer.
 * Stripped down for smoke test landing page - only essential links.
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  header: {
    main: [],
    cta: [
      { label: 'Get Early Bird Discount', href: '/#waitlist', variant: 'primary' },
    ],
  },

  footer: {
    product: [],
    solutions: [],
    resources: [
      { label: 'Roadmap', href: '/roadmap' },
    ],
    company: [],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
};
