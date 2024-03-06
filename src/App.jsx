import './App.css'
import Atracao from './Components/Atracao/Atracao'
import Navegacao from './Components/Navegacao/Navegacao'


function App() {
  const componentes = [];
  for (let i = 0; i <= 2; i++) {
    componentes.push(<Atracao key={i}/>)
  }

  return (
    <>{/**nao esquecer frag <> </> */}
      <Navegacao></Navegacao>
    

      <div className="ctn-atracoes">
        {componentes}
      </div>
    </>
  )
}

export default App
