import React , {useCallback, useState} from 'react';
import Component2 from './components/Component2';
function App() {
    const [num, setNum] = useState(0)
    const getData = useCallback(() => {
        console.log('1');
    },[getData])
    return (
        <div style={{textAlign: "center"}}>
            <h1>UseCallback</h1>
            
            <input type="text" onChange={(e) => setNum(e.target.value)}/>
            <p>{num}</p>
            <Component2 getData={getData} />
        </div>
    );
}

export default App;
