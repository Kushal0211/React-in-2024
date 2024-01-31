import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent mounted")
    };

    componentDidUpdate() {

        // no use as we are not updating any state variables
        console.log("parent updated")
    }

    render() {
        console.log("Parent rendered");
        return (
            <div>
                <p className="team-title">Meet Our Amazing Team Behind this Project </p>
               
                <div className="team-container">
                    
                    <div className="team-card">
                        <UserClass name={"Kushal Pandita"} />
                    </div>

                    <div className="team-card">
                        <UserClass name={"Kushal Pandita"} />
                    </div>

                </div>
            </div>
        )
    };
};



export default About;
