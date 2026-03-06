// 旧的写法（React 17及以前）
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// 新的写法（React 18）
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const a = 1234,b = 4321;
const cls = "container"
const arr = [1,2,3,4]
const span = (<span>span元素</span>)

// const obj = {
//   a:1,
//   b:2
// }

// 特殊
const contentHtml = "<h1>123123 <span>asdfasdf</span></h1> "

const newArr = new Array(20)
newArr.fill(0)

const lis = newArr.map((item,i)=> <li key={i}>{i}</li>)

const div = (<div className={cls} style={{
  fontSize:"2em"
}}>
  {/* 内容无法显示 */}
  <p>{null}</p>
  <p>{undefined}</p>
  <p>{false}</p>

  {/* 无法显示普通对象 */}
  {/* <p>{obj}</p> */}


  {/* 注释 */}
  <p>{a} * {b} = {a * b}&nbsp;{span}</p>

  <p>{arr}</p>

  {/* 遍历 */}
  <ul>
    {lis}
  </ul>
  
  {/* 特殊html */}
  <span dangerouslySetInnerHTML={{
    __html:contentHtml
  }}></span>
  

</div>)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {div}
  </React.StrictMode>
);