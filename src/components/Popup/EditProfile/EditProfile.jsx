import { useState, useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditProfile({ onProfileSubmit }) {
  const userContext = useContext(CurrentUserContext);
  const { currentUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onProfileSubmit({ name, about: description });
  };

  return (
    <form
      className="popup__form popup-profile__form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="name"></label>
      <input
        placeholder="Nome"
        className="popup__input popup__input-name"
        type="text"
        name="name"
        id="name"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__span" id="name-error"></span>
      <label className="popup__label" htmlFor="about"></label>
      <input
        placeholder="Sobre mim"
        className="popup__input"
        type="text"
        name="about"
        id="about"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__span" id="about-error"></span>
      <button className="popup__submit-button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
