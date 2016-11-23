import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import _ from 'lodash';
import JSONTree from 'react-json-tree';
import omitEmpty from 'omit-empty';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filteredData: {},
      keys: [],
      structure: {}
    }
  }

  createStructure(data){
    var tree = {};
    _.each(data, (val,key) =>{
      var p = key.split("/");
      p.shift();
      var currentLevel = tree;
      while(p.length > 0){
        var name = p[0];
        if(name.indexOf(".") > -1){
          var coverage = {
            "Lines with Test Coverage": val[0],
            "Total Lines": val[1]
          }
          currentLevel[name] = coverage;
          p = p.splice(1);
        } else {
          if(currentLevel.hasOwnProperty(name)){
            currentLevel = currentLevel[name];
            p = p.splice(1);
          } else{
            currentLevel[name] = {files: {}};
            currentLevel = currentLevel[name];
            p = p.splice(1);
          }
        }
      }
    })
    this.setState({structure: omitEmpty(tree)})
  }

  componentWillReceiveProps(props){
    this.createStructure(props.data);
    this.setState({filteredData: props.data, keys: Object.keys(props.data)})
  }

  filterData(e){
    var results = this.state.keys.filter(key => {
      return key.indexOf(e.target.value) > -1
    })

    var filteredData = {}

    var data = results.map((key) => {
      filteredData[key] = this.props.data[key];
    })

    this.setState({filteredData: filteredData})
  }

  render(){
    const rows = [];

    $.each(this.state.filteredData, (row) => {
      var coverage = (this.state.filteredData[row][0] / this.state.filteredData[row][1]) * 100
      rows.push(
        <TableRow>
          <TableRowColumn style={{width: "35rem"}}>{row}</TableRowColumn>
          <TableRowColumn>{this.state.filteredData[row][0]}</TableRowColumn>
          <TableRowColumn>{this.state.filteredData[row][1]}</TableRowColumn>
          <TableRowColumn>{coverage.toFixed(2)}%</TableRowColumn>
        </TableRow>
      )
    })

    return(
      <div>
      <JSONTree data={this.state.structure} hideRoot={true}
        getItemString = {(type,data,itemType,itemString) => (<span></span>)}
      />
    </div>
    )
  }
}
