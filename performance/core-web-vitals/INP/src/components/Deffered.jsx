import { startTransition, useState, useMemo } from "react";

const data = [
    {
        name: "sivaraman kanagavel"
    },
    {
        name: "siva kanagavel"
    },
    {
        name: "siva vel"
    },
    {
        name: "vijayalakshmi"
    },
    {
        name: "vijaya"
    },
    {
        name: "vino"
    },
]

import { useDeferredValue } from 'react';

function Deffered() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);

  const results = useMemo(() => {
    return data.filter(item => item.name.includes(deferredInput));
  }, [deferredInput]);

  return (
    <input value={input} onChange={(e) => setInput(e.target.value)} />
  );
}
export default Deffered;