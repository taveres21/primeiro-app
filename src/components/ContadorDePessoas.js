import React, { useState } from 'react';
import ImgMan from '../images/man.jpeg'; 
import ImgWoman from '../images/woman.jpeg'; 

function ContadorDePessoas() {
    const [totalPessoas, setTotalPessoas] = useState(0);
    const [totalHomens, setTotalHomens] = useState(0);
    const [totalMulheres, setTotalMulheres] = useState(0);

    const adicionarHomem = () => {
        setTotalPessoas(totalPessoas + 1);
        setTotalHomens(totalHomens + 1);
    };

    const adicionarMulher = () => {
        setTotalPessoas(totalPessoas + 1);
        setTotalMulheres(totalMulheres + 1);
    };

    const removerHomem = () => {
        if (totalHomens > 0) {
            setTotalPessoas(totalPessoas - 1);
            setTotalHomens(totalHomens - 1);
        }
    };

    const removerMulher = () => {
        if (totalMulheres > 0) {
            setTotalPessoas(totalPessoas - 1);
            setTotalMulheres(totalMulheres - 1);
        }
    };

    const resetar = () => {
        setTotalPessoas(0);
        setTotalHomens(0);
        setTotalMulheres(0);
    };

    return (
        <div id="contador">
            <h2>Contador de Pessoas</h2>
            <button onClick={resetar}>Resetar</button>
            <p>Total de pessoas: <span id="total_pessoas">{totalPessoas}</span></p>
            <p>
                <img src={ImgMan} width="100"/>
                <br />
                Homens: <span id="total_homens">{totalHomens}</span>
                <br />
                <button onClick={adicionarHomem}>+</button>
                <button onClick={removerHomem}>-</button>
            </p>
            <p>
            <img src={ImgWoman} width="100"/>
                <br />
                Mulheres: <span id="total_mulheres">{totalMulheres}</span>
                <br />
                <button onClick={adicionarMulher}>+</button>
                <button onClick={removerMulher}>-</button>
            </p>
        </div>
    );
}

export default ContadorDePessoas;
