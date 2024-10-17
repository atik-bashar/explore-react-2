import { useState } from "react"

export default function Team(){

    const [man, setMan] = useState(11);

    const handleAdd = () =>{
        const newMan = man + 1;
        setMan(newMan);
    }

    const handleRemove = () =>{
        const newMan = man - 1;
        setMan(newMan);
        // setMan(man - 1)
    }

    const teamStyle ={
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {man}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}