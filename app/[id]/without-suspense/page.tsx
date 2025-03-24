import React from 'react';
import CachedComponent from '@/components/CachedComponent';
import { revalidateData } from '@/data/data';

export default function page() {
  return (
    <div>
      Press revalidate then refresh the page. The page is blocked while the promise is resolving after revalidate.
      <CachedComponent />
      <form action={revalidateData}>
        <button type="submit">Revalidate</button>
      </form>
    </div>
  );
}
