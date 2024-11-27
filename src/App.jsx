import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { PagesRoutes } from "./pages/routes"

function App() {

  return (
    <DefaultLayout>
      <Routes>
        <Route path="/*" element={<PagesRoutes />} />
      </Routes>
    </DefaultLayout>
  )
}

export default App
