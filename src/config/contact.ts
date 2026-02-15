/**
 * Contact Page Configuration
 *
 * @description
 * Contact information, methods, and FAQ data for the contact page.
 */

import type { ContactInfo, ContactMethod, ContactFAQ } from '../lib/types';

/** Contact information used across contact page and legal pages */
export const contact: ContactInfo = {
  email: 'info@plmsyntax.com',
  supportEmail: 'support@plmsyntax.com',
  salesEmail: 'sales@plmsyntax.com',
  address: {
    street: '[Your Street and Number]',
    city: 'Munich',
    state: 'Bavaria',
    zip: '[PLZ]',
    country: 'Germany',
  },
};

/** Contact methods displayed on the contact page */
export const contactMethods: ContactMethod[] = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: 'lucide:github',
    label: 'GitHub',
    value: 'PlmSyntax',
    href: 'https://github.com/PlmSyntax',
  },
];

/** FAQ items displayed on the contact page */
export const contactFAQs: ContactFAQ[] = [
  {
    question: "What's your typical response time?",
    answer: 'We respond to most inquiries within 24 hours during business days.',
  },
  {
    question: 'Is PlmSyntax available for download yet?',
    answer:
      'PlmSyntax is currently in development. Join the waitlist to be notified when early access begins.',
  },
  {
    question: 'Do you offer volume licensing?',
    answer: 'Yes, contact us at sales@plmsyntax.com for volume licensing and enterprise pricing.',
  },
];
