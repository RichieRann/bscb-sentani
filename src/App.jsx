import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"

function App() {
  return (
    <main className="">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<h1>About Us</h1>}
        />
        <Route
          path="/contact"
          element={<h1>Contact Us</h1>}
        />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  )
}

export default App
