import { useReducer } from 'react';
import './style.css';

// Definindo a interface para o estado do componente
interface State {
  count: number;
}

// Definindo os tipos de ações que podem ser realizadas no estado
type Action = { type: 'ADD'; payload: number } | { type: 'SUBTRACT'; payload: number };

// Função do reducer que irá atualizar o estado com base nas ações recebidas
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Caso a ação seja "ADD", adiciona o payload ao count do estado atual
    case 'ADD':
      return { count: state.count + action.payload };
    // Caso a ação seja "SUBTRACT", subtrai o payload do count do estado atual
    case 'SUBTRACT':
      return { count: state.count - action.payload };
    // Caso não haja uma ação correspondente, retorna o estado atual
    default:
      return state;
  }
};

// Componente ChallengeTwo - Gerencia o estado usando useReducer
export default function ChallengeTwo() {
  // Utilizando o hook useReducer para gerenciar o estado com o reducer definido
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Função para lidar com o clique no botão "Add"
  const handleAdd = () => {
    const value = parseInt((document.getElementById('input-value') as HTMLInputElement).value);
    // Verifica se o valor do input é um número válido, caso não seja, adiciona 1 ao estado
    if (isNaN(value)) {
      dispatch({ type: 'ADD', payload: 1 });
    } else {
      // Caso seja um número válido, adiciona o valor do input ao estado
      dispatch({ type: 'ADD', payload: value });
    }
  };

  // Função para lidar com o clique no botão "Subtract"
  const handleSubtract = () => {
    const value = parseInt((document.getElementById('input-value') as HTMLInputElement).value);
    // Verifica se o valor do input é um número válido, caso não seja, subtrai 1 do estado
    if (isNaN(value)) {
      dispatch({ type: 'SUBTRACT', payload: 1 });
    } else {
      // Caso seja um número válido, subtrai o valor do input do estado
      dispatch({ type: 'SUBTRACT', payload: value });
    }
  };

  return (
    <div className="challengeTwo">
      <h1>Desafio 2: Gerenciamento de Estado</h1>
      <div>
        <input type="number" id="input-value" />
        <button onClick={handleAdd}>Adicionar</button>
        <button onClick={handleSubtract}>Subtrair</button>
      </div>
      <div data-testid="results">Result: {state.count}</div>
    </div>
  );
}
