import './App.css';
import Home from './pages/Home/Home';
import Animais from './pages/animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Depoimento from './pages/depoimento/Depoimento';
import Login from './pages/login/Login';
import {BrowserRouter as Roteador, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
     <Roteador>
     <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/animais' Component={Animais}/>
        <Route exact path='/fotos' Component={Fotos}/>
        <Route exact path='/depoimento'Component={Depoimento}/>
        <Route exact path='/login' Component={Login}/>
     </Routes>
     </Roteador>
    </>
  );
}

export default App