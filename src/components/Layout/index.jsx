import React, { Component } from 'react'
import './index.css'
import PropTypes from "prop-types";
import {Outlet} from "react-router-dom"

export default class Layout extends Component {

    state = {
        header: PropTypes.element,
        aside:PropTypes.element,
    }
  render() {
    return (
      <div className='container'>
        <header className="header">{this.props.header}</header>
        <div className="body">
            <aside className="aside">{this.props.aside}</aside>
            <div className="main"><Outlet/></div>
        </div>
      </div>
    )
  }
}
