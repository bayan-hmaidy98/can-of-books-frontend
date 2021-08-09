import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Content from './Content';


class Profile extends Component {
    render() {
        const { user,isAuthenticated } = this.props.auth0;

        return (
        isAuthenticated &&
        <div>
       <img src = {user.picture} alt={user.name}/>
        <div> {user.name}</div>
        <p>
            {user.email}
        </p>
        <Content />
        </div>
        );
    }
    }

export default withAuth0(Profile);