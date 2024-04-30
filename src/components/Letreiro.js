import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = 'Venha estudar na Fatec!';
  const [letreiro, setLetreiro] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (indice < texto.length) {
        setLetreiro(prevLetreiro => prevLetreiro + texto[indice]);
        setIndice(prevIndice => prevIndice + 1);
      } else {
        setLetreiro(prevLetreiro => prevLetreiro.slice(0, -1));
        if (letreiro.length === 0) {
          setIndice(0);
        }
      }
    }, 250);

    return () => clearInterval(timerId);
  }, [indice, letreiro]);

  return (
    <div>
      <p>{letreiro}</p>
    </div>
  );
}

export default Letreiro;
