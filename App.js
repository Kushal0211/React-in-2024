// const heading = 

// React.createElement("h1", 
// {id : "heading"}, 
// "Hello Bhai, mai React hu");


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const div = React.createElement("div", {}, "I am the Div");
// const rootDiv = ReactDOM.createRoot(document.getElementById("div1"));
// rootDiv.render(div);


// const heading = React.createElement("h1", {id:"heading"},"hello duniya ");

// console.log("-------------------");
// console.log(heading)


// console.log("-------------------");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);


// root.render(heading);

// Square brackets are used here to create siblings like h1 and h2 here 
const parent = React.createElement("div", {id:"parent"}, 
React.createElement("div",{id:"child"},
[
React.createElement("h1",{id:"heading"},"I am h1 tag"),
React.createElement("h2",{id:"heading"},"I am h2 tag")])
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);