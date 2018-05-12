import React from 'react'
import Kurssit from './Kurssit.js'

const App = ({ kurssit }) => {
    return (
        <div>
            <Kurssit kurssit={kurssit} />
        </div>
    )
}

export default App