import React, { useState } from 'react';

function App() {
    const [num, setNum] = useState(0)

    return <div>
        <p>{num}</p>
        <button onClick={() => setNum(num + 1)}>Add</button>
    </div>;
}

export default App;
