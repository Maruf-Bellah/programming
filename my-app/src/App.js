import React, { Component, useEffect, useState } from 'react';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className='app'>
        <Counter></Counter>
      </div>
    )
  }
}

function Counter() {
  // const [count, setCount] = useState(5)
  // const increaseCounte = () => setCount(count + 1)
  // const decreseCounte = () => setCount(count - 1)

  const [users, setUsers] = useState([]);
  // useEffect(() =>{

  // },[]) 

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[])

  return(
    <div>
      <h3>Hello {users.length}</h3>
      {
        users.map(user => <User id={user.id} name={user.name} email={user.email}></User>)
      }

{/* 
    <h1>count : {count}</h1>
    <button onClick={increaseCounte}>increase</button>
    <button onClick={decreseCounte}>idecrease</button> */}

    </div>
  )
}

function User(props) {
  return(
    <div className='friend'>
      <h3>Name : {props.id} {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  )
}


export default App;

//
// jsx 
// compnent 
// props
// useState 
// evenHandler 
// useEffect
