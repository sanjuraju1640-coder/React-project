
import { useState } from "react";

function NameGreeting() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      {name === "" ? (
        <p>Please enter your name</p>
      ) : (
        <p>Hello, {name}!</p>
      )}
    </div>
  );
}

export default NameGreeting;
