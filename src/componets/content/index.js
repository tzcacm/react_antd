import React, { useState } from 'react';

function Content() {

    const [index, setIndex] = useState(3);

    function setIndexClick() {
        setIndex(index + 1)
    }
    
    return (
        <div>
            我是content{index}
            <button onClick = { () =>  { setIndex(index+1) } }>点击我</button>
            <button onClick={setIndexClick}>点击我</button>
        </div>
    )
}

export default Content;