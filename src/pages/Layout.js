import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log($);
    return(
      <div>
        <AppBar title="DiffBlue Assignment"></AppBar>
        <div style={{textAlign: "center"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
