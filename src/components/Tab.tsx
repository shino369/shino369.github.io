'use client';
import Link from 'next/link';

export const Tab = ({ path }: { path: string }) => {
  return <Link href={path}>path: {path}</Link>;
};
