import logo from "./logo.svg";
import "./App.css";
import kurisu from "./assets/images/107935945_p1_master1200.jpg";
import Header from "./components/Header";
import AnimeList from "./pages/AnimeList";
import Home from "./pages/Favourite";
import AnimeDetail from "./pages/AnimeDetail";
import Footer from "./components/Footer";
//bổ sung thêm component menu drop donwn gồm {trang chủ, thể loại, xem nhiều, top score anime, năm} và component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourite from "./pages/Favourite";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import { AnimeProvider } from "./contexts/AnimeContext";
function App() {
  return (
    <Router>
      <div className="container mx-auto bg-gray-100">
        <AnimeProvider>
          <Header></Header>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<AnimeList></AnimeList>}></Route>
            <Route path="/favourite" element={<Favourite></Favourite>}></Route>

            <Route
              path="/anime/:id"
              element={<AnimeDetail></AnimeDetail>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </AnimeProvider>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
