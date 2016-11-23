import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import _ from 'lodash';

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
    var tree = {}
    _.each(data, (val,key) =>{
      var p = key.split("/");
      p.shift();
      var currentLevel = tree;

      while(p.length > 0){
        if(p[0].indexOf(".") > -1){
          var obj = {};
          obj[p[0]] = val;
          currentLevel.push(obj);
          p = p.splice(1);
        } else {
          if(currentLevel.hasOwnProperty(p[0])){
            currentLevel = currentLevel[p[0]]
            p = p.splice(1);
          } else {
            currentLevel[p[0]] = [];
            currentLevel = currentLevel[p[0]]
            p = p.splice(1);
          }
        }
      }
    })
    this.setState({structure: tree})
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
      <Table fixedHeader={true}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width: "35rem"}}><TextField hintText="File" onChange={(e) => this.filterData(e)}/></TableHeaderColumn>
            <TableHeaderColumn>Lines with Test Coverage</TableHeaderColumn>
            <TableHeaderColumn>Total Lines</TableHeaderColumn>
            <TableHeaderColumn>Coverage Percentage</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {rows}
        </TableBody>
      </Table>
    )
  }
}
