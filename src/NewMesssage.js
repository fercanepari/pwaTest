import React, { Component } from 'react';
import axios from "axios";


export default class PostNewMessageItemSimple extends Component {

    state = {
      title: [],
      body: []
    }  
    
    handleChange = event =>{
      this.setState({title: event.target.value});            
    };

    handleQtyChange = event =>{
      this.setState({body: event.target.value});              
    };

    handleSubmit = event =>{
      event.preventDefault();

    let axiosConfig = {
        headers: {
            'Transfer-Encoding': 'chunked',
            'Content-Type': 'application/json; charset=utf-8',
            'Location': 'https://localhost:44335/api/Messages/add',
            'Server': 'Microsoft-IIS/10.0',
            'X-Powered-By': 'ASP.NET'
            //'': ''
            /*
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Accept': 'application/json'
            */
        }
      };

    axios.post('https://localhost:44335/api/Messages/add',
    {
      'Title' : this.state.title,
      'Body': this.state.body
    }, axiosConfig)
      .then((res) => {
        console.log(res);
        //alert(res.data);
      })
      .catch((err) => {
        alert(err);
      })
    }

    render () {
    return (
        <form onSubmit={this.handleSubmit}>
            <br></br>
            <label>
              Title:
              <input type="text" name="title" onChange={this.handleChange}></input>
            </label><br></br>
            <br></br>
            <label>
              Quantity:
              <input type="test" name="body" onChange={this.handleQtyChange}></input>
            </label><br></br>
            <br></br>
            <button type="submit">Send</button>
        </form>   
      );
    }
 }