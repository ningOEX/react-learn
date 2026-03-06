import React from "react";

export default class MyClassComp extends React.Component {
  render() {
    const { obj } = this.props;
    return (
      <>
        <h1>类组件</h1>
        <p>姓名:{obj.name}</p>
        <p>年龄:{obj.age}</p>
      </>
    );
  }
}
