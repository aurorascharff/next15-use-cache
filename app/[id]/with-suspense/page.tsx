import React, { Suspense } from 'react';
import CachedComponent from '@/components/CachedComponent';
import DynamicComponent from '@/components/DynamicComponent';
import { revalidateData } from '@/data/data';

export default function page() {
  return (
    <div>
      Press revalidate then refresh the page. The suspense is showing while the promise is resolving after revalidate.
      <Suspense fallback={<div>Loading...</div>}>
        <CachedComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
      <form action={revalidateData}>
        <button type="submit">Revalidate</button>
      </form>
    </div>
  );
}
