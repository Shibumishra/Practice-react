import React,{useState} from 'react'

const HideShow = () => {
    const [status,setStatus]=useState(true)
    const [data,setData]=useState(true)
    return ( <div>
        {
            status ?
            <h1>Hello World!</h1>
            : null
        }
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
        <hr />
        {
            data ?
            <h1>Hello Toggle!</h1>
            : <h2>Show Toggle</h2>
        }
        <button onClick={()=>setData(!data)}>Toggle</button>
    </div> );
}
 
export default HideShow;