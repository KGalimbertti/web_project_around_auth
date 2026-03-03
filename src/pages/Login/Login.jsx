import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import InfoTooltip from "../../components/InfoTooltip/InfoTooltip";
import { login } from "../../utils/auth";
import { setToken } from "../../utils/token";

const Login = ({}) => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      return;
    }
    return await login(email, password);
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

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      console.log("chegou aqui");
      const response = await handleLogin(data.email, data.password);
      console.log(response);
      if (response) {
        setToken(response.token);
        setTooltip({
          isVisible: true,
          info: "Login realizado com sucesso.",
          tooltipType: "success",
        });
      }
      navigate("/");
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
              onChange={handleLoginInput}
              required
            />
            <input
              className="login__input"
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleLoginInput}
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
        onClose={() => setTooltip((prev) => ({ ...prev, isVisible: false }))}
        tooltipType={tooltip.tooltipType}
      />
    </>
  );
};

export default Login;
