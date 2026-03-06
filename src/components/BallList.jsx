import React, { Component } from 'react'
import Ball from './Ball'
import { getRandom } from '../utils'
/**
 * 经过一段时间，产生一个移动的小球，各种数据随机
 */
export default class BallList extends Component {

    constructor(props){
        super(props)
        this.state = {
            ballLists:[] // 存放小球的React dom 数组
        }
    }

    // 组件已挂载
    componentDidMount(){
        // 一秒钟产生一个小球
        const timer =setInterval(()=>{
            const info = {
                left: getRandom(50,500),
                top: getRandom(50,500),
                xSpeed:getRandom(100,200),
                ySpeed:getRandom(200,400),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
            }
            this.setState({
                ballLists: [...this.state.ballLists,info]
            },()=>{
                if(this.state.ballLists.length === 10){
                    clearInterval(timer)
                }
            })
        },1000)
    }

  render() {
    const balles = this.state.ballLists.map((item,index)=><Ball key={index} {...item}/>)
    return (
      <>
      {balles}
      </>
    )
  }
}
