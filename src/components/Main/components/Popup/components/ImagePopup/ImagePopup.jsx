export default function ImagePopup(props) {
  const { card } = props;
  console.log("cards: ", card, "props: ", props);
  console.log("cards link: ", card.link);
  return (
    <div className="popup__image-inner-container">
      <img className="popup__image" src={card.link} alt={card.name} />
      <p className="popup__image-description">{card.name}</p>
    </div>
  );
}
