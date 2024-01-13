import { useMemo, useRef, useState } from 'react';

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function factorial(randomsena) {
  if (randomsena <= 1) return randomsena;
  return randomsena * factorial(randomsena - 1);
}

export function Assignment1() {
  const renders = useRef(1);
  const [input, setInput] = useState(0);
  // Your solution starts here
  const expensiveValue = useMemo(() => {
    return factorial(input);
  }, [input]);
  // Your solution ends here
  console.log(`number of renders: ${renders.current}`);
  renders.current += 1;
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
