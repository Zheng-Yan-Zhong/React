import React, {useContext} from 'react';
import { Data } from '../App';
function Component3() {
    const data = useContext(Data)
    return(
        <div>{data}</div>
    )
}

export default Component3;
