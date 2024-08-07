import './App.css';

import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import {

  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SinglePage from './screens/SinglePage';
import LatestArticlesPage from './screens/LatestArticlesPage';
import Login from './screens/admin/Login';
import Posts from './screens/admin/Posts';
import PodcastScreen from './screens/PodcastScreen';
import Footer from './components/Footer';
import Drawer from './components/Drawer';

function App() {
  return (


    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/single-post' element={<SinglePage />} />
          <Route path='/latest' element={<LatestArticlesPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/podcast' element={<PodcastScreen />} />

        </Routes>
      </BrowserRouter>





    </>
  );
}

export default App;
