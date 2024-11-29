import React from "react";
class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"ComponentA"
        }
        console.log("ComponentA Constructor");
    }

    static getDerivedStateFromPops(){
        console.log("ComponentA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount");
    }
    render(){
        console.log("ComponentB render");
        return (<h2>{this.state.name}</h2>)
    }
}
export default ComponentB;