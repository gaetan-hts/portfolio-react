import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
      {props.bot && (
        <NavLink to={props.bot} className="bot hover">
          <span>&#10093;</span>
        </NavLink>
      )}
      {props.top && (
        <NavLink to={props.top} className="top hover">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
