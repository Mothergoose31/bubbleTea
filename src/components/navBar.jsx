import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import StoreList from './storeList'
import DishList from './dishList'
import StorePage from './StorePage.jsx'
import AddStoreForm from './addStore.jsx'

const Navbar = () => (

    <Router>
        
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">Bubble Tea!</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/"  className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stores"  className="nav-link">Store List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dishes"  className="nav-link">Dishes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stores/addstore"  className="nav-link">Add Store</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Switch>
            <Route exact path='/'  />
            <Route  exact path='/stores/store/:storeId' render={props=><StorePage {...props} />}/>
            <Route exact path='/stores' render={() => <StoreList />} />
            <Route exact path='/dishes' render={() => <DishList />} />
            <Route exact path='/stores/addstore' render={() =><AddStoreForm/>}/>
        </Switch>
    </Router>


    // <Router>
    //     <nav>
    //         <Link to='/'>HOME</Link>{' '} ||
    //         <Link to='/stores'>STORE LIST</Link>{' '} ||
    //         <Link to='/dishes'>DISHES</Link>{' '}

    //     </nav>
    //     <Route exact path='/'  />

    //     <Route exact path='/stores' render={() => <StoreList />} />
    //     <Route exact path='/dishes' render={() => <DishList />} />




    // </Router>


);

export default Navbar;