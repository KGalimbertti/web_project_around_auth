import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "../pages/Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => setCurrentUser(userData))
      .catch((error) => {
        console.log("Erro ao buscar informação do usuário", error);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((error) => {
        console.log("Erro ao tentar buscar os cards", error);
      });
  }, []);

  function handleClosePopup() {
    setPopup(null);
  }
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    if (isLiked === true) {
      await api
        .unLikeCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard,
            ),
          );
        })
        .catch((error) => console.error(error));
    } else {
      await api
        .likeCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard,
            ),
          );
        })
        .catch((error) => console.error(error));
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => {
          return cards.filter((currentCard) => currentCard._id !== card._id);
        });
      })
      .catch((error) => {
        console.log("Erro ao tentar deletar o card", error);
      });
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) =>
        console.log("Erro ao tentar criar um novo local", error),
      );
  }

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, setCurrentUser }}
      >
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main
                    cards={cards}
                    handleAddPlaceSubmit={handleAddPlaceSubmit}
                    handleCardLike={handleCardLike}
                    handleCardDelete={handleCardDelete}
                    popup={popup}
                    handleOpenPopup={handleOpenPopup}
                    handleClosePopup={handleClosePopup}
                  />
                  <Footer />
                </>
              }
            />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
