import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      left: this.props.number,
    };
  }
  // 组件挂载完成后启动定时器
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(
        {
          left: this.state.left - 1,
        },
        () => {
          // 更新设置状态，触发自动的重新渲染
          if (this.state.left === 0) {
            console.log("清除计时器", this.state.left);
            clearInterval(this.timer); // 清除计时器
          }
        },
      );
    }, 1000);
  }
  render() {
    return (
      <>
        <h1>倒计时:{this.state.left}</h1>
      </>
    );
  }
}
