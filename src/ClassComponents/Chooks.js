import React, { useState ,useEffect} from "react";
const Chooks = () => {

  const[count,setCount]=useState(0);
  const handleButton = () => {
    setCount(count + 1);
  };

  useEffect(()=>{
      document.title=`you clicked ${count} times`;
  })
  return (
    <div>
      <p>you clicked me!{count}</p>
      <button onClick={handleButton}>click me</button>
    </div>
  );
};
export default Chooks;
