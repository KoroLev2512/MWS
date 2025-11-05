import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Page',
};

export default function TestPage() {
  return <h1>Test Page</h1>;
}