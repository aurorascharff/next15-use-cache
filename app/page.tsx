import React from 'react';

export default function RootPage() {
  return (
    <div className="flex flex-col gap-4">
      <a href="with-suspense">With Suspense</a>
      <a href="without-suspense">Without Suspense</a>
    </div>
  );
}
