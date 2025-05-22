import React from 'react'

function Form() {
  return (
    <>
      <div>
        <div>login form</div>
        <label>name:</label>
        <input
          type="text"
          name="name" />
      </div>
      <div>
        <label>email:</label>
        <input
          type="email"
          name="email" />
      </div>
      <div>
        <label>class:</label>
        <input
          type="text"
          name="name" />
      </div>
      <div>
        <label>age:</label>
        <input
          type="text"
          name="name" />
          <div>
          <button>submit</button></div>
      </div>
    </>

  )
}

export default Form