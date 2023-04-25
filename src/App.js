import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/portfolio/dashboard';
import ViewMovie from './components/movieList/viewMovie';
import MovieListHome from './components/movieList/home';
import GolfGameDashboard from './components/my-golf-game/dashboard';
import NewCourse from './components/my-golf-game/newCourse';
import NewScore from './components/my-golf-game/newScore';
import Calculator from './components/calculator/calculator';
import Profile from './components/my-golf-game/profile';
import YourScores from './components/my-golf-game/yourScores';

function App() {
  return (
    <Routes>
      <Route path={'/'} exact={true} element={<Dashboard />} />
      <Route path={'/viewMovie'} exact={true} element={<ViewMovie />} />
      <Route path={'/movieList'} exact={true} element={<MovieListHome />} />
      <Route
        path={'/my-golf-game'}
        exact={true}
        element={<GolfGameDashboard />}
      />
      <Route path={'/newScore'} exact={true} element={<NewScore />} />
      <Route path={'/newCourse'} exact={true} element={<NewCourse />} />
      <Route path={'/calculator'} exact={true} element={<Calculator />} />
      <Route path={'/profile'} exact={true} element={<Profile />} />
      <Route path={'/yourScores'} exact={true} element={<YourScores />} />
    </Routes>
  );
}

export default App;
