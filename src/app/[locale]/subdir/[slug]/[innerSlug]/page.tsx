'use client';

export default async function Page({ params }: { params: { innerSlug: string } }) {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-400/80">inner child component</h1>
      {params.innerSlug}
    </div>
  );
}
