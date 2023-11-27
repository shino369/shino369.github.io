'use client';

import { useEffect, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('init!');
  }, []);
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-400/80">counter component</h1>
      <button
        onClick={() => {
          setCounter((c) => ++c);
        }}
      >click me</button>
      <div>{counter}</div>
    </div>
  );
}
