import React, {Component} from 'react'

import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <div id="navContainer">
        <nav className="navbar navbar-inverse">
          <div className="navWide">
            <div className="wideDiv container-fluid">
              <ul className="nav navbar-nav">
                <li>
                  <p>Logo <br/>
                  Here</p>
                </li>
                <li>
                  <NavLink to="/"><span>HOME</span></NavLink>
                </li>
                <li>
                  <NavLink to="/about"><span>ABOUT</span></NavLink>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/register"><span>LOGIN / SIGN UP</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x col-md-10" onClick={this.burgerToggle}></i>
            <div className="narrowLinks ">
              <ul id="navNarList" className="nav navbar-nav">
                <li onClick={this.burgerToggle}>
                  <NavLink to="/home"><span>HOME</span></NavLink>
                </li>
                <li onClick={this.burgerToggle}>
                  <NavLink to="/about"><span>ABOUT</span></NavLink>
                </li>
                <li>
                  <NavLink to="/register"><span>LOGIN / SIGN UP</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
