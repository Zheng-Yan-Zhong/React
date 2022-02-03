import React from 'react';
import Child from './components/Child';
function App() {
    const user = "Dennis"
  return <div>
      <Child user={user}/>
  </div>;
}

export default App  
