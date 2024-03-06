import './Home.css'
import Atracao from '../../Components/Atracao/Atracao';
import Welcome from '../../Components/welcome/Welcome';
import Navegacao from '../../Components/Navegacao/Navegacao';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }

    return (
        <>
            <Navegacao></Navegacao>
            <Welcome />
            <div className="ctn-atracoes">
                {componentes}
            </div>
        </>
    );
}

export default Home;