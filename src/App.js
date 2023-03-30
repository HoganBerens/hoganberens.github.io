import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/portfolio/dashboard";
import ViewMovie from "./components/movieList/viewMovie";
import MovieListHome from "./components/movieList/home";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact={true} element={<Dashboard />} />
      <Route path={"/viewMovie"} exact={true} element={<ViewMovie />} />
      <Route path={"/movieList"} exact={true} element={<MovieListHome />} />
    </Routes>
  );
}

export default App;
