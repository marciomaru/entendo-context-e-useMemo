import * as React from 'react';
import { Quotes } from './Quotes';
import './style.css';
import { useContext } from 'react';
import { QuotesContext } from './Quotes';

export default function App() {
  const quote = useContext(QuotesContext);
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState('algo');

  function handleN() {
    n === 0 ? setN(1) : setN(0);
  }
  function handleM() {
    n === 0 ? setM('tambem') : setM('algo');
  }

  function mostra() {
    console.log(quote.other);
    return quote.other;
  }

  React.useEffect(() => {
    console.log('renderizou novamente');
  }, [n]);
  React.useEffect(() => {
    console.log('renderizou M novamente');
  }, [m]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{quote.quoteList[n]}</p>
      <button onClick={handleN}>Muda frase</button>
      <button onClick={handleM}>Muda M</button>
      <p>{m}</p>
      <p>{React.useMemo(() => mostra(), [m])}</p>
    </div>
  );
}
