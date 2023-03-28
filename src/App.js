import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./pages/Prueba";
import NotFound from "./pages/NotFound";
import { CarritoContextProvider } from "./context/carritoContext";
import CarritoContainer from "./components/CarritoContainer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  },[]);
  return (
    <div className="container">
      {isLoading ? <Loader />: 
      <CarritoContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos al Túnel del Cómic"} />}
          />
          <Route path="/detalle/:idProducts" 
          element={<ItemDetailContainer />} />

          <Route
            path="/editorial/:idEditorial"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />

          <Route path="/prueba" element={<Prueba />} />

          <Route path ="/carrito" element={<CarritoContainer />}> </Route>
          
          <Route path="/checkout/:id" element={<h3>¡Su compra ha sido realizada con éxito!</h3>}> </Route>

          <Route path="/error" element={<NotFound/>}></Route>
        
        </Routes>
      <Footer/>
      </BrowserRouter>
      </CarritoContextProvider>
      }
    </div>
  );
}

export default App;
