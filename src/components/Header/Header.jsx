import logo from "../../images/Vector.png";

const Header = ({ rightElement }) => {
  return (
    <>
      <header className="header">
        <img className="header__vector" src={logo} alt="Logo Around the U.S" />
        {rightElement}
      </header>
    </>
  );
};

export default Header;
