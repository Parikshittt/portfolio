
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Components/LandingPage/LandingPage"
import HireMe from "./Components/HireMe/HireMe"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
