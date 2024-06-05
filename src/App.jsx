import { useState } from "react"
function App() {
  const [color, setColor] = useState("white")
  return (
    <div className=" w-full h-screen duration-200" style={{ backgroundColor: color }}  >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-15 transition-all border" onClick={() => setColor('white')} style={{ backgroundColor: 'white', color: 'black' }}>
            white
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-15 transition-all" onClick={() => setColor('#1D2B53')} style={{ backgroundColor: '#1D2B53' }}>
            Dark Blue
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-15 transition-all" onClick={() => setColor('#7E2553')} style={{ backgroundColor: '#7E2553' }}>
            Dark Red
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-15 transition-all" onClick={() => setColor('#FF004D')} style={{ backgroundColor: '#FF004D' }}>
           Red
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-15 transition-all" onClick={() => setColor('#FAEF5D')} style={{ backgroundColor: '#FAEF5D' }}>
            Yellow
          </button>
          <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-15 transition-all" onClick={() => setColor('#000')} style={{ backgroundColor: '#000' }}>
            Back
          </button>
          

        </div>
      </div>
    </div>
  )
}

export default App
