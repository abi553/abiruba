// import React from 'react'
// import Child1 from './child1'

// function Child({name, age,number}) {
//   return (
//     <>
//     <div>{ name}</div> 
//     <div>{ age}</div>
//     <div>{number}</div>
//     </>
//   )
// }

// export default Child

// 
import React from 'react'

function Child({onButtonClick,name}) {
  const sentData=()=>{
    onButtonClick("this the message from child!!!!!!")

  }
  return (
    <div><button onClick={sentData} className='btn btn-danger'>clickMe!</button>
    </div>
  )
}

export default Child