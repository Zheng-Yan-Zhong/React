import React , {memo} from 'react';

function Component2({text}) {
    for(let i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log('1');

    return <div>
        user:{text}
    </div>;
}

export default memo(Component2);
