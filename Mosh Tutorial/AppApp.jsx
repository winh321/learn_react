
import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Button from "./Button";
import { useEffect, useState } from "react";

function AppApp(){

  // Make the city list
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Myingyan"
];

// call the new use state
const [alertVisible,setAlertVisible] = useState(false)

// print the select item
function SelectItem(item){
  console.log(item)
  }

  //check the toggle 
  function AlertToggle(){
    if(alertVisible){
      setAlertVisible(false)
    }else{
      setAlertVisible(true)
    }
  }

//return the widget data
  return <>
   
  <ListGroup items={items} title="Cities" onSelect={SelectItem} />
  <Alert >Hi , I am alert Message <button>Ok Naw</button></Alert>
  <Button onClick={()=>{
    console.log("My button")
  }} color="success">One</Button>

  {alertVisible && <Alert onClick={()=>{AlertToggle()}}>My Alert</Alert>}

  <button onClick={()=>{
   AlertToggle()
    
  }} color="warning">Show Disimiss</button>

  
  </>
}
export default AppApp