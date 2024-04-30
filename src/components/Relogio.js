import React, { useState, useEffect } from 'react';

function Relogio() {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    function atualizarRelogio() {
      const dataAtual = new Date();
      const horas = String(dataAtual.getHours()).padStart(2, '0');
      const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
      const segundos = String(dataAtual.getSeconds()).padStart(2, '0');
      const novoHorario = `${horas}:${minutos}:${segundos}`;
      setHorario(novoHorario);
    }

    // Inicia o relógio
    const timerId = setInterval(atualizarRelogio, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timerId);
  }, []); // O array vazio como segundo argumento significa que o useEffect será executado apenas uma vez, após a montagem do componente

  return (
    <div>
      <span id="relogio">{horario}</span>
    </div>
  );
}

export default Relogio;
