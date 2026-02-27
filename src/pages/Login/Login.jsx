import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import InfoTooltip from "../../components/InfoTooltip/InfoTooltip";

const Login = ({ handleLogin, element }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [tooltip, setTooltip] = useState({
    isVisible: false,
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
    const loginFn = handleLogin || element;

    try {
      if (!loginFn) throw new Error("Função de login não fornecida");
      await loginFn({ email: data.email, password: data.password });
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
};

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
      onClose={closeTooltip}
      tooltipType={tooltip.tooltipType}
    />
  </>
);

export default Login;
