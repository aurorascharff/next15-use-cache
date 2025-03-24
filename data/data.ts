import { revalidateTag } from 'next/cache';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';

const data = 'Hello world';

export async function getData() {
  'use cache';
  cacheTag('data');

  await new Promise(resolve => {
    return setTimeout(resolve, 2000);
  });

  return data;
}

export async function revalidateData() {
  'use server';

  revalidateTag('data');
}
