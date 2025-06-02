import logo from "./logo.svg";
import "./App.css";
import kurisu from "./assets/images/107935945_p1_master1200.jpg";
import Header from "./components/Header";
import AnimeList from "./pages/AnimeList";
import Home from "./pages/Home";
import AnimeDetail from "./pages/AnimeDetail";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-grow">
          <Routes>
            <Route path="/anime" element={<AnimeList></AnimeList>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/anime/:id"
              element={<AnimeDetail></AnimeDetail>}
            ></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
