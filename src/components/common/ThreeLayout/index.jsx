import React from 'react'
import './index.css'
export default function ThreeLayout(props) {

    const defaultProps = {
        minWidth: 800,
        leftWidth: 200,
        rightWidth: 200,
        gap: 0,
    }
    const datas = Object.assign({}, defaultProps, props)

  return (
    <div className='three-layout-container' style={{minWidth:datas.minWidth}}>
      <div className="main">{datas.children}</div>
      <div className="side-left" style={{minWidth:datas.leftWidth,marginRight:datas.gap}}>{datas.left}</div>
      <div className="side-right" style={{minWidth:datas.rightWidth,marginLeft:datas.gap}}>{datas.right}</div>
    </div>
  )
}
