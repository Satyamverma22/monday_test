import { Routes, Route } from 'react-router-dom'
import Profile from './features/pages/Profile'
import Courses from './features/pages/Courses'
import Home from './features/pages/Home'
import CourseDetails from './features/pages/CourseDetails'
import Navbar from './features/components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetails />} />
      </Routes>
    </>
  )
}

export default App
