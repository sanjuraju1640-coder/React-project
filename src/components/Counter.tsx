import {useState} from 'react';
function Counter(){
    const[count,setCount]=useState(0);
     function handleAdd() {
    setCount(count + 1);
  }

  function handleRemove() {
    setCount(count - 1);
  }
return(
     <div>
      <h2 style={{ color: count < 0 ? "red" : count > 0 ? "green" : "black" }}>
        Count: {count}
      </h2>

      <button onClick={handleAdd}>+ Add</button>

      <button onClick={handleRemove}>- Remove</button>
    </div>
  );
}

export default Counter;