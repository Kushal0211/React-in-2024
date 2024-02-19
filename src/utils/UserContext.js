import { createContext } from "react";


const UserContext = createContext({
    userLoggedIn : "Default",  
    designation : "SWE",
});

export default UserContext;