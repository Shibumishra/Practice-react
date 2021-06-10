import React, { useState } from 'react';

const Profile = () => {
    const[loggedIn,setLoggedIn]=useState(null);
    return ( <div>
        {
            loggedIn?
            <h1>Welcome, Shibu</h1>
            :<h1>Welcome, Guest</h1>
        }
        <button onClick={()=>setLoggedIn(true)}>Logged In</button>
        <button onClick={()=>setLoggedIn(false)}>Logged Out</button>
    </div> );
}
 
export default Profile;