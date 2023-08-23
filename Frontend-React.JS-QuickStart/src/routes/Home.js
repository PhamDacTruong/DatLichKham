import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { USER_ROLE } from '../utils';
class Home extends Component {

    render() {
        const { isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/home';
        // const { isLoggedIn, userInfo } = this.props;
        // let linkToRedirect = '/home';
      
        // if (isLoggedIn) {
           
        //   if (USER_ROLE.ADMIN) {
        //     linkToRedirect = '/system/user-manage';
        //   } else if (USER_ROLE.DOCTOR) {
        //     linkToRedirect = '/doctor/manage-schedule';
        //   }
        // }
        return (
            <Redirect to={linkToRedirect} />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
