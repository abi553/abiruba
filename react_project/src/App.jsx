import { useState } from 'react'
import './App.css'
import Child from "./Child"
import Child1 from './child1'
// import User from "./User"
function App() {

  // const [users, setUsers] = useState(
    // [
    //   { id: 1, name: "abi", age: 25 },
    //   { id: 2, name: "logo", age: 25 },
    //   { id: 3, name: "naksha", age: 25 },
    //   { id: 4, name: "dhivi", age: 25 },
    //   { id: 5, name: "mani", age: 34 },
    //   { id: 6, name: "kani", age: 30 },
    //   { id: 7, name: "ada", age: 37 },
    //   { id: 8, name: "nani", age: 32 },

    // ])
  // const [state, setState] = useState(14)
  // const handleClick = () => {
  //   setState(state + 1)
  // }
  //   const otherClick = () => {
  //   setState(state - 1)
  // }
  // const [name,setName]=useState("")
  // function handleClick (){
  //   alert("call from event")
  // }
  // const[state,setState]=useState("")
  const [name,setName]=useState("")
  function handleClick(data){
    setName(data)
  }

  return (
    <>
      {/* <Child name={"abinaya"} age={25} number={2345667789} />
      <Child name={"ruba"} age={17} number={3788545467} />
      <div> {state}</div>
      <button onClick={handleClick}>Increment</button>
      <button onClick={otherClick}>decrement</button> */}
      {/* <User users={users} /> */}
      {/* <button onClick={handleClick}>event trigger</button>
      <br/>
      <input
      type="text"
      value={name}onChange={(e)=> setName(e.target.value)}
/>
<p>hello,{name}</p>      
      </> */}
      {/* <Child state={state}/>
      <Child1 setState={setState}/> */}
{/* <div className="container"></div>
      <div className="row mt-8"></div>
      <div className="col-12 text-center mt-5"></div>
      <Child onButtonClick={handleClick}name={name}/>
    <h1>{name}</h1> */}


    
</>
  )
}

export default App
