{/* import con repicking  per elementi libreria */ }
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="" element={<Home/>} />

          <Route path="chi-siamo" element={<ChiSiamo />} />

          <Route path="prodotti" element={<Prodotti />} />
          {/** inserisco path parametrico per  il componente product*/}
          <Route path="prodotti/:id" element={<Product />} />
          {/*Inserisco la route per la pgina errore 
      di modo che se fallisce la ricerca a cascata 
      mostri la pag di errore 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
