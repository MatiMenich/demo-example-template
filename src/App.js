import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        '/api/hello',
      );
      setData(result.data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
