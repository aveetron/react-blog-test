import { useState } from "react";

const content = () => {
    let name = 'Homepage';
    const callMessage = () =>{
        console.log('avee chakraborty!');
    }

    const handleClick = () =>{
        callMessage();
    };

    return(
        <div className="content">
            <h3>{ name }</h3>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default content;