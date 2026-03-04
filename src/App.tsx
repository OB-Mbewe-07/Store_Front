import { useEffect, useState } from 'react'
import './App.css'
import GetProducts from './API/data'

function App() {
  return(
    <div>
      <GetProducts />
    </div>
  )
}

export default App
