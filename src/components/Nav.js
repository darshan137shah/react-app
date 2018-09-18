import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {authService} from "../services/authService";

class Nav extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to='/' activeClassName='class1' exact>Home</NavLink></li>
                    {
                        authService.checkUserStatus() ?
                            <span>
                                <li><NavLink to='/users' activeClassName='class1' exact>Users</NavLink></li>
                                <li><NavLink to='/create' activeClassName='class1' >Create</NavLink ></li>
                            </span>
                        : ""
                    }

                </ul>
            </nav>
        )
    }

}

export default Nav;