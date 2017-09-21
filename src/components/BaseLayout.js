import React, { Component } from 'react'

import NavBar from './NavBar'
import Footer from './Footer'

export default class BaseLayout extends Component {



  render() {
    return(
      <div>
        <NavBar />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
