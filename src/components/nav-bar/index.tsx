import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'antd';
import "./style.css"
export default function NavBar() {
  return (
    <div className="nav">
      <NavLink to="home"><Button type="primary">首页</Button></NavLink>
    </div>
  );
}
