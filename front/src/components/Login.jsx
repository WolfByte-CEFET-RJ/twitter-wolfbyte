import { useEffect, useRef, useState } from 'react';

function Login({ onFechar }) {

    const dialogRef = useRef(null);
    const [modoCadastro, setModoCadastro] = useState(false);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog.open) {
            dialog.showModal();
        }

        dialog.addEventListener('close', onFechar);

        return () => dialog.removeEventListener('close', onFechar);
    }, [onFechar]);

    function alterarModoCadastro() {
        setModoCadastro(!modoCadastro);
        setMensagem('');
    }

    function realizarCadastro(event) {
        event.preventDefault();

        const dados = new FormData(event.currentTarget);
        const senha = dados.get('senha');
        const confirmarSenha = dados.get('confirmarSenha');

        if (senha !== confirmarSenha) {
            setMensagem('As senhas precisam ser iguais.');
            return;
        }

        event.currentTarget.reset();
        setModoCadastro(false);
        setMensagem('Cadastro realizado! Agora voce ja pode entrar.');
    }

    return (
        <dialog ref={dialogRef}>
            <div className="login">

                <h1>{modoCadastro ? 'Crie sua conta' : 'Login'}</h1>

                {modoCadastro ? (
                    <form onSubmit={realizarCadastro}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite seu nome"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            required
                        />

                        <input
                            type="password"
                            name="senha"
                            placeholder="Crie uma senha"
                            minLength="6"
                            required
                        />

                        <input
                            type="password"
                            name="confirmarSenha"
                            placeholder="Confirme sua senha"
                            minLength="6"
                            required
                        />

                        <button type="submit">
                            Criar conta
                        </button>
                    </form>
                ) : (
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            required
                        />

                        <input
                            type="password"
                            name="senha"
                            placeholder="Digite sua senha"
                            required
                        />

                        <a href="#recuperar-senha" className="link-formulario">
                            Esqueci minha senha
                        </a>

                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                )}

                {mensagem && (
                    <p className="mensagem-formulario" role="status">
                        {mensagem}
                    </p>
                )}

                <a
                    href="#cadastro"
                    className="link-formulario"
                    onClick={(event) => {
                        event.preventDefault();
                        alterarModoCadastro();
                    }}
                >
                    {modoCadastro ? 'Ja possuo uma conta' : 'Nao possuo uma conta'}
                </a>

                <button
                    type="button"
                    className="botao-fechar"
                    onClick={() => dialogRef.current.close()}
                >
                    Fechar
                </button>
            </div>
        </dialog>
    );
}

export default Login;
