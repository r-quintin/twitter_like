import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import 'tailwindcss/tailwind.css';
import Header from "./views/components/Header.jsx";

function App() {
  return (
      <>
          <Header />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
