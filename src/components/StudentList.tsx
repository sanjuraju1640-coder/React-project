function StudentList() {
     const students = ["Arjun Sharma", "Priya Patel", "Rahul Menon"]
      return (
         <div>
             {students.map((student) => (
                 <p>{student}</p>
                 ))} </div> 
                )
             } 
             export default StudentList;