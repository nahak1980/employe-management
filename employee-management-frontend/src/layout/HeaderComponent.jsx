import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand">Employee Management System</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/employees'>Employees</NavLink>
                                {/* <a class="nav-link" href="#">Employee</a> */}
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/department'>Department</NavLink>
                                {/* <a class="nav-link" href="#">Department</a> */}
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
