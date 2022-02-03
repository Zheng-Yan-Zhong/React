import React,{ useEffect , useState} from 'react';

function App() {
  const [num ,setNum] = useState(0)

  useEffect(() => {
    console.log("React init");
  },[])

  useEffect(() => {
    console.log("every render will executive");
  },)

  useEffect(() => {
    console.log(num);
  }, [num])

  return <div>
    <p on>{num}</p>
    <button onClick={() => setNum(num+1)}>Add</button>
  </div>;
}

export default App;
