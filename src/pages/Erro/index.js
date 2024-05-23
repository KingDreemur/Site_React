import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h2>Opa! Parece que essa página não existe :C</h2>

            <span>Encontramos essas páginas aqui:</span>
            <br><Link to="/">Home</Link></br>
            <br><Link to="/sobre">Sobre</Link></br>
            <br><Link to="/contato">Contato</Link></br>
        </div>
    );
}

export default Erro;