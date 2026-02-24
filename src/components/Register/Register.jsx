const Register = () => {
  return (
    <div>
      <h1>Inscrever-se</h1>
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button>Inscrever-se</button>
      <p>
        Já é um membro? <a href="/login">Façao login aqui</a>
      </p>
    </div>
  );
};

export default Register;
