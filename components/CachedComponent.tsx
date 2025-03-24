import React from 'react';
import { getData } from '@/data/data';

export default async function CachedComponent() {
  const data = await getData();

  return <div>CachedComponent: {data}</div>;
}
