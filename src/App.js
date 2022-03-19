// import logo from './logo.svg';
import './App.css';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Listado de articulos"}/>
      {/* <header className="App-header"> 
      </header> */}
    </div>
  );
}

export default App;
