import React from 'react'

 const ChildComponentF = (props) => {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>greet parents</button>
        </div>
    )
}
export default ChildComponentF;
