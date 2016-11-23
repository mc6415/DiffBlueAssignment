import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import $ from 'jquery';
injectTapEventPlugin();

export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: {}};
  }
  componentWillMount(){
    $.ajax({
      url: '/api/getData',
      method: 'POST',
      success: function(res){
        this.setState({data: JSON.parse(res)})
      }.bind(this)
    })
  }
  render(){
      const children =  React.Children.map(this.props.children, (child) => React.cloneElement(child, {
          data: this.state.data
      }))
      return(
      <div>
        <AppBar title="DiffBlue Assignment"></AppBar>
        <div>
          {children}
        </div>
      </div>
    )
  }
}
