// fragment nao esquecer <> </>
import './Navegacao.css';
import { Link } from 'react-router-dom';
function Navegacao() {
    return (
        <>
            <div className="barra-de-navegacao">
                <div className='logo-zoo'>
                    <h1>Zoológico</h1>
                </div>

                <div className='navbar-opcoes'>
                    <ul>
                        <li>
                            <Link style={{color:"#A7A000"}} to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link style={{color:"#A7A000"}} to="/animais">Os animais</Link>
                        </li>
                        <li>
                            <Link style={{color:"#A7A000"}} to="/fotos">Fotos</Link>
                        </li>
                        <li>
                            <Link style={{color:"#A7A000"}} to="/depoimento">Depoimentos</Link>
                        </li>
                        <li>
                            <Link style={{color:"#A7A000"}} to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navegacao;