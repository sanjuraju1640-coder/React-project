function AlertButton() {
    function handleClick() { 
        alert("Welcome to React!"); 
    }
    return ( 
    <button onClick={handleClick}>
         Show Message 
         </button>
          );
         } 
         export default AlertButton;