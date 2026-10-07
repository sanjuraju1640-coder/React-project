import {useState} from 'react';
function LiveInput(){
const[text,setText] = useState("");
function handleChange(event:any) {
setText(event.target.value)
}
return(
    <div>
    <input
    type="text"
    value={text}
    onChange={handleChange} 
    placeholder="Type something..."
    />
    <p>You typed :{text},</p>
    </div>
)
}
export default LiveInput;



