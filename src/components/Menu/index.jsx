import React from "react";
import { NavLink } from "react-router";
import { IoPeopleSharp,IoPersonAdd,IoBrowsersSharp,IoHome,IoAddCircle } from "react-icons/io5";

import "./index.css";
export default function Menu() {

  const menu = [
    {icon:<IoHome/>,label:"首页",path:"/"},
    {icon:<IoPeopleSharp/>,label:"学生列表",path:"/student"},
    {icon:<IoPersonAdd/>,label:"添加学生",path:"/student/add"},
    {icon:<IoBrowsersSharp/>,label:"课程列表",path:"/course"},
    {icon:<IoAddCircle/>,label:"添加课程",path:"/course/add"}
  ]

  return (
    <ul className="menu-content">
      {menu.map(item=><li key={item.path}><NavLink
        to={item.path}
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        {item.icon}
       <span className="menu-label">{item.label}</span>
      </NavLink></li>)}
    </ul>
  );
}
