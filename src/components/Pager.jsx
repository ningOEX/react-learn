import React from 'react'
import "./Pager.css"
/**
 * 分页组件
 * 1. current 当前页
 * 2. total 总数
 * 3. limit 页容量
 * 4. paneNumber 数字页码最多显示多少个
 * 5. onClickPage 点击页码事件
 * @param {*} props 
 * @returns 
 */
export default function Pager(props) {
    if(props.total === 0) return
    const pageNumber = getPaperNumber(props) // 总页码
    const min = getMinNumber(props) // 最小数字
    const max = getMaxNumber(min,pageNumber,props) // 最大数字
    const numbers = []
    for (let i = min; i <= max; i++) {
        numbers.push(<span onClick={()=>{toPage(i,props)}} key={i} className={i === props.current ? 'item active' : 'item'}>{i}</span>)
    }

  return (
    <>
      <span onClick={()=>{toPage(1,props)}} className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
      <span onClick={()=>{toPage(props.current-1 <= 1 ? 1 : props.current-1,props)}} className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
      {/* 页码 */}
      {numbers}

      <span onClick={()=>{toPage(props.current + 1 >= pageNumber ? pageNumber : props.current + 1,props)}} className={props.current === pageNumber ? 'item disabled' : 'item'}>下一页</span>
      <span onClick={()=>{toPage(pageNumber,props)}} className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>
      <span className='current'>{props.current}</span>
      /
      <span>{pageNumber}</span>
    </>
  )
}

/**
 * 计算最小数字
 */
function getMinNumber(props){
    let min = props.current - Math.floor(props.paneNumber / 2)
    if(min < 1) {
        min = 1
    }
    return min
}

/**
 * 计算最大数字
 * @param {*} min 
 * @param {*} pagerNumber 
 * @param {*} props 
 */
function getMaxNumber(min,pageNumber,props){
    let max = min + props.paneNumber - 1;
    if(max > pageNumber) {
        max = pageNumber 
    }
    return max
}


/**
 * 跳转指定页码
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target,props){
    // 目标页 等于当前页 不做操作
    if(props.current === target) return
    props.onClickPage && props.onClickPage(target)
}

/**
 * 计算总页数
 */
function getPaperNumber(props){
    return Math.ceil(props.total / props.limit)
}