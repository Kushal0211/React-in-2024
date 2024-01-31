import { useEffect } from "react";

const Contact = () => {

    useEffect(()=> {
        
        console.log("Use effect directly called")
        const timer = setInterval(() => {
            console.log("timer called - contact us");
        },1000);


        return () => {
            clearInterval(timer);
        }
    },[])


    return (
        <div>
            <h1>Contact Us</h1>
            <h1>Contact Us</h1>
            <h1>Contact Us</h1>
            <p> This is Contact Us page..</p>
            <h2>Page is In Process</h2>
        </div>
    );
};

export default Contact;