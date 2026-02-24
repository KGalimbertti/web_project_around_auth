const Login = () => {
  return (
    <div>
      <h1>Entrar</h1>
      <input type="text" placeholder="E-mail" required />
      <input type="password" placeholder="Senha" required />
      <button>Entrar</button>
      <p>
        Ainda não é membro? <a href="/register">Inscreva-se aqui</a>
      </p>
    </div>
  );
};

export default Login;
