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
// import React from 'react'

// // function Child({onButtonClick,name}) {
// //   const sentData=()=>{
// //     onButtonClick("this the message from child!!!!!!")

//   }
//   return (
//     <div><button onClick={sentData} className='btn btn-danger'>clickMe!</button>
//     </div>
//   )
// }


import React from 'react'

function Child({ users }) {
  return (
    <div>
      {users.map((user) => (
       <div key={user.id} className="card" style={{width: "18rem;"}}>
  <img src={user.images} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{user.title} </p>
  </div>
</div>
      ))}
    </div>
  )
}

export default Child