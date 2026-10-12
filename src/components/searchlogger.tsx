import { useState, useEffect } from 'react'
 function SearchLogger() {
 const [searchText, setSearchText] = useState("")
  useEffect(() => { 
console.log("User is searching for:", searchText)
 }, [searchText]) 
 return ( 
    <input value={searchText}
     onChange={(event) => setSearchText(event.target.value)} 
     placeholder="Search..." 
     />
     )
     }
     export default SearchLogger