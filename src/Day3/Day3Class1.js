import React, { useState } from "react";

function ToogleMessage(){
    const[showMessage,setShowMessage]=useState(false);
    const toogleMessage=()=>{setShowMessage(!showMessage);};

return(
    <div>
        <button onClick={toggleMessage}>
            {showMessage ? 'Hide Message':'Show Message'}
        </button>
        {showMessage && <p>Hi! How are you!!!</p>}
    </div>
)
}
