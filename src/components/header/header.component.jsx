import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import { connect } from 'react-redux';

const  Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo  className='logo' />
        </Link>

        <div className="options">
            <Link to='/shop' className='option'> Shop </Link>
            <Link to='/contact' className='option'> Contact </Link>

            {
                currentUser ?

                (
                    <div className='option' onClick={() => auth.signOut()}  > Sign Out</div>
                ) : 

                (
                    <Link className='option' to='/signin'> Sign In</Link>
                )
            }
            
        </div>
    </div>
);


const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);


