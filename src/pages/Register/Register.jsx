import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { register } from "../../utils/auth";
import InfoTooltip from "../../components/InfoTooltip/InfoTooltip";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [tooltip, setTooltip] = useState({
    isVisible: isVisible,
    info: "",
    tooltipType: "success",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (email, password) => {
    if (!email || !password) {
      return;
    }

    await register(email, password);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      await handleRegister(data.email, data.password);
      setTooltip({
        isVisible: true,
        info: "Registro realizado com sucesso.",
        tooltipType: "success",
      });
      navigate("/signin");
    } catch (error) {
      setTooltip({
        isVisible: true,
        info: "Erro ao fazer o Registro. Verifique os dados.",
        tooltipType: "error",
      });
    }
  }

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
          <form onSubmit={handleFormSubmit}>
            <input
              className="register__input"
              type="email"
              placeholder="E-mail"
              name="email"
              value={data.email}
              onChange={handleInput}
            />
            <input
              className="register__input"
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleInput}
            />
            <button className="register__submit-button" type="submit">
              Inscrever-se
            </button>
          </form>
          <p>
            Já é um membro? <Link to="/signin">Faça login aqui</Link>
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

export default Register;
