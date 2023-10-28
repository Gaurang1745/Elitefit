import React from "react";
import "./CButton.css";
const CButton = ({ boxText, variant = "dark" }) => {
  return (
    <div className={variant === "dark" ? "search_text" : "search_text light"}>
      <p className="text">{boxText}</p>
    </div>
  );
};

export default CButton;
