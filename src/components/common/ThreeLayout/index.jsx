import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
import CommonTypes from "../../../utils/commonTypes"

ThreeLayout.defaultProps = {
    minWidth: 800,
    leftWidth: 200,
    rightWidth: 200,
    gap: 0,
};

ThreeLayout.propTypes = {
    minWidth: PropTypes.number,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    gap: PropTypes.number,
    children: CommonTypes.children,
    left: CommonTypes.children,
    right: CommonTypes.children,
};

export default function ThreeLayout(props) {

  return (
    <div className='three-layout-container' style={{minWidth:props.minWidth}}>
      <div className="main">{props.children}</div>
      <div className="side-left" style={{minWidth:props.leftWidth,marginRight:props.gap}}>{props.left}</div>
      <div className="side-right" style={{minWidth:props.rightWidth,marginLeft:props.gap}}>{props.right}</div>
    </div>
  )
}
