import logo from './logo.svg';
import './App.css';

import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import DataListContainer from './components/DataListContainer';

function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
       <ItemListContainer datos="Datos enviados"></ItemListContainer>
      {/* <DataListContainer></DataListContainer> */}
    </div>
  );
}

export default App;
