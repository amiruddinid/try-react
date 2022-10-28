import {
  Routes, Route, Link
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cari from './pages/Cari/Cari';
import Faq from './pages/Faq';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <nav>
          <Link className="btn btn-primary" to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/cari-motor">Cari</Link> |{" "}
          <Link to="/faq">FAQ</Link>
        </nav>
        {/* <Counter start="899"/>  */}
        { /* component counter dengan properti start*/}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cari-motor" element={<Cari/>} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
