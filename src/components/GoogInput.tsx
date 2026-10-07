import {useState} from 'react';

function GoodInput() {
    const [text , setText]=useState("")
    function handleChange(event){
    setText(event.target.value) ;

}
return(
    <input
    type="text"
    value={text}
    onChange={handleChange}
    />
);
}
export default GoodInput;
