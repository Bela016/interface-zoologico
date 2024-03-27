import './Home.css'
import Atracao from '../../Components/Atracao/Atracao';
import Welcome from '../../Components/welcome/Welcome';
import Navegacao from '../../Components/Navegacao/Navegacao';
import ImgCarrossel from '../../Components/imgCarrossel/Imgcarrossel';
function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }

    return (
        <>
            <Navegacao></Navegacao>
            <ImgCarrossel></ImgCarrossel>
            <Welcome />
            <div className="ctn-atracoes">
                {componentes}
            </div>
        </>
    );
}

export default Home;