import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'

export const PagesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
    )
}
