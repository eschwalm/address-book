import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import { connect } from 'react-redux'
import {Container, Row} from 'reactstrap'
import EditModal from './edit.js'

const cellEdit = {
  mode: 'dbclick'
}

class Search extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onClear = this.onClear.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  
  onChange(e) {
    if(e.target.value ===""){
      this.props.fetchData({firstName: "*"})
    }
    else {
      this.props.fetchData({firstName: e.target.value})
    }
  }

  onClear(e) {
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput)
    searchInput.value=""
    this.props.fetchData({firstName: "*"})

  }

  onSubmit(e) {
    //prevents full page reload
    e.preventDefault();
  }
  
  toggleModal(data) {
    return (
      <EditModal data={data}/>
    )
  }

  renderTitleAndForm(){
    let titleAndForm = (
      <Container>
      <Row className="show-grid top10">
        <h2> Filter Contacts by First Name</h2>
      </Row>
      <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
          <FormGroup >
              <Input type="search" name="search" id="searchInput" placeholder="First Name" onChange={this.onChange} />
          </FormGroup>
          {' '}
          <Button className ="btn-ll5" onClick={ this.onClear }>
                 Clear
          </Button>
          </Form>
      </Row>
      </Container>
    );

    return titleAndForm;
  }

  renderFullForm(){
    let fullForm = (
      <Container>
      <Row className="show-grid top10">
        <h2> Filter Contacts by First Name</h2>
      </Row>
      <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
          <FormGroup >
              <Input type="search" name="search" id="searchInput" placeholder="First Name" onChange={this.onChange} />
          </FormGroup>
          {' '}
          <Button className ="btn-ll5" onClick={ this.onClear }>
                 Clear
          </Button>
          </Form>
      </Row>
      <Row className="show-grid top10">
        <BootstrapTable 
          data={ this.props.searchData } 
          keyField='id'
          search={ false } 
          cellEdit={ cellEdit } 
          striped 
          insertRow 
          deleteRow
          >
        <TableHeaderColumn dataField='first_name' >First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='last_name' >Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField='street_address'>Street Address</TableHeaderColumn>
        <TableHeaderColumn dataField='city' >City</TableHeaderColumn>
        <TableHeaderColumn dataField='state' >State</TableHeaderColumn>
        <TableHeaderColumn dataField='zip' >Zip</TableHeaderColumn>
        </BootstrapTable>        
      </Row>
      </Container>
    );
    return fullForm
  }

  render() {

   if( this.props.searchData.length !== 0){
      return (
        this.renderFullForm()
      );
    }else{
      return (
        this.renderTitleAndForm()
      );
    }
  }
}

function mapStatetoProps(state){
  return {
    searchData: state.searchData
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchData: firstName => dispatch({type: 'FETCH_SEARCH_DATA', payload:firstName}),
  }
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search)

export default ConnectedSearch
