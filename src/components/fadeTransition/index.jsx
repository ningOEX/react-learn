import React from 'react'
import {CSSTransition} from "react-transition-group"
import "./index.css"

/**
 * 淡入淡出过渡
 * @param {*} props 
 * @returns 
 */
export default function FadeTransition(props) {
    const mergedProps = {
        timeout: 500,
        classNames: "fade",
        ...props
    }
    document.documentElement.style.setProperty('--fade-duration', `${mergedProps.timeout}ms`);
  return (
    <CSSTransition {...mergedProps}/>
  )
}

