import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getData} from "../actions/action";

class showUser extends Component {

    componentDidMount() {
        this.props.dispatch(getData());
    }

    render() {
        var users = this.props.users.filter((item) => {
            return item.name == this.props.match.params.id;
        });

        return (
            <ul>
                {users.map((item, index) => {
                    return  (
                    <li key={index}>
                        <h1> Name: {item.name}</h1>
                        <h1> Location: {item.location}</h1>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

function initMapStateToProps(data) {
    return {
        users: data
    }
}
export default connect(initMapStateToProps)(showUser);