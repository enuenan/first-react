import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Portfolio from './Portfolio'

export const PagesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
        </Routes>
    )
}
