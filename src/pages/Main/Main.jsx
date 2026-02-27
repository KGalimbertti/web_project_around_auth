import { useEffect, useState, useContext } from "react";
import Card from "../../components/Card/Card";
import Popup from "../../components/Popup/Popup";
import NewCard from "../../components/Popup/NewCard/NewCard";
import EditProfile from "../../components/Popup/EditProfile/EditProfile";
import EditAvatar from "../../components/Popup/EditAvatar/EditAvatar";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import InfoTooltip from "../../components/InfoTooltip/InfoTooltip";

const Main = (props) => {
  const {
    cards,
    handleCardLike,
    handleCardDelete,
    handleAddPlaceSubmit,
    popup,
    handleOpenPopup,
    handleClosePopup,
  } = props;

  const userContext = useContext(CurrentUserContext);
  const { currentUser, setCurrentUser } = userContext;

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (avatar) => {
    (async () => {
      await api.updateAvatar(avatar).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const newCardPopup = {
    title: "New card",
    children: <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />,
  };
  const editProfile = {
    title: "Edit Profile",
    children: <EditProfile onProfileSubmit={handleUpdateUser} />,
  };
  const editAvatar = {
    title: "Edit Avatar",
    children: <EditAvatar onUpdateAvatar={handleUpdateAvatar} />,
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => setIsVisible(true);

  const onSignOut = () => {
    localStorage.removeItem("token");
    setCurrentUser({});
  };

  return (
    <>
      <Header
        rightElement={
          <div className="header__container">
            <p className="header__content">{currentUser.email}</p>
            <Link className="header__button-logout" onClick={onSignOut}>
              Sair
            </Link>
          </div>
        }
      />
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img
                className="profile__avatar-image"
                src={currentUser.avatar}
                alt="Foto de perfil"
              />
              <button
                className="profile__avatar-edit"
                onClick={() => handleOpenPopup(editAvatar)}
              ></button>
            </div>
            <div className="profile__info-content">
              <div className="profile__text">
                <span className="profile__text-name">{currentUser.name}</span>
                <span className="profile__text-description">
                  {currentUser.about}
                </span>
              </div>
              <button
                className="profile__edit-button"
                onClick={() => handleOpenPopup(editProfile)}
              ></button>
            </div>
          </div>
          <button
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </section>

        <section className="cards">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                handlePopupImage={handleOpenPopup}
                onCardDelete={handleCardDelete}
                onCardLike={handleCardLike}
              />
            );
          })}
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
        <button onClick={handleClick}>Open Tooltip</button>
        <InfoTooltip
          info={"Deu certo"}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </main>
    </>
  );
};

export default Main;
