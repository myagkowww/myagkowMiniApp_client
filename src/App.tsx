import './App.css'
import {useEffect} from "react";

function App() {
    useEffect(() => {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }, []);
  return (
    <>
      <div>Hello World</div>
    </>
  )
}

export default App
