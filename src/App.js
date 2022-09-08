import {Routes, Route} from 'react-router-dom';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main';
import './App.css';

function App() {
  return (
    <div className='main-box'>
      <div>
        <Header/>
      </div>
      <div className='content'>
        <Routes>
            <Route path='/' element={<Main/>}/>{/*
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/catalog/:id' element={<CatalogItem/>} />
            <Route path='/cart' element={<Cart/>} />*/}
        </Routes>
      </div>
      <div>
        <Footer className='footer-content'/>
      </div>
    </div>
  )
}

export default App;