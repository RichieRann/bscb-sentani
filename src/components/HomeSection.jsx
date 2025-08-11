import React from "react"

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[85vh] pt-32 pb-24 border-b-4 border-white"
      style={{
        background: `url('/img/main_banner.jpg') center/cover no-repeat`,
      }}>
      <div className="text-center text-white drop-shadow-lg animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-widest">
          KOPI-U
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wider">
          ONLY FOR U
        </h2>
        <p className="max-w-xl mx-auto text-lg md:text-xl italic opacity-90">
          "A cup of coffee shared with a friend is happiness tasted and time
          well spent."
        </p>
      </div>
      {/* Logo Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-64px] z-20">
        <div className="w-32 h-32 rounded-full border-4 border-white bg-white flex items-center justify-center shadow-xl overflow-hidden">
          <img
            src="/img/kopi_u_logo_small.jpg"
            alt="KOPI-U Logo"
            className="object-contain w-24 h-24"
          />
        </div>
      </div>
    </section>
  )
}
