import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function Layout(){
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout></Layout>}>
      <Route index element={<LandingPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

    </Route>
   </Routes>
  )
}

export default App
