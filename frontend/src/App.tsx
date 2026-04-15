import { useState } from 'react'
import './App.css'
import Earthquakes from './components/Earthquakes.tsx'
import NavigationBar from "./components/NavigationBar.tsx";
function App() {
  return (
         <div className="App">
             <NavigationBar></NavigationBar>
           <Earthquakes></Earthquakes>
          </div>
  );
}

export default App
