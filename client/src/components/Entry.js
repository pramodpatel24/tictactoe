import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Entry = ({ setIsAuth }) => {
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <SignUp setIsAuth={setIsAuth} />
            <Login setIsAuth={setIsAuth} />
        </div>
    )
}

export default Entry