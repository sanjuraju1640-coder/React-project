import {useState} from 'react'
function Light() {
    const [isOn, setIsOn] = useState(false)
    function handleToggle() {
        setIsOn(!isOn)
}
return (
    <div> 
        <p>Light is: {isOn ? "ON" : "OFF"}</p>
         <button onClick={handleToggle}>Toggle Light</button>
         </div>
)
}
         export default LightSwitch;