import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap'

export default function Messages() {

const [data, setData]=useState([])
const [mode, setMode]=useState('online')

useEffect(()=>{
  let url="https://localhost:44335/api/messages"
  fetch(url).then((response)=>{
    response.json().then((result)=>{
      console.warn(result)
      setData(result)
      localStorage.setItem("users", JSON.stringify(result))
    })
  }).catch(err=>{
    setMode('offline')
    //let collection=localStorage.getItem('users')
    //setData(JSON.parse(collection))
  })

}, [])

return (
    <div>
      <div>
        {
          mode==='offline'?
          <div class="alert alert-warning" role="alert">
            You are in offline mode!
          </div>
          :null
        }
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>
            ))
          }              
        </tbody>
      </Table>
    </div>
  );
}