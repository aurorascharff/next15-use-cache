import React, { Suspense } from 'react';
import CachedComponent from '@/components/CachedComponent';
import { revalidateData } from '@/data/data';

export default function RootPage() {
  return (
    <div>
      Hello world
      <Suspense fallback={<div>Loading...</div>}>
        <CachedComponent />
      </Suspense>
      <form action={revalidateData}>
        <button type="submit">Revalidate</button>
      </form>
    </div>
  );
}
