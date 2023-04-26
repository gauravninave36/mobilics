import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admincustomer from './pages/Admin/Admincustomer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admincustomer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
