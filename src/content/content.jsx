import { useState } from "react";

const Content = () => {

    const [name, setName] = useState('mario');
    let [age, setAge] = useState(20);

    const callMessage = () =>{
        console.log('avee chakraborty!');
    }

    const handleClick = () =>{
        setName('avee');
        setAge(27);
    };

    return(
        <div className="content">
            <h3>{ name } is {age} years old!</h3>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Content;