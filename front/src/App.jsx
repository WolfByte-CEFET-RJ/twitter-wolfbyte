import { useState } from 'react';

import TelaInicial from './components/TelaInicial';
import Login from './components/Login';

function App() {

    const [tela, setTela] = useState('inicio');

    return (
        <>
            {tela === 'inicio' && (
                <TelaInicial
                    onContinuar={() => setTela('login')}
                />
            )}

            {tela === 'login' && (
                <Login />
            )}
        </>
    );
}

export default App;