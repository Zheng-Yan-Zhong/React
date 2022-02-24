import React ,{memo, useEffect} from 'react';

function Component2({getData}) {
    useEffect(() => {
        console.log('changed');
    },[getData])
    return <div>
    </div>;
}

export default memo(Component2);
