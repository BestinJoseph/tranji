import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, ExpertisePage } from '../Pages'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/expertise' element={<ExpertisePage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    </div>
  )
}

export default Routers
