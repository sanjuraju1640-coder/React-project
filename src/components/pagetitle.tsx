import { useEffect } from 'react'
 function PageTitle() { 

  useEffect(() => 
 {
     document.title = "Student Dashboard" 
 console.log("Component loaded!") 
}, []) 
return (
     <h1>Welcome to the Dashboard</h1>
)
}
export default PageTitle