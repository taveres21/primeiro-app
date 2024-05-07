import Relogio from "../components/Relogio";
import Letreiro from "../components/Letreiro";
import { Link } from "react-router-dom";

export default function Atv01() {
    return (
        <>
            <h1>Atividade 1</h1>
            <Relogio />
            <br />
            <Letreiro />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}