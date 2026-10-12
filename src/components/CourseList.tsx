function CourseList() {
    const Courses = ["React", "Angular", "Vue", "Node.js"];
    <div>
            {Courses.map((lesson, index) => (
                <div key={index}>
                    <h1>{lesson}</h1>
                    <ul>
                        <li>{lesson}</li>
                    </ul>
                </div>
            ))}
        </div>
    
}
export default CourseList