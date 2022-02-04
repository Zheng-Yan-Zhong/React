import React, {useState} from 'react';
import Component2 from './components/Component2';
function App() {
    const [text, setText] = useState('')
    return (
    <div>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <p>{text}</p>
        <Component2  text={text}/>
    </div>
    );
}

export default App;
