import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./pages/Prueba";
import NotFound from "./pages/NotFound";
import { CarritoContextProvider } from "./context/carritoContext";
import CarritoContainer from "./components/CarritoContainer";
import {exportData, exportDataWithBatch} from "./services/firestore"

function App() {
  return (
    <div className="container">
      <button onClick={exportData}> export </button>
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
    </div>
  );
}

export default App;
