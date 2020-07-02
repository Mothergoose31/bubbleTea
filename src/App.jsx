import React from 'react';
import {BrowserRouter as Router,route} from 'react-router-dom';
import Navbar from './components/navBar.jsx'
import './App.css';
import AddStore from './components/addStore.jsx'
import AddStoreForm from './components/addStore.jsx'



function App() {
  return (
    
    <AddStoreForm/>
    // <Router>
    // {/* navbar needs to be added */}
    // <Navbar/>
    // <br/>
    // {/* route for the restaunrant list */}
    // <Route path="/" exact component={StoreList}/>
    // {/* route to render a single restaurant with all its dishes  they will be displayed in the form of cards */}
    // <Route path="/store/:id" component={Store}/>
    // {/* route to add a restaurant */}
    // <Route path="/createStore" component={addStore}/>
    // {/* route to add a dish  */}
    // <Route path="/store/:id/addDish" component={AddDish}/>

    
    // </Router>
  );
}

export default App;

