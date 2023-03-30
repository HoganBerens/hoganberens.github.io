import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import ViewMovie from "./components/movieListcomponents/viewMovie";
import Home from "./components/movieListcomponents/home";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact={true} element={<Dashboard />} />
      <Route path={"/viewMovie"} exact={true} element={<ViewMovie />} />
      <Route path={"/movieList"} exact={true} element={<Home />} />
    </Routes>
  );
}

export default App;
