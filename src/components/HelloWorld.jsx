import React, { Component } from 'react'

class HelloWorld extends Component{
  render(){
    return(
      <div>
      {/* component without dynamic data binding */}
      <div>
        <h1>Showing simple component demo</h1>
      </div>
      {/* component with data binding */}
      <div>
        <h1>Dynamic binding demo, Showing dynamic text using props, Mike {this.props.name}</h1>
      </div>
      </div>
    );
  }
}

export default HelloWorld;