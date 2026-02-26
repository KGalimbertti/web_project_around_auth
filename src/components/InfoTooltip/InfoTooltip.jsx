const InfoTooltip = ({ info, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="info-tooltip">
      <div className="info-tooltip__container">
        <span className="info-tooltip__text">{info}</span>
        <button
          className="info-tooltip__close-button"
          onClick={() => onClose}
        ></button>
      </div>
    </div>
  );
};

export default InfoTooltip;
