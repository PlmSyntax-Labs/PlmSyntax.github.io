/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 * These values can be customized via environment variables or by editing the defaults below.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'PlmSyntax';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION || 'The intelligent desktop toolkit for PLM Engineers';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'https://plmsyntax.com';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'PlmSyntax';

/** Path to logo file (relative to /public) - set to empty to show site name as text */
export const logo = '/favicon-32x32.png';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/og-image.png';

/** Social media links */
export const social: SocialLinks = {};

/** List of available product modules */
export const modules = [
  { id: 'merge', label: 'Smart Merge' },
  { id: 'guard', label: 'IP Guard' },
  { id: 'audit', label: 'Structure Audit' },
  { id: 'suite', label: 'Full Enterprise Suite' },
];

/** Legal configuration for privacy policy and terms pages */
export const legal: LegalConfig = {
  privacyEmail: 'info@plmsyntax.com',
  legalEmail: 'info@plmsyntax.com',
  lastUpdated: '14 February 2026',
};
