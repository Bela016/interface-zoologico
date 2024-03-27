import Navegacao from '../../Components/Navegacao/Navegacao';
import CardAnimal from '../../Components/cardAnimal/CardAnimal';
import './Animais.css'

function Animais() {
    const componentes = [];
    for (let i = 0; i <= 7; i++) {
        componentes.push(<CardAnimal key={i} />)
    }

    return(
        <>
            <Navegacao />
            
            <div className="ctn-cardanimais">
                {componentes}
            </div>
        </>
    );
}

export default Animais