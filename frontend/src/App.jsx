import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SinglePage from './screens/SinglePage';
import LatestArticlesPage from './screens/LatestArticlesPage';
import Login from './screens/admin/Login';
import MainLayout from './MainLayout'; // Import the MainLayout component
import Dashboard from './screens/admin/Dashboard';
import Posts from './screens/admin/Posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
        <Route path='/lost-black-box' element={<MainLayout><SinglePage /></MainLayout>} />
        <Route path='/singlepostview' element={<MainLayout><SinglePage /></MainLayout>} />
        <Route path='/latest' element={<MainLayout><LatestArticlesPage /></MainLayout>} />
        <Route path='/login' element={<MainLayout><Login /></MainLayout>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin' element={<Dashboard />}>

        <Route path='posts' element={<Posts />} />
        <Route path='dashboard' element={<h1>Welcome to the Admin Dashboard</h1>} />
        </Route>

        
      </Routes>
    </Router>
  );
}

export default App;
