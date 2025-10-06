import './App.css';
import { Route, Routes, Link, BrowserRouter } from 'react-router';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">

    <div>

      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/projects" element={<Projects />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="*" element={
            <div 
              style={{textAlign: 'center', margin: '100px 0px'}}
            >

              <h1 style={{marginBottom: '30px'}}>
                404 Not Found
              </h1>
              0ops, The Page You Are Looking For Is Not Found.

              <Link to="/"
                style={{
                  textDecoration: 'none', 
                  color: '#304ffe'
                }}
              >
                Go to Home
              </Link>
            </div>
          }>

          </Route>

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
