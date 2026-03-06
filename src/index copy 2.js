import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import src1 from "./assets/icon_011.png"
import src2 from "./assets/icon_022.png"
import src3 from "./assets/icon_033.png"


const urls = [src1, src2, src3] // 图片数组
let index = 0 // 显示的索引

const container = document.getElementById('root') // 容器
const cls = "image"

const root = ReactDOM.createRoot(container);

let timer; // 计时器

/**
 * 根据index值，显示对应图片
 */
function render() {
  root.render(
    <React.StrictMode>
      {/* 根目录 */}
      <img src={urls[index]} className={cls} alt="" />
    </React.StrictMode>
  );
}

/**
 * 经过一段时间，切换图片
 */
function start(){
  stop()
  timer =  setInterval(()=>{
    index = (index + 1) % 3
    render()
  },2000)
}

/**
 * 停止切换
 */
function stop(){
  clearInterval(timer)
}


render()
start()


container.onmousemove = function(){
  stop()
}

container.onmouseout = function(){
  start()
}