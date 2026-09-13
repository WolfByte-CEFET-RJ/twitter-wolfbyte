import { useState } from 'react';

import Login from './Login';

function TelaInicial() {

    const [loginAberto, setLoginAberto] = useState(false);

    return (
        <div className="inicio">

            <h1>Bem-vindo!</h1>

            <p>
                Seja bem-vindo ao CloneX!
            </p>

            <button onClick={() => setLoginAberto(true)}>
                Continuar
            </button>

            {loginAberto && (
                <Login onFechar={() => setLoginAberto(false)} />
            )}

        </div>
    );
}

export default TelaInicial;
