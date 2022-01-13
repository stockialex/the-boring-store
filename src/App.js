import ItemCard from './components/ItemCard/ItemCard';
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting='Este es el ItemListContainer' />
      {/* <ItemCount 
        stock={10} 
        title='Flamethrower' 
        description='Puede que el apocalipsis zombie aun no haya llegado, pero siempre nos
        estamos preparando para el futuro.'
      /> */}
      <ItemCard 
        stock={10}
        title='Flamethrower'
        description='Puede que el apocalipsis zombie aun no haya llegado,
        pero estamos nos estamos preparando para el futuro.'
      />
    </div>
  );
}

export default App;
