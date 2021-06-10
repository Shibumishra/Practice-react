import React,{useState} from 'react'

const Input = () => {
    const [value, setValue]=useState();
    const [print, setPrint]=useState(false);
    const getData = (val) => {
        setValue(val.target.value)
        setPrint(false)
    }
    return ( <div>
        {
            print?
            <h1>{value}</h1> 
            : null
        }
        <input type="text" placeholder="Enter Value" onChange={getData}/>
        <button onClick={() =>setPrint(true)}>Print</button>
    </div> );
}
 
export default Input;