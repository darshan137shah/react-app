import React, { Component } from 'react';
import './users.css';
import { deleteUser, getData } from '../actions/action';
import { connect } from 'react-redux';

class Users extends Component {

    componentDidMount() {
        this.props.dispatch(getData());
    }

    render() {
        const userdata = this.props.users;
        this.deleteUser = (username) => {
            this.props.dispatch(deleteUser(username));
        };

        this.view = (name) => {
            this.props.history.push('/view/' + name);
        }
        return(
            <div>
                <h2> User Details </h2>
                <ul>
                {userdata.map((item, index) => {
                    return  <li key={index}> <span> {item.name} </span> <button onClick={() => this.view(item.name)}> View </button> <button onClick={() => this.deleteUser(item.name)}> Delete </button>
                    </li>
                })}
                </ul>
            </div>
        )
    }
}

function initMapStateToProps(data) {
    return {
        users: data
    }
}

export default connect(initMapStateToProps)(Users);