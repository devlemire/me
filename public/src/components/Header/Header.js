import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  state = {
    menuVisible: false
  }

  toggleMobileMenu = () => {
    const { menuVisible } = this.state
    let { style: menu_style } = this.refs.mobile_menu

    if (menuVisible) {
      menu_style.animation =
        'mobile-menu-close 0.4s ease-in-out 0s 1 normal forwards'
    } else {
      menu_style.animation =
        'mobile-menu-open 0.4s ease-in-out 0s 1 normal forwards'
    }

    this.setState({ menuVisible: !menuVisible })
  }

  render() {
    return (
      <header ref="header">
        <div id="Header-left">
          <span>jameslemire.me</span>
        </div>

        <div id="Header-right">
          <span id="Header-mobile-menu-btn" onClick={this.toggleMobileMenu}>
            <i className="fas fa-bars" />
          </span>

          <div id="Header-desktop-menu">
            <Link className="router-link" to="/">
              Home
            </Link>
            <Link className="router-link" to="/blog">
              Blog
            </Link>
          </div>
        </div>

        <div
          id="Header-mobile-menu"
          ref="mobile_menu"
          onClick={this.toggleMobileMenu}
        >
          <ul>
            <li>
              <Link className="router-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="router-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
