import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const App = ()=> {

  const apiKey = process.env.REACT_APP_NEWS_API


// state={
//   progress:10
// }
const [progress, setProgress] = useState(10)

  const setProgressFun = (newprogress)=>{
    // this.setState({progress:newprogress})
    setProgress(newprogress)
  }

 
 
    return (
      <Router>


      <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
      <Navbar/>

    <Routes>
     <Route exact path ="/"   element={<News apiKey={apiKey} setProgressFun={setProgressFun}  key="general" pageSize={6} country={"us"} category="general"/>}>
      
      </Route>
     <Route exact path="technology"  element={<News apiKey={apiKey} setProgressFun={setProgressFun} key="technology" pageSize={6} country={"in"} category="technology"/>}>
  
      </Route>
     <Route exact path="science"   element={<News apiKey={apiKey} setProgressFun={setProgressFun} key="science" pageSize={6} country={"us"} category={"science"}/>}>
      
      </Route>
     <Route exact path="health"  element={<News apiKey={apiKey} setProgressFun={setProgressFun}  key="health"  pageSize={6} country={"us"} category={"health"}/>}>

      </Route>
     <Route exact path="sports"   element={<News apiKey={apiKey} setProgressFun={setProgressFun} key="sports" pageSize={6} country={"us"} category={"sports"}/>}>
      
      </Route>
     <Route exact path="entertainment" key="entertainment" element={<News apiKey={apiKey} setProgressFun={setProgressFun} pageSize={6} country={"us"} category={"entertainment"}/>}>
      
      </Route>
     <Route  exact path="business"  element={<News apiKey={apiKey} setProgressFun={setProgressFun} key={"business"} pageSize={6} country={"us"} category={"business"}/>} exact path="business">
      
      </Route>
    

      </Routes> 

      </Router>
    )
  }

  export default App




