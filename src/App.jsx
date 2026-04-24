import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavHeader from "./components/shoping/NavHeader";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./contexts/Cardcontext";
import ReducerExample from "./components/reducer-example/ReducerExample";
import CallbackExample from "./components/callback-example/CallbackExample";
import LayoutExample from "./components/useLayout-example/LayoutExample";
import MemoExample from "./components/memo-example/MemoExample";
import CustomHookExample from "./components/custom-hooks/CustomHookExample";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavHeader/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="reducer-example" element={<ReducerExample/>} />
          <Route path="memo-example" element={<MemoExample/>} /> 
          <Route path="callback-example" element={<CallbackExample/>} /> 
          <Route path="layout-example" element={<LayoutExample/>} /> 
          <Route path="custom-hook-example" element={<CustomHookExample/>} /> 

          
          

        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

/* 
import { AuthProv } from "./components/auth-example/AuthContx";
import Navbar from "./components/auth-example/Navbar";

function App() {
  return (
    <AuthProv>
      <Navbar/>
    </AuthProv>
  )
}


import { useState, createContext, useContext } from 'react'
import Toolbar from './components/theme-example/Toolbar'; 
import Themecontext from './components/theme-example/ThemeContext';
// Theme switch context
function App() {
  const [theme, setTheme] = useState("light");
 
  return (
      <Themecontext.Provider value={{theme, setTheme}}>
      <>
      <h3>theme Swither</h3>
      <Toolbar/>
      </>
      </Themecontext.Provider>
  )
}






// simple use context 
const UserContext = createContext();
function App() {
  const userName = { name: 'vikas Kumar', role: 'Admin' };
  return (
    <>
      <UserContext.Provider value={userName}>
        <Parent />
      </UserContext.Provider>
    </>
  )
}

function Parent() {
  return (
    <Child />
  )
}

function Child() {
  const { name } = useContext(UserContext);
  return (
    <>
      <h5>Hello from Child - {name} </h5>
      <Grandchild />
    </>
  )
}

function Grandchild() {
  const { name: userNm, role } = useContext(UserContext);
  return (
    <>
      <h3> Hello {userNm} ({role})</h3>
    </>
  )
}

*/

export default App
