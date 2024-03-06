// fragment nao esquecer <> </>
import './Navegacao.css'
function Navegacao() {
    return (
        <>
            <div className="barra-de-navegacao">
                <div className='logo-zoo'>
                    <h1>Zoológico</h1>
                </div>

                <div className='navbar-opcoes'>
                    <ul>
                        <li>Inicio</li>
                        <li>Os animais</li>
                        <li>Fotos</li>
                        <li>Depoimentos</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navegacao;