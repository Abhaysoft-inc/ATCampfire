
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './screens/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SinglePage from './screens/SinglePage';
import LatestArticlesPage from './screens/LatestArticlesPage';
function App() {

  return (
    <>
    {/* Navbar */}
    <Navbar/>
    {/* <HomePage/> */}
    

    <Router>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/lost-black-box' element={<SinglePage/>}/>
        <Route path='/latest' element={<LatestArticlesPage/>}/>
      </Routes>
    </Router>
    <Footer/>
    {/* react router */}
    </>
  )
}

export default App
