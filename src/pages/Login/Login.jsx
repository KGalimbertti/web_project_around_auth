import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import InfoTooltip from "../../components/InfoTooltip/InfoTooltip";
import { login } from "../../utils/auth";

const Login = ({}) => {
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth.authorize(email, password);
    login(password, email)
      .then((data) => {
        if (data.jwt) {
          setToken(data.jwt);
          setUserData(data.user);
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [tooltip, setTooltip] = useState({
    isVisible: isVisible,
    info: "",
    tooltipType: "success",
  });

  const handleLoginSubmit = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      await handleLogin(data.email, data.password);
      setTooltip({
        isVisible: true,
        info: "Login realizado com sucesso.",
        tooltipType: "success",
      });
    } catch (error) {
      setTooltip({
        isVisible: true,
        info: "Erro ao fazer login. Verifique os dados.",
        tooltipType: "error",
      });
    }
  }

  return (
    <>
      <Header
        rightElement={
          <Link className="header__container" to="/signup">
            Registrar-se
          </Link>
        }
      />
      <div className="login">
        <div className="login__container">
          <h1>Entrar</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              className="login__input"
              type="text"
              placeholder="E-mail"
              name="email"
              value={data.email}
              onChange={handleLoginSubmit}
              required
            />
            <input
              className="login__input"
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleLoginSubmit}
              required
            />
            <button className="login__submit-button" type="submit">
              Entrar
            </button>
          </form>
          <p>
            Ainda não é membro? <Link to="/signup">Inscreva-se aqui</Link>
          </p>
        </div>
      </div>

      <InfoTooltip
        info={tooltip.info}
        isVisible={tooltip.isVisible}
        onClose={() => setIsVisible(false)}
        tooltipType={tooltip.tooltipType}
      />
    </>
  );
};

export default Login;
