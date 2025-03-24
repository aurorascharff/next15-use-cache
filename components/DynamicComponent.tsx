import { connection } from 'next/server';
import React from 'react';

export default async function DynamicComponent() {
  await connection();
  await new Promise(resolve => {
    return setTimeout(resolve, 2000);
  });

  return <div>DynamicComponent</div>;
}
