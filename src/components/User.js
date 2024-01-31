import { useState } from "react";

const User = () => {

    const [count] = useState(0);

     return (
        <div className="user-card">
            <h1>Count: {count} </h1>
            <h1>Name : Kushal</h1>
            <h2>Role : SWE</h2>
            <h3>Age  : 22</h3>
        </div>
     )
}

export default User;