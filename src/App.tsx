import './App.css'
import GetProducts from './Componets/Products'
import { Provider } from './components/ui/provider'
import {HeroUIProvider} from "@heroui/react";
import DisplayNav from './Componets/Nav';
import './styles/tailwind.css';
import CartSummary from './Componets/Summary';
import CartProvider from './store/context';

function App() {
  return(
    <div>
      <HeroUIProvider>
        <CartProvider>
          <DisplayNav />
          <Provider>
            <GetProducts />
            <CartSummary />
          </Provider> 
        </CartProvider>
      </HeroUIProvider> 
    </div>
  )
}

export default App
