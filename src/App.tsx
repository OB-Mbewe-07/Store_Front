import { useEffect, useState } from 'react'
import './App.css'
import GetProducts from './Componets/Products'
import { Provider } from './components/ui/provider'

function App() {
  return(
    <div>
      <Provider>
        <GetProducts />
      </Provider> 
    </div>
  )
}

export default App
