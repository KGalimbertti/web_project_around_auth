export default function Popup(props) {
  const { title, children, onClose } = props;
  return (
    <>
      <div className="popup">
        <div className={`${title ? "popup__container" : "popup__image"}`}>
          <button
            aria-label="Close modal"
            className="popup__close-button"
            type="button"
            onClick={onClose}
          ></button>
          {title && <h2 className="popup__title">{title}</h2>}

          {children}
        </div>
      </div>
    </>
  );
}
