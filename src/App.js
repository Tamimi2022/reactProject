import React, { useEffect, useState } from "react"
import "./App.css"
import randomColor from "randomcolor"
import Header from "./Header"
import Footer from "./Footer"

function App () {
  const [ Count, setCount ] = useState(0)
  const [ CountNegative, setnegative ] = useState(0)
  const [ color, setColor ] = useState("")
  function Increament () {
    setCount(prevCount => prevCount + 1)
  }
  function Descrement () {
    setnegative(prevCount => prevCount - 1)
  }
  useEffect(() => {
    setColor(randomColor())
  }, [ Count ])
  return(
    <div>
      <Header />
      <h1 className="text1" style={{color: color}}>{Count} :  Colors full</h1>
      <h1 className="text2">{CountNegative} :   No Colors</h1>
      <button onClick={Increament}>Increament +</button>
      <button onClick={Descrement}>Descrement -</button>
      <Footer />
    </div>
  )
}

export default App