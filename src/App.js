import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Category from "./components/Category/Category";
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
          {/*<Home />*/}
        </Route>

        <Route exact path='/products'>
          <h1>Productos en desarrollo</h1>
          <ItemListContainer />
        </Route>
        
        <Route exact path='/category'>
          <h1>Categorias en desarrollo</h1>
        </Route>

        <Route path='/category/:categoriaId'>
        <ItemDetailContainer />
        </Route>
        
        <Route path='/item/:'>
        <ItemDetailContainer />
        </Route>

        <Route exact path='/contact'>
          <h1>Seccion de Contact en desarrollo</h1>
          {/* <Contact /> */}
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
