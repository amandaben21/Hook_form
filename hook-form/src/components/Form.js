import React, { useState } from 'react';
    
const Form = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_Password] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object
        const newUser = { username, email, password, confirm_password};
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
        setConfirm_Password("");

    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirm_password} onChange={ (e) => setConfirm_Password(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>

            {/* Displaying our ( state ) live typying */}
            <h1>Display</h1>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
            <h3>{confirm_password}</h3>
        </div>
    );
        
};
    
export default Form;