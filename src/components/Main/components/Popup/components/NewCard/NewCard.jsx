import { useState } from "react";

export default function NewCard(props) {
  const { onAddPlaceSubmit } = props;

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit() {
    event.preventDefault();

    onAddPlaceSubmit({ name, link });
  }

  return (
    <>
      <form
        className="popup__form popup-new-local__form"
        onSubmit={handleSubmit}
      >
        <label className="popup-new-local__label"></label>
        <input
          placeholder="Titulo"
          className="popup__input popup-new-local__input-name"
          type="text"
          name="name"
          id="new-local"
          minLength="2"
          maxLength="30"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <span className="popup__span" id="new-local-error"></span>
        <label className="popup-new-local__label"></label>
        <input
          placeholder="Link de imagem"
          className="popup__input popup-new-local__input-image"
          type="url"
          name="link"
          id="link"
          required
          onChange={(event) => setLink(event.target.value)}
        />
        <span className="popup__span" id="link-error"></span>
        <button className="popup__submit-button popup__button" type="submit">
          Criar
        </button>
      </form>
    </>
  );
}
