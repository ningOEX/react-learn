import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <NavLink to="/">
        <button>首页</button>
      </NavLink>
      <h1>404 - 页面未找到</h1>
    </div>
  );
}
