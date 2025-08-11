import React from "react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-amber-900 py-20 px-4 flex flex-col items-center animate-fade-in">
      <h2 className="text-4xl font-bold text-white mb-8 tracking-wider">
        Contact Us
      </h2>
      <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-amber-200 rounded px-4 py-2 focus:outline-none focus:border-amber-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-amber-200 rounded px-4 py-2 focus:outline-none focus:border-amber-800"
        />
        <textarea
          placeholder="Your Message"
          className="border border-amber-200 rounded px-4 py-2 focus:outline-none focus:border-amber-800"
          rows={4}
        />
        <button
          type="submit"
          className="bg-amber-800 text-white rounded-full px-6 py-2 font-semibold hover:bg-amber-700 transition">
          Send Message
        </button>
      </form>
      <div className="mt-8 text-white opacity-80">
        Jl. Manuruki 3, Kota Makassar | 0812-3456-7890 | @kopiu.cafe
      </div>
    </section>
  )
}
