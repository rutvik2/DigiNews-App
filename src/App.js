import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress:0
  };
  pageSize= 5;
  apikey = process.env.REACT_APP_API_KEY

  setProgress=(progress)=>{
    this.setState({progress: progress});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
      />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" pageSize={this.pageSize} category="general"/>}></Route>
            <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" country="in" pageSize={this.pageSize} category="business"/>}></Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment"/>}></Route>
            <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" pageSize={this.pageSize} category="general"/>}></Route>
            <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" country="in" pageSize={this.pageSize} category="health"/>}></Route>
            <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" country="in" pageSize={this.pageSize} category="science"/>}></Route>
            <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" country="in" pageSize={this.pageSize} category="sports"/>}></Route>
            <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" country="in" pageSize={this.pageSize} category="technology"/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}



