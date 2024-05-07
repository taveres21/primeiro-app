import ContadorDePessoas from "../components/ContadorDePessoas";
import { Link } from "react-router-dom";

export default function Atv02() {
    return (
        <>
            <h1>Atividade 2</h1>
            <ContadorDePessoas />
            <br />
            <Link to="/">Retornar a página inicial</Link>
        </>
    )
}