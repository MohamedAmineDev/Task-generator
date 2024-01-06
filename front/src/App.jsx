import { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './Components/Panel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8">
          < Panel />
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default App
