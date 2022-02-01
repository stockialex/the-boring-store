import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <h1>Home en desarrollo</h1>
          <ItemListContainer />
        </Route>
        
        <Route path='/category/:categoryId'>
          <h1>Categorias en desarrollo</h1>
          <ItemListContainer />
        </Route>
        
        <Route path='/item/:itemId'>
          <ItemDetailContainer />
        </Route>

        <Route exact path='/cart'>
          <h1>Seccion Carrito en desarrollo</h1>
          {/* <Cart /> */}
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
