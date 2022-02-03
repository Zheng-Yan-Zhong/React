import React, {useState, useRef} from 'react';

function App() {
    //* use useRef get reference
    const inputRef = useRef('')
    console.log(inputRef);
    const focusFn = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inputRef} placeholder='input something'/>
            <button onClick={focusFn}>focus</button>
        </div>);
}

export default App;