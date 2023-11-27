import { Tab } from '@/components/Tab';
import Counter from './Counter';
import Link from 'next/link';

export const metadata = {
  title: 'Create Next App - subdir',
  description: 'test sub directory',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <div className="flex m-2 bg-slate-400 justify-between">
        <Link href={'/subdir'} >/subdirrrrrr</Link>
        <Tab path="/subdir/1" />
        <Tab path="/subdir/2" />
      </div>
      <Counter />
      {children}
    </div>
  );
}
