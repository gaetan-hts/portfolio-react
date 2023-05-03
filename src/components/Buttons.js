import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    setEndX(event.touches[0].clientX);
    setEndY(event.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const deltaX = startX - endX;
    const deltaY = startY - endY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 50 && props.right) {
        // Swipe gauche détecté
        window.location.href = props.right;
      } else if (deltaX < -50 && props.left) {
        // Swipe droite détecté
        window.location.href = props.left;
      }
    } else {
      if (deltaY > 50 && props.bot) {
        // Swipe haut détecté
        window.location.href = props.bot;
      } else if (deltaY < -50 && props.top) {
        // Swipe bas détecté
        window.location.href = props.top;
      }
    }
    setStartX(0);
    setEndX(0);
    setStartY(0);
    setEndY(0);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="scroll-bottom"
    >
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
