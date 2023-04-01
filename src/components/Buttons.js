import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>⮜</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>⮞</span>
        </NavLink>
      )}
      {props.bot && (
        <NavLink to={props.bot} className="bot hover">
          <span>⮟</span>
        </NavLink>
      )}
      {props.top && (
        <NavLink to={props.top} className="top hover">
          <span>⮝</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
