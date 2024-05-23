import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Página Sobre a Empresa</h1>
            <span>Campo Real :3</span>
            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Sobre;