import React from 'react'
import { useParams } from 'react-router-dom'

export default function EmployeeEdit() {
    const { id } = useParams()
    return (
        <div>
            <h1>{`This is a placeholder for editing employee: ${id}`} </h1>
        </div>
    )
}