function MyInput() {
    function handleChange(event:any) {
        console.log(event.target.value)

    }
    return(
        <input type="text"onChange={handleChange}/>
    )
}
export default MyInput()