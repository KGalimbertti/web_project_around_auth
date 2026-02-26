import React from "react";
import checkImage from "../../images/Check-image.png";
import uncheckImage from "../../images/Uncheck-image.png";

const InfoTooltip = ({ info, isVisible, onClose, tooltipType }) => {
  if (!isVisible) return null;

  return (
    <div className="info-tooltip">
      <div className="info-tooltip__container">
        {tooltipType === "success" ? (
          <img src={checkImage} alt="Check mark" />
        ) : (
          <img src={uncheckImage} alt="Uncheck mark" />
        )}
        <span className="info-tooltip__text">{info}</span>
        <button
          className="info-tooltip__close-button"
          onClick={() => onClose()}
        ></button>
      </div>
    </div>
  );
};

export default InfoTooltip;
