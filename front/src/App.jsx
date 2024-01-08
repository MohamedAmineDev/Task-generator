import React, { useState } from 'react';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Panel from './Components/Panel';
import axios from "axios";
const globalUrl="http://task-backend/api";
function App() {
  const [tasks, setTasks] = useState([]);
  const [isStarted,setIsStarted]=React.useState(true);
  const [isLoading,setIsLoading]=React.useState(false);
  React.useEffect(()=>{
    if(isStarted){
      setIsLoading(true);
       fetchTasks();
      setIsStarted(false);
    }
  },[isStarted]);
  async function fetchTasks(){
    const url=`${globalUrl}/load_tasks`;
    try {
      const response= await axios.get(url);
      setTasks(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function startLoading(){
    setIsStarted(true);
  }
  return (
    <>
    <Header />
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8">
          {isLoading ? <p>Is loading...</p>:< Panel tasks={tasks} fetchTasks={fetchTasks} startLoading={startLoading} globalUrl={globalUrl}  />}
        </div>
        <div className="col-1"></div>
      </div>
      <Footer />
    </>
  )
}

export default App;
