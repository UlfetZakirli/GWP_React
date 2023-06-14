import './App.css'
import Footer from './components/Footer'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
       */}
      <Footer />
    </div>
  )
}

export default App
