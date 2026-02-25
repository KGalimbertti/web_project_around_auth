const Register = () => {
  return (
    <div className="register">
      <div className="register__container">
        <h1>Inscrever-se</h1>
        <input className="register__input" type="text" placeholder="E-mail" />
        <input
          className="register__input"
          type="password"
          placeholder="Senha"
        />
        <button className="register__submit-button" type="submit">
          Inscrever-se
        </button>
        <p>
          Já é um membro? <a href="/login">Façao login aqui</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
