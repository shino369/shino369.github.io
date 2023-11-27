import { Tab } from '@/components/Tab';

export const metadata = {
  title: 'Create Next App - subdir',
  description: 'test sub directory',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <div className="flex m-2 bg-slate-400 justify-between">
        <Tab path="/subdir/1/1" />
        <Tab path="/subdir/1/2" />
        <Tab path="/subdir/2/1" />
        <Tab path="/subdir/2/2" />
      </div>
      {children}
    </div>
  );
}
