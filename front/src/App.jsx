import React, { useState } from 'react';
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Panel from './Components/Panel';
import axios from "axios";
const globalUrl="http://localhost:8088/api";
function App() {
  const [tasks, setTasks] = useState([]);
  const [isStarted,setIsStarted]=React.useState(true);
  React.useEffect(()=>{
    if(isStarted){
      fetchTasks();
      setIsStarted(false);
    }
  },[isStarted]);
  async function fetchTasks(){
    const url=`${globalUrl}/load_tasks`;
    try {
      const response= await axios.get(url);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8">
          < Panel tasks={tasks}/>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}

export default App
