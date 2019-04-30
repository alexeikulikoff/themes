import React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const Button3D = function( {dispatch} ){
    return (
            <button  onClick= { e=> { dispatch(addTodo('hello-'))}} >OK</button>
)}

export default connect()( Button3D ) ;