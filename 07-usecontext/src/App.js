import React,{createContext, useState, useEffect} from 'react';
import Component2 from './components/Component2'

export const Data = createContext(null)

function App() {
  const [user, setUser] = useState('Empty')
  return (
    <Data.Provider value={user}>
      <Component2 />
    </Data.Provider>
  );
}

export default App;
