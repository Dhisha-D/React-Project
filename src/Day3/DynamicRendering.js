import React from 'react'

function DynamicRenderingExample({isLoggedIn}){
    return(
        <div>
            {isLoggedIn ? <p>Welcome user!</p>:<p>Please Log in</p>}
        </div>
    );
}
export default DynamicRenderingExample;