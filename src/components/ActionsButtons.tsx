function ActionsButtons(){
    function sayHello() {
         alert("Hello!");
}
function sayGoodbye() { 
    alert("Goodbye!");
}
function showDate() { 
    alert(new Date().toDateString());
}
return 
( <div>
     <button onClick={sayHello}>Say Hello</button>
      <button onClick={sayGoodbye}>Say Goodbye</button> 
      <button onClick={showDate}>Show Date</button>
       </div>
        );
     } 
     export default ActionsButtons;