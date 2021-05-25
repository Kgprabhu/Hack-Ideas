import React from "react";

import './Popup.css';

export const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.onClose}>x</span>
        {props.children}
      </div>
    </div>
  );
};
 
