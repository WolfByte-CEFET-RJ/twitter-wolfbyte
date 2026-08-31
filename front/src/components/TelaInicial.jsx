function TelaInicial({ onContinuar }) {

    return (
        <div className="inicio"> {/*usamos classname no jsx porque class é uma palavra reservada no java script*/}

            <h1>Bem-vindo!</h1>

            <p>
                Seja bem-vindo ao CloneX!
            </p>

            <button onClick={onContinuar}>
                Continuar
            </button>

        </div>
    );
}

export default TelaInicial;