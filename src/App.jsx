import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'
import Account from './pages/Account'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
