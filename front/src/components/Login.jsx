function Login() {

    return (
        <div className="login">

            <h1>Login</h1>

            <form>

                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                />

                <input
                    type="password"
                    placeholder="Digite sua senha"
                />

                <button type="submit">
                    Entrar
                </button>

            </form>

            <a href="#">
                Esqueci minha senha
            </a>

        </div>
    );
}

export default Login;