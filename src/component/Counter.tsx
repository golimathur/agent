import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);

  const words = ["this", "is", "react", "js"];
  const word = words[wordIndex];

  const computeLetterCount = (word) => {                      
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };

  const letterCount = React.useMemo(() => computeLetterCount(word), [word]);

  return (
    <div style={{ padding: 15 }}>
      <h2>Compute Number of letters</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>

      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Click ON
      </button>

      <h2>Increment a counter</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  );
};

export default Counter;
