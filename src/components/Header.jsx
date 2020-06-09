import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {logoutRequest} from '../actions'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { Link } from 'react-router-dom';
import {gravatar} from '../utils/gravatar';

const Header = props => {
    const {user} = props;
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        console.log('d')
        props.logoutRequest({})
        props.history.push('/login')
    }
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                {
                    hasUser ?
                    <div className="header__menu--profile">
                        <img src={gravatar(user.email)} alt="user.email" />
                        <p>{user.email}</p>
                    </div>
                    :
                    <div className="header__menu--profile">
                        <img src={userIcon} alt="" />
                        <p>Perfil</p>
                    </div>
                }
                <ul>{hasUser ?
                    <li><a href="#" onClick={handleLogout}>Cerrar sesión</a></li>
                    :
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                }
                </ul>
            </div>
        </header>
    )
}

const mapDispatchToProps = {
    logoutRequest,
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));