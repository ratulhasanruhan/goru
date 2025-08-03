import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Account | GoruSheba',
  description: 'Request to delete your GoruSheba account and all associated data. Our team will process your request within 7 days.',
  keywords: [
    'delete account',
    'account deletion',
    'data removal',
    'GoruSheba account',
    'cattle management account',
    'farm management account',
    'account privacy',
    'data protection'
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Delete Account | GoruSheba',
    description: 'Request to delete your GoruSheba account and all associated data.',
    type: 'website',
    url: 'https://goru.help/delete-account',
  },
  twitter: {
    card: 'summary',
    title: 'Delete Account | GoruSheba',
    description: 'Request to delete your GoruSheba account and all associated data.',
  },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 