import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const [progress, setProgress] = useState(0)
  const pageSize= 5;
  const apikey = process.env.REACT_APP_API_KEY


    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
            
      />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" country="in" pageSize={pageSize} category="general"/>}></Route>
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" country="in" pageSize={pageSize} category="business"/>}></Route>
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" country="in" pageSize={pageSize} category="entertainment"/>}></Route>
            <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" country="in" pageSize={pageSize} category="general"/>}></Route>
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" country="in" pageSize={pageSize} category="health"/>}></Route>
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" country="in" pageSize={pageSize} category="science"/>}></Route>
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" country="in" pageSize={pageSize} category="sports"/>}></Route>
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" country="in" pageSize={pageSize} category="technology"/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App


