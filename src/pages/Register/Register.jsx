import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header
        rightElement={
          <Link className="header__container" to="/signin">
            Faça o login
          </Link>
        }
      />
      <div className="register">
        <div className="register__container">
          <h1>Inscrever-se</h1>
          <input
            className="register__input"
            type="email"
            placeholder="E-mail"
            name="email"
            value={data.email}
            onChange={handleRegister}
          />
          <input
            className="register__input"
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleRegister}
          />
          <button className="register__submit-button" type="submit">
            Inscrever-se
          </button>
          <p>
            Já é um membro? <Link to="/signin">Faça login aqui</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
