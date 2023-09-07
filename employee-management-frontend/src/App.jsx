import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { HeaderComponent } from './layout/HeaderComponent'
import { FooterComponent } from './layout/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path='/' element={ <ListEmployeeComponent></ListEmployeeComponent> }></Route>
                    <Route path='/employees' element={ <ListEmployeeComponent></ListEmployeeComponent> }></Route>
                    <Route path='/add-employee' element={ <EmployeeComponent></EmployeeComponent> }></Route>
                    <Route path='/update-employee/:id' element={ <EmployeeComponent></EmployeeComponent> }></Route>
                </Routes>
                <FooterComponent></FooterComponent>
            </BrowserRouter>
        </>
    )
}

export default App
