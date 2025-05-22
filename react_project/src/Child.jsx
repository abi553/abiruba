import React from 'react'

function Child({name, age,number}) {
  return (
    <>
    <div>{ name}</div> 
    <div>{ age}</div>
    <div>{number}</div>
    </>
  )
}

export default Child