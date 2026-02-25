import logo from "../../images/Vector.png";

const Header = (isLoggedIn) => {
  return (
    <>
      <header className="header">
        <img className="header__vector" src={logo} alt="Logo Around the U.S" />
        {isLoggedIn && (
          <div className="header__container">
            <p className="header__content">kaue@gmail.com</p>
            <a className="header__button-logout">Sair</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
