
import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This is paragraph</p>}
    </div>
  );
}

export default ToggleMessage;

