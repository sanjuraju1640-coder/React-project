import { useState, useEffect } from 'react'
 function UserList() { 
    const [users, setUsers]     = useState([])
     const [loading, setLoading] = useState(true) 
     const [error, setError]     = useState("")
      useEffect(() => {
         async function fetchUsers() {
             try {
                 const response = await fetch("https://jsonplaceholder.typicode.com/users") 
                 const data     = await response.json() 
                 setUsers(data)
                  setLoading(false) 
             }
              catch (err) { 
                setError("Failed to load users. Please try again.") 
                setLoading(false)
             } 
            } 
            fetchUsers()
         }, [])
          if (loading) { 
            return <p>Loading...</p> 
        } 
        if (error) {
             return <p>{error}</p>
             }
              return ( 
              <div> 
                <h2>User List</h2>
                 {users.map((user:any) => 
                 ( <div key={user.id}>
                     <h3>{user.name}</h3>
                      <p>{user.email}</p>
                       </div>
                        ))}
                         </div>
                          ) }
                           export default UserList