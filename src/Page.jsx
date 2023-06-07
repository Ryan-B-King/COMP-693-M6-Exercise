import React from 'react'
import { NavLink } from 'react-router-dom'
import Contents from './Content.jsx'

function NavBar() {
    const Separator = () => <span> | </span>
    return (
       <nav>
            <NavLink end to='/'>Home</NavLink>
            <Separator />
            <NavLink to='/employees'>All Employees</NavLink>
            <Separator />
            <NavLink to='/report'>Report</NavLink>
       </nav>
    )
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}