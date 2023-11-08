import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import 'tailwindcss/tailwind.css';
import Header from "./views/components/Header.jsx";
import Tweet from "./views/Tweet.jsx";
import Tweets from "./views/Tweets.jsx";
import TweetAdd from "./views/TweetAdd.jsx";

function App() {
  return (
      <>
          <Header />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tweet" element={<Tweets />} />
                  <Route path="/tweet/:id" element={<Tweet />} />
                  <Route path="/tweet/add" element={<TweetAdd />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
