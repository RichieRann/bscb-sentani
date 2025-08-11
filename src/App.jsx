import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"

function App() {
  return (
    <main className="w-screen min-h-screen bg-gray-300 scroll-smooth">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  )
}

export default App
