import logo from "./logo.svg";
import "./App.css";
import kurisu from "./assets/images/107935945_p1_master1200.jpg";
import Header from "./components/Header";
import AnimeList from "./pages/AnimeList";
import Home from "./pages/Favourite";
import AnimeDetail from "./pages/AnimeDetail";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourite from "./pages/Favourite";
function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Header></Header>

        <div>
          <Routes>
            <Route path="/" element={<AnimeList></AnimeList>}></Route>
            <Route path="/favourite" element={<Favourite></Favourite>}></Route>

            <Route
              path="/anime/:id"
              element={<AnimeDetail></AnimeDetail>}
            ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
