import { useContext } from "react";
import heart from "../../images/like-button.png";
import bin from "../../images/delete-button.png";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Card = (props) => {
  const { name, link, isLiked } = props.card;
  const imageComponent = { children: <ImagePopup card={props.card} /> };
  const { handlePopupImage, onCardDelete, onCardLike } = props;
  const { currentUser } = useContext(CurrentUserContext);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button-active" : ""
  }`;
  return (
    <>
      <div className="card">
        <button
          className="card__delete-teste"
          onClick={() => onCardDelete(props.card)}
        >
          <img className="card__delete-button" src={bin} alt="Lixeira" />
        </button>
        <img
          className="card__image"
          onClick={() => handlePopupImage(imageComponent)}
          src={link}
          alt={name}
        />
        <div className="card__description">
          <p className="card__paragraph">{name}</p>
          <img
            className={cardLikeButtonClassName}
            onClick={() => onCardLike(props.card)}
            src={heart}
            alt="Coração"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
