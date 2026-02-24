import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar({ onUpdateAvatar }) {
  const userContext = useContext(CurrentUserContext);
  const { currentUser } = userContext;

  const [link, setLink] = useState(currentUser.link);

  const handleUpdateAvatar = (event) => {
    setLink(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(link);
  }

  return (
    <>
      <form
        className="popup__form popup-edit-avatar__form"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup-edit-avatar__label" htmlFor="link"></label>
        <input
          placeholder="Link de imagem"
          className="popup__input popup-edit-avatar__input-avatar"
          type="url"
          name="link"
          id="avatar-link"
          required
          onChange={handleUpdateAvatar}
        />
        <span className="popup__span" id="avatar-link-error"></span>
        <button className="popup__submit-button popup__button" type="submit">
          Salvar
        </button>
      </form>
    </>
  );
}
