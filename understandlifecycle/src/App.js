import React from "react";
import TimerOne from "./TimerOne.js"

class App extends React.Component {

  constructor(){
    super();
    this.state={
      mount:false
    }
  }
  handleMount=()=>{
    this.setState((prevState) =>({mount: !prevState.mount}))
  }

  render(){
  return (
    <>
    <button onClick={this.handleMount}>{this.state.mount? "UNMOUNT" : "MOUNT"}</button>
    {this.state.mount? <TimerOne/>:null}
    </>
    
  );
}
}

export default App;
