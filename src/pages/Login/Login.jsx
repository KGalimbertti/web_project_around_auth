import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <>
      <Header
        rightElement={<Link className="header__container">Registrar-se</Link>}
      />
      <div className="login">
        <div className="login__container">
          <h1>Entrar</h1>
          <input
            className="login__input"
            type="text"
            placeholder="E-mail"
            required
          />
          <input
            className="login__input"
            type="password"
            placeholder="Senha"
            required
          />
          <button className="login__submit-button" type="submit">
            Entrar
          </button>
          <p>
            Ainda não é membro? <a href="/register">Inscreva-se aqui</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
