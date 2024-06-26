import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/sign-in" element={<SignIn />}></Route>
       <Route path="/sign-up" element={<SignUp />}></Route>
       <Route path="/profile" element={<Profile />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}


