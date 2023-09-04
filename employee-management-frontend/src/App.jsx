import { useState } from 'react'
import './App.css'
import HelloComponent from './components/HelloComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <ListEmployeeComponent></ListEmployeeComponent>
        </>
    )
}

export default App
