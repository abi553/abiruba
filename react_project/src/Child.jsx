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
    <div className='card-container'>
      <div className="row">
      {users.map((user) => (
        <div key={user.id} className="col-3">
          <div  className="card" style={{ width:"18rem;" }}>
            <img src={user.images} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{user.title}</h5>
               <p className="card-text">some quick example text to build on the card title and make up the build of the content.</p>  
            <a href="#"className="btn btn-primary">go some where</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Child