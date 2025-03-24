import React, { Suspense } from 'react';
import CachedComponent from '@/components/CachedComponent';
import DynamicComponent from '@/components/DynamicComponent';
import { revalidateData } from '@/data/data';

export default function page() {
  return (
    <div>
      Press revalidate then refresh the page. The page is blocked while the promise is resolving after revalidate.
      <CachedComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
      <form action={revalidateData}>
        <button type="submit">Revalidate</button>
      </form>
    </div>
  );
}
