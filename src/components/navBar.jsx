import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StoreList from './storeList'
import DishList from './DishList'

const Navbar = () => (

    <Router>

        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">Bubble Tea</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stores"><a className="nav-link">Store List</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dishes"><a className="nav-link">Dishes</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Route exact path='/'  />

        <Route exact path='/stores' render={() => <StoreList />} />
        <Route exact path='/dishes' render={() => <DishList />} />

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