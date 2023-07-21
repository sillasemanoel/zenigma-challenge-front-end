import { useReducer } from 'react';
import './style.css';

interface State {
  count: number;
}

type Action = { type: 'ADD'; payload: number } | { type: 'SUBTRACT'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + action.payload };
    case 'SUBTRACT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export default function ChallengeTwo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleAdd = () => {
    const value = parseInt((document.getElementById('input-value') as HTMLInputElement).value);
    if (isNaN(value)) {
      dispatch({ type: 'ADD', payload: 1 });
    } else {
      dispatch({ type: 'ADD', payload: value });
    }
  };

  const handleSubtract = () => {
    const value = parseInt((document.getElementById('input-value') as HTMLInputElement).value);
    if (isNaN(value)) {
      dispatch({ type: 'SUBTRACT', payload: 1 });
    } else {
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
