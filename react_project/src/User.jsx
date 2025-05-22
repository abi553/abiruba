import React from 'react'

function User({ users }) {

    return (

        <div>
            {users.map((users) => (
                <ol key={users.id}>
                   <li>{users.name}</li>
                   <li> {users.age}</li> 

                </ol>
            ))}           
            </div>
    )
}

export default User