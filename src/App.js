import './App.css';

import React, { useState } from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import NewUser from './components/NewUser';

const App = ()=> {
  
  const pageSize=6;
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress, setProgress] = useState(0)

    return (

      <div>
        <Router>
          

          <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
          />
          
         <Switch>
            <Route exact path="/" component={Login}/>
            <Route  path="/newUser" component={NewUser}/>
            <Route exact path="/home"><NavBar/> <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/> </Route>
            <Route exact path="/business"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
            <Route exact path="/general"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route>
            <Route exact path="/health"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route>
            <Route exact path="/science"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route>
            <Route exact path="/sports"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
            <Route exact path="/technology"><NavBar/><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
            
          </Switch>
        </Router>
    </div>
    )
  
}


export default App;