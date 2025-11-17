import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, ExpertisePage, ProjectPage, PartnersPage, PageNotFound } from '../Pages'

const Routers = () => {
  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])

  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/expertise' element={<ExpertisePage />} />
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/partner' element={<PartnersPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}

export default Routers
