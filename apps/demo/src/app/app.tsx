import { useState } from 'react';

export function App() {
  const [state, setState] = useState(null);
  const handleRequest = async () => {
    const resp = await fetch('/api').then(r => r.json());
    setState(resp);
  };

  return (
    <>
      <button onClick={handleRequest}>
        Fetch from API
      </button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </>
  );
}

export default App;
