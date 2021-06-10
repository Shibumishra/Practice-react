import React,{useState, useEffect} from 'react'

const Parents = () => {
    const [showChild, setShowChild]=useState(true);
    const[count, setCount]=useState(0)
    const[parentCount, updateParentCount] = useState(count)
    const showHide = () => {
        console.log(showChild)
        setShowChild(!showChild)
    }
    const Increment =() => {
        setCount(count+1)
    }
    const Decrement= () => {
        setCount(count-1)
    }

    useEffect(() => {
        console.log("Component Did Mount")
    }, [])

    useEffect(() => {
      console.log("Component Did Mount Component Did Update")  
    },)

    useEffect(() => {
        return () => {
            if(count <=10 && !(count < 0)){
                updateParentCount(count)
            }
        };
    }, [count])

    return ( <div>
        <h1>Parent - {parentCount}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={showHide}>Show/Hide</button>
      {showChild && <Child count={count}/>}
        <hr />
    </div> );
}
 
export default Parents;<div>
</div>



const Child = ({ count }) => {
    const[childCount, updateChildCount] = useState(count)
    useEffect(() => {
        return () => {
            console.log("clean Up")
        };
    }, [])

    useEffect(() => {
        return () => {
            if(count <=5 && !(count < 0)){
                updateChildCount(count)
            }
        };
    }, [count])

    return ( <div>
        <h2>Child - {(childCount)}</h2>
    </div> );
}
 