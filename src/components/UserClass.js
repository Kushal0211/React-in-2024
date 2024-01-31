import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            userInfo: {
                name: "default",
                avatar_url: "hello"
            }
        };

        console.log("UserClass - child constructor");

    }

    async componentDidMount() {
        console.log("UserClass- child mounted");

        const data = await fetch("https://api.github.com/users/kushalpandita10");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        })


        // this.timer = setInterval(()=> {
        //     console.log("setInterval inside userclass- child component did mount")
        // },1000)
    }

    componentDidUpdate(){
        console.log("UserClass - child Component did update")
    }

    componentWillUnmount(){
        console.log("component will unmount called from user class - child");
        // clearInterval(this.timer);
    }

    render() {

        console.log("User Class- Child-  rendered")

        const { name, avatar_url, location, html_url  } = this.state.userInfo;
        console.log(html_url);

        return (
            <div className="user-card">
                <img
                    src={avatar_url}
                />

                <h2>{name}</h2>
                <p>{location}</p>


                <button className="github-img" 
                onClick={()=> {
                     window.location.href = html_url;
                }}
                >
                    Github Profile
                </button>
            </div>
        );
    }
}

export default UserClass;