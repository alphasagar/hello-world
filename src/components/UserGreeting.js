import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  render() {

    // short circuit method

    return this.state.isLoggedIn && <div>welcome sagar</div>

    // ternary operator - method
    
    // return(
    //   this.state.isLoggedIn ? <div>welcome sagar</div> : <div>welcome guest</div>
    // )
    
      // method 1

    // let message 
    // if(this.state.isLoggedIn) message = <div>welcome sagar</div>
    // else message = <div>welcome guest</div>
    // return message

    // method 2

    // if(this.state.isLoggedIn) return <div>Welcome Sagar</div>
    // else return <div>Welcome Guest</div>


    // return (
    //   <div>
    //     <div>Welcome Sagar</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting