import { useEffect, useState } from 'react'
import './App.css'
import GetProducts from './Componets/Products'
import { Provider } from './components/ui/provider'
import * as React from "react";
import {HeroUIProvider} from "@heroui/react";
import DisplayNav from './Componets/Nav';
import './styles/tailwind.css';

function App() {
  return(
    <div>
      <HeroUIProvider>
        <DisplayNav />
        <Provider>
          <GetProducts />
        </Provider> 
      </HeroUIProvider> 
    </div>
  )
}

export default App
