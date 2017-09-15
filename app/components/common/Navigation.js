import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

import {logout} from '../layouts/Helpers';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                             <span>
                               <img alt="image" width="48" className="img-circle" src="img/user.png" />
                             </span>
                             <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear">
                                    <span className="block m-t-xs"> <strong className="font-bold">Jeferson Inacio</strong></span>
                                    <span className="text-muted text-xs block">Perfil</span>
                                </span>
                              </a>

                            </div>
                            <div className="logo-element">
                                <i className="fa fa-paw" aria-hidden="true"></i>
                            </div>
                        </li>
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-home"></i> <span className="nav-label">Home</span></Link>
                        </li>
                        <li className={this.activeRoute("/vacinas")}>
                            <Link to="/vacinas"><i className="fa fa-tint" aria-hidden="true"></i> <span className="nav-label">Vacinas</span></Link>
                        </li>
                        <li className={this.activeRoute("/atendimento")}>
                            <Link to="/atendimento"><i className="fa fa-handshake-o" aria-hidden="true"></i> <span className="nav-label">Atendimento</span></Link>
                        </li>

                    </ul>

            </nav>
        )
    }
}

export default Navigation
