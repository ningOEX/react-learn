import React, { Component } from "react";
import "./Ball.css";

/**
 * 移动的小球
 */
export default class Ball extends Component {
    constructor(props) {
        super(props);
        // 初始化状态
        // 属性中分别需要传递横纵坐标上的速度，每秒移动的像素值
        //  props.xSpeed  props.ySpeed
        this.state = {
            left: props.left || 0, // 横坐标初始值
            top: props.top || 0, // 纵坐标初始值
            xSpeed: props.xSpeed, //
            ySpeed: props.ySpeed,
        };
        
    }

    // 组件挂载完成后启动定时器
    componentDidMount(){
        const duration = 16; // 间隔的毫秒数
        setInterval(() => {
            // 计算每秒移动的距离
            const xDis = (this.state.xSpeed * duration) / 1000;
            const yDis = (this.state.ySpeed * duration) / 1000;

            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;

            // 横坐标
            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed,// 速度取反
                });
            } else if (
                newLeft >=
                document.documentElement.clientWidth - 100
            ) {
                newLeft = document.documentElement.clientWidth - 100
                this.setState({
                    xSpeed: -this.state.xSpeed,// 速度取反
                });
            }

            // 纵坐标
            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed, // 速度取反
                });
            } else if (
                newTop >=
                document.documentElement.clientHeight - 100
            ) {
                newTop = document.documentElement.clientHeight - 100
                this.setState({
                    ySpeed: -this.state.ySpeed,// 速度取反
                });
            }

            this.setState({
                left: newLeft,
                top: newTop,
            });
        }, duration);
    }

    render() {
        return (
            <div
                className="ball"
                style={{
                    left: this.state.left,
                    top: this.state.top,
                    background: this.props.bg || "red",
                }}
            ></div>
        );
    }
}
