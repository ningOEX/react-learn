import React, { Component } from "react";

const ctx = React.createContext();

function ChildA() {

  return (
    <div>
        <p>ChildA</p>
        
      <ctx.Consumer>
        {value => <>
            <h1>{value.name} - {value.age}</h1>
            <button onClick={value.changeAge}>changeAge+ 1</button>
        </>}
      </ctx.Consumer>
    </div>
  );
}

export default class NewContext extends Component {

  state = {
    name: "ningc",
    age: 18,
    changeAge: () => {
      this.setState({
        age: this.state.age + 1
      });
    }
  };

  render() {
    return (
      <ctx.Provider value={this.state}>
        <ChildA />
        <button onClick={this.state.changeAge}>ctx age + 1</button>
      </ctx.Provider>
    );
  }
}
