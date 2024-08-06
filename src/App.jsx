import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { About, Catalog, Home, News } from './pages'

const App = () => {
  return (
    <main className='relative'>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App