import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";

import Home from "./views/Home";
import Edukasi from "./views/Edukasi";
import Katalog from "./views/Katalog";
import Log from "./views/Log";
import Detail from "./views/Detail";
import NotFound from "./views/NotFound";
import DetailEdukasi from "./views/DetailEdukasi";
import DetailKatalog from "./views/DetailKatalog"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/edukasi/:id" element={<DetailEdukasi />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/log" element={<Log />} />
        <Route path="/log/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/katalog/:id" element={<DetailKatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;