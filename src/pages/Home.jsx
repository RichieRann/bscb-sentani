import React, { useState } from "react"
import Navbar from "../components/Navbar"
import HomeSection from "../components/HomeSection"
import ProductsSection from "../components/ProductsSection"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"

export default function Home() {
  const [preview, setPreview] = useState(null)

  return (
    <div className="relative bg-amber-50 min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <HomeSection />
      <ProductsSection
        preview={preview}
        setPreview={setPreview}
      />
      <AboutSection />
      <ContactSection />
      <footer className="bg-amber-950 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} KOPI-U. Crafted with ☕ and ❤️.
      </footer>
    </div>
  )
}
