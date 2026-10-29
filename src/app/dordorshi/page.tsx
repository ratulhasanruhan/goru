import type { Metadata } from 'next';
import DorDorshi from '@/components/DorDorshi';

export const metadata: Metadata = { title: 'দরদর্শী AI | Cattle Market Intelligence', description: 'Transparent cattle valuation demo from GoruSheba.' };

export default function DorDorshiPage() {
  return <DorDorshi />;
}