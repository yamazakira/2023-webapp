import { useState } from "react";
import "./App.css";

// componente REact vazio
const Componente = () => null;

// componente React
const Botao = (props: any) => {
  const titulo = props.titulo ? props.titulo : "Texto padrão";
  // const estado = useState(2);
  return (
    <button onClick={props.onClick}>
      {titulo}
    </button>
  );
}

const App = () => {
  const [contador, contar] = useState(10)
  return (
    <>
      <div>
        <h1>Meu contador está em {contador}</h1>
      </div>
      <div className="card">
        <Botao titulo="Aumentar" onClick={() => contar(contador + 1)} />
        <Botao titulo={"Diminuir"} onClick={() => contar(contador - 1)} />
        <Botao titulo="Zerar" onClick={() => contar(0)} />
        <Componente />
      </div>
    </>
  );
}

export default App;