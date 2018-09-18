import React, { Component } from 'react';
import SerializeForm from 'form-serialize';
import { createUser } from "../actions/action";
import { connect } from 'react-redux';
class CreateUser extends Component {

    addUser = (event) => {
        event.preventDefault();
        const userData = SerializeForm(event.target, {hash: true});
        this.props.dispatch(createUser(userData))
        this.props.history.push('/users');
    };

    componentDidMount() {
    }

    render() {
        return(
            <form onSubmit={this.addUser}>
                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <input type="text" name='name' id='name' placeholder='Name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" name='location' id='location' placeholder='Location'/>
                </div>

                <input type="Submit" name='submit'/>
            </form>
        )
    }
}

export default connect()(CreateUser);
