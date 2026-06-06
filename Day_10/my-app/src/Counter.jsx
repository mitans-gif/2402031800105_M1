import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #4f46e5', borderRadius: '8px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4f46e5' }}>
        Count: {count}
      </p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrement} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          -
        </button>
        <button onClick={reset} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Reset
        </button>
        <button onClick={increment} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
