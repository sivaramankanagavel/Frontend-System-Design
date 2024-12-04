import { startTransition, useState } from "react";

const data = [
  {
    name: "sivaraman kanagavel",
  },
  {
    name: "siva kanagavel",
  },
  {
    name: "siva vel",
  },
  {
    name: "vijayalakshmi",
  },
  {
    name: "vijaya",
  },
  {
    name: "vino",
  },
];

function Transition({ buttonClick }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      setResults(data.filter((item) => item.name.includes(value)));
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {results.forEach((item) => (
        <>{item.name}</>
      ))}
    </>
  );
}

export default Transition;
