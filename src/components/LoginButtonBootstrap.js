import React, { Component } from "react"
import { connect } from 'react-redux'


import Button from 'react-bootstrap/Button'
/* import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 */
import { getShowLoginDialogAction } from "../actions/AuthenticationActions"

const {log} = console

function LoginButtonBootstrap(props) {

    function showLoginDialog(){
        log("clicked showLoginDialog")
        props.dispatch(getShowLoginDialogAction())  //sendet die Action, die wir definiert haben an den Store (und der dann an den Reducer oder so)
    }

    return (
        <div>
            <Button variant="outline-secondary" active onClick={showLoginDialog}>Login</Button>
        </div>
    )
}

export default connect()(LoginButtonBootstrap)
